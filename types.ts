
export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  images: string[];  // Array of image paths
  tags: string[];
  status: 'COMPLETED' | 'IN_PROGRESS' | 'ARCHIVED';
}

export interface TerminalMessage {
  type: 'user' | 'system' | 'ai';
  content: string;
  timestamp: string;
}
