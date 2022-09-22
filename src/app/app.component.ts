import { Component } from '@angular/core';
import { experience } from './data/sections/experience';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'resume';
  experience = experience;
}
