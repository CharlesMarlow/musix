// import { useTheme } from '@/app/context/ThemeContext';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { SETTINGS_MENU_ITEMS } from '../../app/constants/settings';
import { useRouter } from 'next/navigation';
import { Settings } from 'lucide-react';

const SettingsMenu = () => {
  // const { isDarkMode, toggleTheme } = useTheme();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      console.log('Signing out...');
      router.push('/login');
    } catch (error) {
      console.error('Failed to sign out', error);
    }
  };

  const menuActions: Record<string, () => void> = {
    profile: () => router.push('/profile'),
    account: () => router.push('/account'),
    signout: handleSignOut,
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Settings className='h-6 w-6 cursor-pointer' />
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {SETTINGS_MENU_ITEMS.map(({ id, label, icon: Icon, href }) => (
          <DropdownMenuItem key={id} onClick={menuActions[id]} asChild={!!href}>
            {href ? (
              <a href={href} className='flex items-center gap-2'>
                {Icon && <Icon className='h-4 w-4' />}
                {label}
              </a>
            ) : (
              <span className='flex items-center gap-2'>
                {Icon && <Icon className='h-4 w-4' />}
                {label}
              </span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingsMenu;
