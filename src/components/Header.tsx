import Image from 'next/image';
import { LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className='bg-white shadow-md fixed w-full z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-14'>
          {' '}
          <div className='flex items-center'>
            <Image
              src='/icons/logo.jpg'
              alt='Logo'
              width={70}
              height={70}
              priority
              className='m-0 p-0 object-contain items-center'
            />
            <span className='text-2xl font-semibold text-gray-800 items-center'>
              Musix
            </span>{' '}
          </div>
          {/* Desktop Links */}
          <nav className='hidden md:flex space-x-6 items-center'>
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='text-gray-600 hover:text-gray-800'
              >
                {link.name}
              </a>
            ))}
            <Button
              variant='ghost'
              className='text-gray-600 hover:text-gray-800'
            >
              Logout
            </Button>
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
                {links.map((link) => (
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

export default Header;
