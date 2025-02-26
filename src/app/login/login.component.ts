import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductJumbotronComponent } from "../product-page/product-jumbotron/product-jumbotron.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user-service/user.service';
import { IUserCredentials } from '../user-service/user.model';

@Component({
  selector: 'BPS-login',
  imports: [RouterModule, FormsModule, CommonModule, ProductJumbotronComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public jumbotronLogin = '/assets/images/carousel3.jpg'
  public credentials: IUserCredentials = { username: '', password: '' };
  
  public signInError: boolean = false

  constructor(private userSvc: UserService, private router: Router){
    
  }

  signIn(){
    if (this.credentials){

    }
    console.log(JSON.stringify(this.credentials))

    this.signInError = false;
    this.userSvc.signIn(this.credentials)
    .subscribe({
      next: (res:any) =>{
        {console.log('res',res)}
        localStorage.setItem('token', res.Token);
        this.router.navigate(['/home']);
        alert('Login successful');
      },
      error: (err) => {alert('Failed to contact the login server')}
    })

  }

}
