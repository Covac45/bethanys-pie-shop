import { Injectable } from '@angular/core';
import { IUser, IUserCredentials } from './user.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: BehaviorSubject<IUser | null>;
  private credentials!: IUserCredentials;

  private apiURL = 'http://localhost:5043/api/authentication/';  
  private jwtToken!: string

  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject<IUser | null>(null);
  }

  getUser(): Observable<IUser | null> {
    return this.user;
  }

  signIn(credentials: IUserCredentials): Observable<any> {  
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.apiURL +'authenticate', credentials, { headers })
    .pipe(map((user: IUser) => {
        this.user.next(user);
        return user;
      }));
    };

    signOut() {
      this.user.next(null);
    }
          
}
   