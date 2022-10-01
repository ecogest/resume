import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LangService, supportedLangs } from 'src/app/services/lang.service';
import { icons } from 'src/assets/assets';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  jobTitle = { en: 'Developer Applicant', fr: 'Développeur' };
  location = 'Paris, France';
  stack = [
    { name: 'angular', icon: icons.stack.angular },
    { name: 'nestjs', icon: icons.stack.nestjs },
    { name: 'prisma', icon: icons.stack.prisma },
  ];

  languages = [
    { name: 'typescript', icon: icons.stack.typescript },
    { name: 'python', icon: icons.stack.python },
    { name: 'shell', icon: icons.stack.shell },
    { name: 'C++', icon: icons.stack.cpp },
    { name: 'C', icon: icons.stack.c },
  ];

  experience = [
    { name: 'Business game designer', icon: icons.org.hec },
    { name: 'Data Engineer', icon: icons.org.redoute },
    { name: 'Teacher', name_fr: 'Enseignant', icon: icons.org.sorbonne },
  ];

  studies = [
    { name: '42', icon: icons.org.school42 },
    { name: 'ENS Paris-Saclay', icon: icons.org.ens },
  ];

  private _sectionsTitles = {
    en: {
      stack: 'Web dev stack',
      languages: 'Languages',
      experience: 'Experience',
      studies: 'Studies',
    },
    fr: {
      stack: 'Web dev stack',
      languages: 'Langages',
      experience: 'Expérience',
      studies: 'Études',
    },
  };
  sectionTitles = this._sectionsTitles.en;

  lang: supportedLangs = this.langService.currentLang.value;
  private langSubscription?: Subscription;

  constructor(
    private langService: LangService,
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.langSubscription = this.langService.currentLang.subscribe((lang) => {
      this.lang = lang;
      this.sectionTitles = this._sectionsTitles[lang];
      this.cd.detectChanges(); // see https://angular.io/errors/NG0100
    });
  }
  ngOnDestroy() {
    this.langSubscription?.unsubscribe();
  }

  switchLang(checked: boolean) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { lang: checked ? 'fr' : null },
      queryParamsHandling: 'merge',
    });
  }
}
