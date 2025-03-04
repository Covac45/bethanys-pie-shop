import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../user-service/user.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { IUser } from '../user-service/user.model';

declare var bootstrap: any;

@Component({
  selector: 'BPS-site-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss'
})

export class SiteHeaderComponent {

  private userSvc: UserService
  public userSubscription: Subscription
  public user!: IUser;


  constructor(userSvc: UserService){
    this.userSvc = userSvc
    this.userSubscription = userSvc.user$.subscribe(u => this.user = u)
  }

  ngOnChanges(){
    this.user = this.userSvc.getUser();
  }

  signOut(){
    this.userSvc.signOut();
  }
}
