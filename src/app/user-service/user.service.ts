import { Injectable } from '@angular/core';
import { IUser, IUserCredentials } from './user.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSource = new BehaviorSubject<IUser>(IUser.getInstance());
  public user$ = this.userSource.asObservable();
  private jwtToken: BehaviorSubject<string | null>;

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

    return this.http.post<any>(this.apiURL +'authenticate', credentials, { headers })
    .pipe(map((response) => {
      const user = response.user;
      const token = response.accessToken

      this.userSource.next(user);
      this.jwtToken.next(token)
      console.log(JSON.stringify(this.userSource.value))
      console.log(JSON.stringify(this.jwtToken))
      return {user, token};
      }));
    };

    signOut() {
      const user: IUser = {username: '', password: '', firstName:'', lastName: ''}
      const token:string = '';

      this.userSource.next(user);
      this.jwtToken.next(token)
    }
          
}
   