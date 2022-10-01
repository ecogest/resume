import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Section } from './components/subsection/subsection.type';
import { sections } from './data/sections/experience';
import { LangService } from './services/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sections: Observable<Section[]>;

  constructor(langService: LangService) {
    this.sections = langService.translate(sections);
  }
}
