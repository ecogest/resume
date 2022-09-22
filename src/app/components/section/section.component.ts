import { Component, Input, OnInit } from '@angular/core';
import { SubSection } from '../subsection/subsection.type';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  @Input() title?: string;
  @Input() subsections: SubSection[] = [];
  constructor() {}

  ngOnInit(): void {}
}
