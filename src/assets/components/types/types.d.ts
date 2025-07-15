export interface Education {
  title: string;
  institution: string;
  period: string;
  status: string;
  level?: 'bachelor' | 'master' | 'phd' | 'certificate' | 'diploma';
  gpa?: string;
  achievements?: string[];
}