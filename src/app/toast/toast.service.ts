import { Injectable, signal } from '@angular/core';
import { Itoast } from './Itoast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

    private toastInit: Itoast = {title: '', message: '', isVisible: false};
    public toast = signal<Itoast>(this.toastInit);

  constructor() { }
}
