'use client';

import { Menu } from 'lucide-react';
import { useTranslations } from 'next-intl';
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
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

const MobileNav = () => {
  const { isAuthenticated } = useKindeBrowserClient();
  const isLoggedIn = isAuthenticated;
  const tCommon = useTranslations('common');
  const tNavbar = useTranslations('navbar');
  const translatedNavLinks = navLinks.map((link) => ({
    ...link,
    name: tNavbar(`links.${link.name}`),
  }));

  return (
    <div className='md:hidden'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className='bg-transparent cursor-pointer'>
            <Menu size={24} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56 rounded-lg border border-zinc-200 shadow-lg'>
          {translatedNavLinks.map((link) => (
            <DropdownMenuItem key={link.name}>
              <a href={link.href} className='w-full block'>
                {link.name}
              </a>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem asChild>
            <ThemeSwitch />
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <SettingsMenu />
          </DropdownMenuItem>
          <DropdownMenuItem>
            {isLoggedIn && (
              <LogoutLink className='w-full text-left'>
                {tCommon('logout')}
              </LogoutLink>
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNav;
