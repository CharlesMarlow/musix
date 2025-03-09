'use client';

import React from 'react';
import Image from 'next/image';
import SettingsMenu from '../settings/SettingsMenu';
import ThemeSwitch from '../theme/ThemeSwitcher';
import { navLinks as navLinksStructure } from './navLinks';
import MobileNav from './MobileNav';
import { useTranslations } from 'next-intl';

const Navbar = () => {
  const tCommon = useTranslations('common');
  const tNavbar = useTranslations('navbar');
  const translatedNavLinks = navLinksStructure.map((link) => ({
    ...link,
    name: tNavbar(`links.${link.name}`), 
  }));

  return (
    <header className='bg-headerBg border-b-1 shadow-md fixed w-full z-50 bg-gradient-to-r from-brandGold to-brandScarlet'>
      <div className='max-w-7xl mx-auto sm:px-6 lg:px-2'>
        <div className='flex justify-between items-center h-14'>
          {' '}
          <div className='flex items-center'>
            <Image
              src='/icons/logo.png'
              alt='Logo'
              width={70}
              height={70}
              priority
              className='object-contain items-center'
            />
            <span className='text-2xl font-semibold ml-4 items-center'>
              {tCommon('appName')}
            </span>{' '}
          </div>
          <nav className='hidden md:flex space-x-10 items-center mx-auto'>
            {translatedNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='text-zinc-900 hoverEffect'
              >
                {link.icon && React.createElement(link.icon, { size: 24 })}
              </a>
            ))}
          </nav>
          <nav className='hidden md:flex items-center ml-8 space-x-4'>
            <ThemeSwitch />
            <SettingsMenu />
          </nav>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
