import { Component } from '@angular/core';
import { sections } from './data/sections/experience';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sections = sections;
}
