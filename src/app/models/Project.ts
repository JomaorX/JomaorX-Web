export interface Project {
  id: number;
  title: string;
  subtitle: string;
  photo: string;
  code: string | string[];
  link?: string;
  skills: string | string[];
  description?: string;
}
