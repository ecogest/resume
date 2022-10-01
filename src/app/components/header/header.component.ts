import { Component, OnInit } from '@angular/core';
import { icons } from 'src/assets/assets';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  email = 'matthieu.jacq@live.fr';
  phone = '06 15 85 41 10';
  github = {
    name: 'ecogest',
    address: 'https://github.com/ecogest',
    icon: icons.social.github,
  };
  linkedin = {
    name: 'matthieu-jacq',
    address: 'https://www.linkedin.com/in/matthieu-jacq',
    icon: icons.social.linkedin,
  };

  constructor() {}

  ngOnInit(): void {}
}
