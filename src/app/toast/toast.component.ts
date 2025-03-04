import { Component, EventEmitter, input, Input, Output } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'BPS-toast',
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  
@Output() closeHit: EventEmitter<boolean> = new EventEmitter
@Input() title: string = ''
@Input() message: string = ''

constructor(){}

  ngOnInit(){
    this.showToast()
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

