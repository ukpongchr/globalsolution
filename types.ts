export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  description: string;
  imageUrl: string;
  category: 'Power' | 'Maintenance' | 'Electrical';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}

export interface NavLink {
  path: string;
  label: string;
}