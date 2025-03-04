import { Inject, inject, Injectable, signal } from '@angular/core';
import { IUser, IUserCredentials } from './user.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Itoast } from '../toast/Itoast';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSource = new BehaviorSubject<IUser>(IUser.getInstance());
  public user$ = this.userSource.asObservable();
  private jwtToken: BehaviorSubject<string | null>;

  private toastInit: Itoast = {title: '', message: '', isVisible: false};
  public toast = signal<Itoast>(this.toastInit);

  private credentials!: IUserCredentials;

  private apiURL = 'http://localhost:5043/api/authentication/';

  constructor(private http: HttpClient) {
    this.jwtToken = new BehaviorSubject<string | null>(null);
  }

  getUser(): IUser {
    return this.userSource.value;
  }

  signIn(credentials: IUserCredentials): Observable<{user: IUser; token: string}> {  
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.apiURL +'login', credentials, { headers })
    .pipe(map((response) => {
      const user = response.user;
      const token = response.accessToken;
      const toastSignIn: Itoast = {title: 'Signed In', message: 'You have succesfully signed in.', isVisible: true}

      this.userSource.next(user);
      this.jwtToken.next(token)
      this.toast = signal<Itoast>(toastSignIn)
      return {user, token};
      }));
    };

    signOut() {
      const user: IUser = {username: '', firstName:'', lastName: '', role: ''}
      const token:string = '';
      const toastSignOut: Itoast = {title: 'Signed Out', message: 'You have succesfully signed out.', isVisible: true}

      this.userSource.next(user);
      this.jwtToken.next(token)
      this.toast = signal<Itoast>(toastSignOut)
    }

    checkAuthstatus(){

    }
          
}
   