interface IProject {
  title: string;
  status: 'CURRENT' | 'MAINTENANCE';
  description: string;
  tags: string[];
  imageSrc: string;
}
