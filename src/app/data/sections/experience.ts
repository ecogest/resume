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

const stack_fr: SubSection[] = [
  {
    subtitle: 'Développement web (fullstack)',
    items: [
      'Frontend: angular (typescript), HTML, CSS/SCSS',
      'Backend: nestjs (typescript), prisma (ORM)',
    ],
  },
  {
    subtitle: 'Langages',
    items: ['typescript', 'python', 'shell', 'C++', 'C'],
  },
  {
    subtitle: 'Autres compétences',
    items: [
      'Git et CI: git, github, github action, gitlab',
      'Cloud: GCP',
      'Conteneurisation et orchestration: Docker, Docker-Compose, Kubernetes',
      'Bases et flux de données: SQL (MySQL, PostgreSQL), Google Big Query, Airflow',
      'Virtualbox',
    ],
  },
];

const experience: SubSection[] = [
  {
    title: 'HEC Paris',
    subtitle: 'Scoring model designer, Coordinator',
    items: ['Implement the scoring model of an ESG business game'],
    location: 'Jouy-en-Josas',
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

const experience_fr: SubSection[] = [
  {
    title: 'HEC Paris',
    subtitle: 'Intervenant, concepteur de modèle',
    items: ["Création du modèle de scoring d'un jeu d'entreprise"],
    location: 'Jouy-en-Josas',
    date: { start: 'avr, sept 2022' },
  },
  {
    title: 'La Redoute',
    subtitle: 'Data Engineer',
    items: ['Mise en place de datapipelines avec airflow, gcs, gbq'],
    location: 'Paris',
    date: { start: 'jan', end: 'fév 2022' },
  },
  {
    title: 'École de Management de la Sorbonne',
    subtitle: 'Enseignant',
    items: ['Voir la section "Enseignement" ci-dessous'],
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

const studies_fr: SubSection[] = [
  {
    title: 'École 42',
    subtitle: '42 Cursus',
    items: [
      'Cursus obligatoire terminé en septembre 2022',
      'Cursus commencé en octobre 2019',
      'Admis sur concours en 2018 (picscine de juillet)',
    ],
    location: 'Paris',
    date: { start: '2019', end: '2022' },
  },
  {
    title: 'ENS Paris-Saclay',
    subtitle: 'Élève normalien du département d’économie-gestion',
    items: [
      'Master de Droit, Économie, Gestion, mention Management Stratégique, Parcours Formation à l’enseignement supérieur en gestion',
      'Agrégation d’économie-gestion (reçu 16e)',
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

const teaching_fr: SubSection[] = [
  {
    title: 'ENC Bessières',
    subtitle: 'Colleur en économie',
    items: ['Colles d’économie en deuxième année de classe préparatoire D2'],
    location: 'Paris',
    date: { start: '2019', end: '2020' },
  },
  {
    title: 'École de Management de la Sorbonne (Université Paris-1)',
    subtitle: 'Professeur agrégé (PRAG)',
    items: [
      'Travaux dirigés',
      [
        'Mathématiques, Probabilités, Statistiques, Microeconomie en L1',
        'Instruments monétaires et Comptabilité analytique en L2',
        "Finance d'entreprise et Techniques quantitatives de gestion en L3",
      ],
      'Cours magistral',
      ['Probabilités et Statistiques en L1 (en remplacements)'],
    ],
    location: 'Paris',
    date: { start: '2018', end: '2019' },
  },
  {
    title: 'Lycée Emily Bronte',
    subtitle: 'Professeur agrégé (professeur stagiaire)',
    items: [
      'Économie et droit (1ère STMG)',
      "Principes fondamentaux d'économie et de gestion (2nde)",
    ],
    location: 'Lognes',
    date: { start: '2017', end: '2018' },
  },
];

// const exams: SubSection[] = [
//   {
//     title: 'Agrégation in economics and management',
//     subtitle: 'Options: economics, accounting, finance',
//     items: ['Passed, rank 16th'],
//     location: '',
//     date: { start: '2016', end: '' },
//   },
//   {
//     title: 'ENS Cachan competitive entrance exam (now ENS Paris-Saclay)',
//     subtitle: 'Economics and management, option accounting',
//     items: ['Passed, rank 15e'],
//     location: '',
//     date: { start: '2013', end: '' },
//   },
// ];

// const internship: SubSection[] = [
//   {
//     title: '',
//     subtitle: '',
//     items: [''],
//     location: '',
//     date: { start: '', end: '' },
//   },
// ];

export const sections: { en: Section[]; fr: Section[] } = {
  en: [
    { title: 'Programming stack and skills', subsections: stack },
    { title: 'Experience', subsections: experience },
    { title: 'Studies', subsections: studies },
    { title: 'Teaching', subsections: teaching },
    // { title: 'Exams', subsections: exams },
    // { title: 'Internship', subsections: internship },
  ],
  fr: [
    { title: 'Stack et compétences en programmation', subsections: stack_fr },
    { title: 'Expérience', subsections: experience_fr },
    { title: 'Études', subsections: studies_fr },
    { title: 'Enseignement', subsections: teaching_fr },
  ],
};
