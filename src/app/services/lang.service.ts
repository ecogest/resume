import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export type supportedLangs = 'fr' | 'en';
export type translatable<T> = { fr: T; en: T };

@Injectable({
  providedIn: 'root',
})
export class LangService {
  private readonly _default_lang = 'en';
  private _currentLang = new BehaviorSubject<supportedLangs>(
    this._default_lang
  );

  constructor(activatedRoute: ActivatedRoute) {
    activatedRoute.queryParamMap.subscribe((params) => {
      let lang = params.get('lang');
      if (lang) {
        if (lang == 'en' || lang == 'fr') this._currentLang.next(lang);
      } else this._currentLang.next(this._default_lang);
    });
  }

  get currentLang() {
    return this._currentLang;
  }

  switchLang(lang: supportedLangs) {
    this._currentLang.next(lang);
  }

  translate<T>(item: translatable<T>) {
    return item[this._currentLang.value];
  }
}
