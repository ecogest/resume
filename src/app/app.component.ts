import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Section } from './components/subsection/subsection.type';
import { sections } from './data/sections/experience';
import { LangService } from './services/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  sections: Section[];
  private _sectionsSubscription?: Subscription;

  constructor(private langService: LangService) {
    this.sections = langService.translate(sections);
  }

  ngOnInit(): void {
    this._sectionsSubscription = this.langService.currentLang.subscribe(() => {
      this.sections = this.langService.translate(sections);
    });
  }
  ngOnDestroy(): void {
    this._sectionsSubscription?.unsubscribe();
  }
}
