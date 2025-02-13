'use client';

import { Menu } from 'lucide-react';
import { useTranslations } from 'next-intl';
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
    <div className='md:hidden bg-white'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            <Menu size={24} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className='w-56 rounded-lg border border-zinc-200 shadow-lg'
        >
          {translatedNavLinks.map((link) => (
            <DropdownMenuItem
              key={link.name}
              className='hover:bg-zinc-100 transition-colors'
            >
              <a href={link.href} className='w-full block'>
                {link.name}
              </a>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem className='hover:bg-zinc-100'>
            <ThemeSwitch />
          </DropdownMenuItem>
          <DropdownMenuItem className='hover:bg-zinc-100'>
            <SettingsMenu />
          </DropdownMenuItem>
          <DropdownMenuItem>
            {isLoggedIn && <LogoutLink className='w-full text-left'>
              {tCommon('logout')}
            </LogoutLink>}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNav;
