import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { Itoast } from './Itoast';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'BPS-toast',
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  
@Output() closeHit: EventEmitter<boolean> = new EventEmitter


constructor(private userSvc: UserService){
}

  ngOnInit(){
    this.showToast()
  }


  getToast(){
    return this.userSvc.toast()
  }

  showToast(){
    var toastList = [].slice.call(document.querySelectorAll('toast'))
    toastList.map(function (toast) {
      return new bootstrap.Toast(toast, {})
    })
  }

  Toast(){
    const toastLiveExample = document.getElementById('liveToast');
    if (toastLiveExample) {
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample, {
        autohide: true,
        delay: 3000
      });
      toastBootstrap.show();
    }
  }
}

