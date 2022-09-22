import { Component, Input, OnInit } from '@angular/core';
import { SubSection } from '../subsection/subsection.type';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  @Input() title?: string;
  subsections: SubSection[] = [
    {
      title: 'La Redoute',
      subtitle: 'Data Engineer',
      items: ['Implement data pipelines with airflow, gcs and gbq'],
      location: 'Paris',
      date: { start: 'jan', end: 'feb 2022' },
    },
    {
      title: 'HEC',
      subtitle: 'Scoring model designer, Coordinator',
      items: ['Implement the scoring model of an ESG business game'],
      location: 'Paris',
      date: { start: 'april, september 2022' },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
