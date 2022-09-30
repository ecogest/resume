import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Section } from './components/subsection/subsection.type';
import { sections } from './data/sections/experience';
import { LangService } from './services/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  sections: Observable<Section[]>;

  constructor(private langService: LangService) {
    this.sections = langService.translate(sections);
  }

  ngOnInit(): void {
    this.sections = this.langService.translate(sections);
  }
}
