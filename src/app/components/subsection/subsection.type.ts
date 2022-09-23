export interface Section {
  title: string;
  subsections: SubSection[];
}

export interface SubSection {
  title?: string;
  subtitle?: string;
  items?: (string | string[])[];
  location?: string;
  date?: { start: string; end?: string };
}
