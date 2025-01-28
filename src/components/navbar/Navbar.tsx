'use client';

import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import SettingsMenu from '../settings/SettingsMenu';
import ThemeSwitch from '../theme/ThemeSwitcher';
import { navLinks } from './navLinks';
import React from 'react';

const Navbar = () => {
  return (
    <header className='bg-headerBg border-b-1 shadow-md fixed w-full z-50'>
      <div className='max-w-7xl mx-auto sm:px-6 lg:px-2'>
        <div className='flex justify-between items-center h-14'>
          {' '}
          <div className='flex items-center'>
            <Image
              src='/icons/logo.jpg'
              alt='Logo'
              width={70}
              height={70}
              priority
              className='object-contain items-center'
            />
            <span className='text-2xl font-semibold ml-4 items-center'>
              Musix
            </span>{' '}
          </div>
          {/* Desktop Links */}
          <nav className='hidden md:flex space-x-10 items-center mx-auto'>
            {navLinks.map((link) => (
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
          {/* Mobile Hamburger Menu */}
          <div className='md:hidden'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost'>
                  <Menu size={24} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56'>
                {navLinks.map((link) => (
                  <DropdownMenuItem key={link.name}>
                    <a href={link.href} className='w-full'>
                      {link.name}
                    </a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem>
                  <Button variant='ghost' className='w-full text-left'>
                    Logout
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
