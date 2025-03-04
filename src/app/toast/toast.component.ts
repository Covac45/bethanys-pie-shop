import { Component} from '@angular/core';
import { Itoast } from './Itoast';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from './toast.service';

declare var bootstrap: any;

@Component({
  selector: 'BPS-toast',
  imports: [CommonModule, FormsModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})

export class ToastComponent {

constructor(private toastSvc: ToastService){
}

  ngOnInit(){
  }

  getToast(){
    return this.toastSvc.toast();
  }

  setToastToInvisible(){
    var setToast = this.toastSvc.toast();
    setToast.isVisible = false;
    this.toastSvc.toast.set(setToast);
  }
}