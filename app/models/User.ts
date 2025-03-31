// Preferências do usuário
export interface UserPreferences {
  theme: 'light' | 'dark';
  emailNotifications: boolean;
  language: string;
  showProgress: boolean;
  showAchievements: boolean;
  accessibility: {
    fontSize: 'small' | 'medium' | 'large';
    highContrast: boolean;
    reduceAnimations: boolean;
  };
}

// Nível de experiência do usuário
export enum ExperienceLevel {
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
}

// Áreas de interesse
export interface InterestArea {
  id: string;
  name: string;
  level: ExperienceLevel;
}

// Interface principal do usuário
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  bio?: string;
  createdAt: Date;
  lastLogin: Date;
  isActive: boolean;

  // Preferências e configurações
  preferences: UserPreferences;

  // Perfil educacional
  education: {
    level: string;
    institution?: string;
    field?: string;
    graduationYear?: number;
  };

  // Áreas de interesse e experiência
  interests: InterestArea[];
  primaryLanguage: string;
  secondaryLanguages: string[];

  // Redes sociais e contato
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };

  // Configurações de privacidade
  privacy: {
    showEmail: boolean;
    showProgress: boolean;
    showSocial: boolean;
    publicProfile: boolean;
  };
}

// Interface para sessão do usuário
export interface UserSession {
  id: string;
  userId: string;
  token: string;
  device: string;
  ip: string;
  createdAt: Date;
  expiresAt: Date;
  lastActivity: Date;
}

// Interface para notificações do usuário
export interface UserNotification {
  id: string;
  userId: string;
  type: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
  action?: {
    type: string;
    url: string;
  };
}
