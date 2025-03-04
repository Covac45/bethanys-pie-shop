import { Component } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'BPS-toast',
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {

      // Show toast to alert user that they have signed out.
     
     
    signOutToast(){
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

