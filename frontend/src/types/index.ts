import React from "react";

// User Types
export interface User {
  id: number;
  name: string;
  email: string;
}

// Article Types
export interface Article {
  id: number;
  title: string;
  summary?: string;
  description?: string;
  source?: string;
  imageUrl?: string;
  img?: string;
  categoryimg?: string;
  totaltime?: string;
  category?: string;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  level?: string;
  progress?: number;
  content?: string;
}

// Auth Types
export interface AuthState {
  token: string | null;
  user: User | null;
}

export interface SetCredentialsPayload {
  token?: string;
  user?: User;
}

// Component Props Types
export interface ArticleCardProps {
  Source?: string;
  img?: string;
  categoryimg?: string;
  totaltime?: string;
  title: string;
  description?: string;
  category?: string;
  level?: string;
  progress?: number;
  buttonText?: string;
}

export interface AuthButtonProps {
  children: React.ReactNode;
  onClick?: (_e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "outline";
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export interface AuthInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (_e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

export interface AuthPasswordProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (_e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

export interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export interface LanguageToggleProps {
  variant?: "default" | "auth";
}

export interface NavbarProps {
  onMenuClick: () => void;
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Redux Store Types
export interface RootState {
  auth: AuthState;
}

// i18n Types
export type Language = "en" | "ar";

export type DifficultyLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "All Levels";

export type Category =
  | "Economy"
  | "Politics"
  | "World News"
  | "Culture and Lifestyle"
  | "Security & Defense"
  | "Education"
  | "Culture"
  | "Travel"
  | "Media"
  | "General";
