import { Component, Input, OnInit } from '@angular/core';
import { SubSection } from './subsection.type';

@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
  styleUrls: ['./subsection.component.scss'],
})
export class SubsectionComponent implements OnInit {
  @Input() data?: SubSection;
  constructor() {}

  ngOnInit(): void {}
}
