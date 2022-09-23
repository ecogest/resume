import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  jobTitle = 'Developper Applicant';
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

  constructor() {}

  ngOnInit(): void {}
}
