import { Component, OnInit } from '@angular/core';
import { SubSection } from './subsection.type';

@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
  styleUrls: ['./subsection.component.scss'],
})
export class SubsectionComponent implements OnInit {
  data: SubSection = {
    title: 'La Redoute',
    subtitle: 'Data Engineer',
    items: ['Implement data pipelines with airflow, gcs and gbq'],
    location: 'Paris',
    date: { start: 'jan', end: 'feb 2022' },
  };

  constructor() {}

  ngOnInit(): void {}
}
