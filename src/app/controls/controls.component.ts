import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToastComponent } from "../toast/toast.component";
import { Itoast } from '../toast/Itoast';

@Component({
  selector: 'BPS-controls',
  imports: [CommonModule, ToastComponent],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.scss'
})
export class ControlsComponent {

  isToast: boolean = false
  toasts:Array<Itoast> = [
    {title: 'Signed Out', message:'You have successfully signed out.', isVisible: true}
  ]

  get visibleToasts(){
    return this.toasts.filter(t => t.isVisible === true);
  }

  constructor(){}
  
  ngOnInit(){}
}
