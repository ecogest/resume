import { SubSection } from 'src/app/components/subsection/subsection.type';

export const experience: SubSection[] = [
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
