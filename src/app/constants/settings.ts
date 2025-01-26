import { LucideIcon, User, Cog, LogOut, Languages } from 'lucide-react';

export type SettingsMenuItem = {
  id: string;
  label: string;
  icon?: LucideIcon;
  href?: string;
};

export const SETTINGS_MENU_ITEMS: SettingsMenuItem[] = [
  { id: 'profile', label: 'Profile', icon: User, href: '/profile' },
  { id: 'account', label: 'Account', icon: Cog, href: '/account' },
  { id: 'theme', label: 'Theme', icon: Languages },
  { id: 'logout', label: 'Log out', icon: LogOut },
];
