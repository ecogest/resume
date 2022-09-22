import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  email = 'matthieu.jacq@live.fr';
  phone = '06 15 85 41 10';
  linkedin = {
    name: 'matthieu-jacq',
    address: 'https://www.linkedin.com/in/matthieu-jacq',
  };
  github = { name: 'ecogest', address: 'https://github.com/ecogest' };

  constructor() {}

  ngOnInit(): void {}
}
