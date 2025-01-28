import { LucideIcon } from 'lucide-react';
import { Home, Bell, Users, MessagesSquare } from 'lucide-react';

export type NavLink = {
  name: string;
  href?: string;
  icon?: LucideIcon;
};

export const navLinks: NavLink[] = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Friends', href: '/friends', icon: Users },
  { name: 'Notifications', href: '/notifications', icon: Bell },
  { name: 'Messages', href: '/messages', icon: MessagesSquare },
];
