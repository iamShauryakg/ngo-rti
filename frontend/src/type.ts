export interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    twitter: string;
    linkedin: string;
  };
}

export interface SuccessStory {
  id: number;
  title: string;
  description: string;
  outcome: string;
  tag: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface RTIDepartment {
  id: string;
  name: string;
}

export interface RTIDraft {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  department: string;
  subject: string;
  details: string;
  mode: 'online' | 'offline';
}

export interface DonationData {
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  phone: string;
  email: string;
}
