export interface Profile {
  firstName:  string;
  lastName:   string;
  email:      string;
  phone:      string;
  address:    string;
  socials:    Socials;
  about:      string;
  projects:   Project[];
  experience: Experience[];
  skills:     Skills;
  fskill:     string;
  bskill:     string;
}

export interface Experience {
  title:       string;
  company:     string;
  description: string[];
  skillset:    string;
  startDate:   string;
  endDate:     string;
}

export interface Project {
  title: string;
  website: string;
  screenshot: string;
  info: string;
  techStack:string;
}

export interface Skills {
  frontend: End[];
  backend:  End[];
}

export interface End {
  name: string;
  logo: string;
}

export interface Socials {
  github:   string;
  twitter:  string;
  linkedin: string;
}
