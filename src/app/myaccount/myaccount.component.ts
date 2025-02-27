import { Component } from '@angular/core';
import { AllpiesComponent } from "../pies/allpies/allpies.component";
import { OrderHistoryComponent } from "../order-history/order-history.component";
import { IUser } from '../user-service/user.model';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'BPS-myaccount',
  imports: [OrderHistoryComponent],
  templateUrl: './myaccount.component.html',
  styleUrl: './myaccount.component.scss'
})
export class MyaccountComponent {

  public user!: IUser;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.user$.subscribe(u => this.user = u)
  };
}
