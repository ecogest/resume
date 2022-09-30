import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LangService, supportedLangs } from 'src/app/services/lang.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  jobTitle = { en: 'Developer Applicant', fr: 'Développeur' };
  location = 'Paris, France';
  stack = [
    {
      name: 'angular',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    },
    {
      name: 'nestjs',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
    },
    {
      name: 'prisma',
      icon: 'https://www.prisma.io/images/favicon-32x32.png',
    },
  ];

  languages = [
    {
      name: 'typescript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      name: 'python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
      name: 'shell',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
    },
    {
      name: 'C++',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    },
    {
      name: 'C',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    },
  ];

  experience = [
    {
      name: 'Business game designer',
      icon: 'https://www.hec.edu/themes/custom/hec_theme/logo.svg',
    },
    {
      name: 'Data Engineer',
      icon: 'https://www.laredoute.fr/images/favicon.png',
    },
    {
      name: 'Teacher',
      name_fr: 'Enseignant',
      icon: 'https://management.pantheonsorbonne.fr/favicon/favicon-32x32.png',
    },
  ];

  studies = [
    {
      name: '42',
      icon: 'https://42.fr/wp-content/uploads/2021/07/cropped-42-favicon-acs-32x32.png',
    },
    {
      name: 'ENS Paris-Saclay',
      icon: 'https://ens-paris-saclay.fr/themes/ens/favicon.ico',
    },
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
