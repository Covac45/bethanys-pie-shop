import { Injectable } from '@angular/core';
import { IUser, IUserCredentials } from './user.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: BehaviorSubject<IUser | null>;
  private jwtToken: BehaviorSubject<string | null>;

  private credentials!: IUserCredentials;

  private apiURL = 'http://localhost:5043/api/authentication/';  

  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject<IUser | null>(null);
    this.jwtToken = new BehaviorSubject<string | null>(null);
  }

  getUser(): Observable<IUser | null> {
    return this.user;
  }

  signIn(credentials: IUserCredentials): Observable<{user: IUser; token: string}> {  
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.apiURL +'authenticate', credentials, { headers })
    .pipe(map((response) => {

      const user = response.user;
      const token = response.accessToken

      this.user.next(user);
      this.jwtToken.next(token)
      console.log(JSON.stringify(user))
      console.log(JSON.stringify(token))
      return {user, token};
      }));
    };

    signOut() {
      this.user.next(null);
    }
          
}
   