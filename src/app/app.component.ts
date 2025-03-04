import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ControlsComponent } from "./controls/controls.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    CommonModule,
    SiteHeaderComponent,
    ControlsComponent
],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bethanys-pie-shop';
}
