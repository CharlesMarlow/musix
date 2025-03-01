import { LucideIcon } from 'lucide-react';
import { Home, Bell, Users, MessagesSquare } from 'lucide-react';

export type NavLink = {
  name: string;
  href?: string;
  icon?: LucideIcon;
};

export const navLinks: NavLink[] = [
  { name: 'home', href: '/', icon: Home },
  { name: 'friends', href: '/friends', icon: Users },
  { name: 'notifications', href: '/notifications', icon: Bell },
  { name: 'messages', href: '/messages', icon: MessagesSquare },
];
