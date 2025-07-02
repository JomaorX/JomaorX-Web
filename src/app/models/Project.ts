export interface Project {
  id: number;
  title: string;
  subtitle: string;
  photo: string;
  code: string | { front: string, back: string };
  link?: string;
  skills: string | string[];
  description?: string;
}
