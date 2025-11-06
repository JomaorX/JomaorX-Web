export interface Project {
  id: number;
  status?: 'development' | 'live' | 'archived';
  title: string;
  subtitle: string;
  photos: string | string[];
  code: string | { front: string; back: string };
  link: string;
  skills: string | string[];
  mainSkills: string[];
  description: string;
  things: string[];
  learnings: string[];
  features: string[];
}
