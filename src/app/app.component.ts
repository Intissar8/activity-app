import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterLink,
    RouterOutlet
  ],
  standalone: true //we use this when we create a project without component
})
export class AppComponent {
  email : String="med@gmail.com"; // we use this for databinding and when we cahnge this value it automaticly gets changed in the view or what it displayes
}
