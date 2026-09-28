export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  accentColor: 'secondary' | 'primary' | 'tertiary';
  features: string[];
  deliverables?: string[];
  timeline?: string;
  techStack?: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'websites' | 'landing-pages' | 'ecommerce' | 'marketing';
  categoryLabel: string;
  description: string;
  image: string;
  tags: string[];
  badgeColor: 'secondary' | 'primary' | 'tertiary';
  fullOverview?: string;
  client?: string;
  location?: string;
  metrics?: { label: string; value: string }[];
  deliverables?: string[];
}

export interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  description: string;
  deliverable: string;
  icon: string;
  accentColor: 'secondary' | 'primary' | 'tertiary';
  details: string[];
}

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  requirement: string;
  budgetRange?: string;
  projectDetails: string;
}
