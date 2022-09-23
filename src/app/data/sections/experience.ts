import {
  Section,
  SubSection,
} from 'src/app/components/subsection/subsection.type';

const stack: SubSection[] = [
  {
    subtitle: 'Web development (fullstack)',
    items: [
      'Frontend: angular (typescript), HTML, CSS/SCSS',
      'Backend: nestjs (typescript), prisma (ORM)',
    ],
  },
  {
    subtitle: 'Languages',
    items: ['typescript', 'python', 'shell', 'C++', 'C'],
  },
  {
    subtitle: 'Other skills',
    items: [
      'Version control and CI: git, github, github action, gitlab',
      'Cloud: GCP',
      'Containers: Docker, Docker-Compose, Kubernetes',
      'Databases and data manipulation: SQL (MySQL, PostgreSQL), Google Big Query, Airflow',
      'Virtualbox',
    ],
  },
];
const experience: SubSection[] = [
  {
    title: 'HEC',
    subtitle: 'Scoring model designer, Coordinator',
    items: ['Implement the scoring model of an ESG business game'],
    location: 'Paris',
    date: { start: 'apr, sept 2022' },
  },
  {
    title: 'La Redoute',
    subtitle: 'Data Engineer',
    items: ['Implement data pipelines with airflow, gcs and gbq'],
    location: 'Paris',
    date: { start: 'jan', end: 'feb 2022' },
  },
  {
    title: 'Sorbonne Management School',
    subtitle: 'Teacher',
    items: ['See the Teaching section below'],
    location: 'Paris',
    date: { start: '2018', end: '2019' },
  },
];

const studies: SubSection[] = [
  {
    title: 'School 42',
    subtitle: '42 Cursus',
    items: [
      'Mandatory cursus ended in september 2022',
      'Cursus started in october 2019',
      'Passed the 2018 july pool exam',
    ],
    location: 'Paris',
    date: { start: '2019', end: '2022' },
  },
  {
    title: 'ENS Paris-Saclay',
    subtitle: 'Normalien, studies in economics and management',
    items: [
      'Master in Law, Economics, Management',
      'Agrégation in economics and management',
    ],
    location: 'Cachan',
    date: { start: '2013', end: '2017' },
  },
];

const teaching: SubSection[] = [
  {
    title: 'ENC Bessières',
    subtitle: '"Colleur" in economics',
    items: [
      'Train students for their competitive exams (second year "classe préparatoire" D2)',
    ],
    location: 'Paris',
    date: { start: '2019', end: '2020' },
  },
  {
    title: 'Sorbonne Management School',
    subtitle: 'Teacher (professeur agrégé, prag)',
    items: [
      'Tutorials',
      [
        'Mathematics, Probabilities, Statistics, Microeconomics in L1',
        'Monetary policy and Cost accounting in L2',
        'Corporate Finance and Quantitative Techniques of Management in L3',
      ],
      'Lecture course',
      ['Probabilities and Statistics in L1 (as a substitute)'],
    ],
    location: 'Paris',
    date: { start: '2018', end: '2019' },
  },
  {
    title: 'Emily Bronte Highschool',
    subtitle: 'Teacher (professeur agrégé, intern)',
    items: [
      'Economics and law (STMG)',
      'Introduction to Economics and Management',
    ],
    location: 'Lognes',
    date: { start: '2017', end: '2018' },
  },
];

const exams: SubSection[] = [
  {
    title: 'Agrégation in economics and management',
    subtitle: 'Options: economics, accounting, finance',
    items: ['Passed, rank 16th'],
    location: '',
    date: { start: '2016', end: '' },
  },
  {
    title: 'ENS Cachan competitive entrance exam (now ENS Paris-Saclay)',
    subtitle: 'Economics and management, option accounting',
    items: ['Passed, rank 15e'],
    location: '',
    date: { start: '2013', end: '' },
  },
];

const jury: SubSection[] = [
  {
    title: '',
    subtitle: '',
    items: [''],
    location: '',
    date: { start: '', end: '' },
  },
  {
    title: '',
    subtitle: '',
    items: [''],
    location: '',
    date: { start: '', end: '' },
  },
  {
    title: '',
    subtitle: '',
    items: [''],
    location: '',
    date: { start: '', end: '' },
  },
];

const internship: SubSection[] = [
  {
    title: '',
    subtitle: '',
    items: [''],
    location: '',
    date: { start: '', end: '' },
  },
];

export const sections: Section[] = [
  { title: 'Programming stack and skills', subsections: stack },
  { title: 'Experience', subsections: experience },
  { title: 'Studies', subsections: studies },
  { title: 'Teaching', subsections: teaching },
  // { title: 'Exams', subsections: exams },
  // { title: 'Jury member', subsections: jury },
  // { title: 'Internship', subsections: internship },
];
