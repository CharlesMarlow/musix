'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { navLinks } from './navLinks';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import ThemeSwitch from '../theme/ThemeSwitcher';
import SettingsMenu from '../settings/SettingsMenu';

const MobileNav = () => {
  return (
    <div className='md:hidden'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost'>
            <Menu size={24} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className='w-56 rounded-lg border border-zinc-200 dark:border-zinc-700 
                     bg-white text-black dark:bg-zinc-900 dark:text-white shadow-lg'
        >
          {navLinks.map((link) => (
            <DropdownMenuItem
              key={link.name}
              className='hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors'
            >
              <a href={link.href} className='w-full block'>
                {link.name}
              </a>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem className='hover:bg-zinc-100 dark:hover:bg-zinc-700'>
            <ThemeSwitch />
          </DropdownMenuItem>
          <DropdownMenuItem className='hover:bg-zinc-100 dark:hover:bg-zinc-700'>
            <SettingsMenu />
          </DropdownMenuItem>
          <DropdownMenuItem className='hover:bg-red-100 dark:hover:bg-red-700 text-red-600 dark:text-red-400'>
            <LogoutLink className='w-full text-left'>Logout</LogoutLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNav;
