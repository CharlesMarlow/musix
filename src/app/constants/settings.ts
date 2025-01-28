import { LucideIcon, User, Cog, LogOut, Languages, Boxes } from 'lucide-react';

export type SettingsMenuItem = {
  id: string;
  label: string;
  icon?: LucideIcon;
  href?: string;
};

export const SETTINGS_MENU_ITEMS: SettingsMenuItem[] = [
  { id: 'profile', label: 'Profile', icon: User, href: '/profile' },
  { id: 'account', label: 'Account', icon: Cog, href: '/account' },
  { id: 'groups', label: 'Groups', icon: Languages },
  { id: 'collaborations', label: 'Collabs', icon: Boxes },
  { id: 'logout', label: 'Log out', icon: LogOut },
];
