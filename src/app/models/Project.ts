export interface Project {
  id: number;
  status?: 'development' | 'live' | 'archived';
  title: string;
  subtitle: string;
  photo: string;
  code: string | { front: string; back: string };
  link: string;
  skills: string | string[];
  description: string;
  things: string[];
  learnings: string[];
  features: string[];
}
