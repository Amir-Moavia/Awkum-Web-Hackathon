export type Faculty = {
  id: string;
  name: string;
  title: string;
  department: string;
  image: string;
  email: string;
  isVc?: boolean;
  profile: {
    bio: string;
    researchInterests: string[];
    publications: { title: string; link: string }[];
  };
};

export type News = {
  id: string;
  title: string;
  date: string;
  category: 'News' | 'Announcement' | 'Event';
  snippet: string;
  image: string;
  action?: {
    href: string;
    text: string;
  };
};

export type Course = {
    code: string;
    title: string;
    credits: number;
    grade: string;
    progress: number;
};

export type AdmissionRequirement = {
    id: string;
    title:string;
    requirements: {
        item: string;
        details: string;
    }[];
}

export type CouncilMember = {
  name: string;
  title: string;
  imageSeed: string;
};
