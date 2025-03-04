import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ToastComponent } from "./toast/toast.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    CommonModule,
    SiteHeaderComponent,
    ToastComponent
],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bethanys-pie-shop';
}
