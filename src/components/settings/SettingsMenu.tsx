import { useTheme } from '@/app/context/ThemeContext'; 
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { SETTINGS_MENU_ITEMS } from '../../app/constants/settings';
import { useRouter } from 'next/navigation';
import { Settings, Sun, Moon } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const SettingsMenu = () => {
  const { isDarkMode, toggleTheme } = useTheme();
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
            ) : id === 'theme' ? (
              <span className='flex items-center gap-2'>
                {label}
                <div className='ml-auto flex items-center gap-2'>
                  <Switch
                    checked={isDarkMode}
                    onCheckedChange={toggleTheme}
                    className='relative flex items-center gap-2'
                  >
                    <span className='absolute left-0 text-gray-500'>
                      <Moon className='h-4 w-4' />
                    </span>
                    <span className='absolute right-0 text-yellow-400'>
                      <Sun className='h-4 w-4' />
                    </span>
                  </Switch>
                  <label
                    htmlFor='theme-toggle'
                    className='flex items-center cursor-pointer'
                  >
                    <input
                      id='theme-toggle'
                      type='checkbox'
                      checked={isDarkMode}
                      onChange={toggleTheme} 
                      className='hidden' 
                    />
                    <div
                      className={`relative w-12 h-6 rounded-full transition-all ease-in-out duration-300 ${
                        isDarkMode ? 'bg-dark' : 'bg-light'
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
                          isDarkMode ? 'transform translate-x-full' : ''
                        }`}
                      />
                    </div>
                  </label>
                </div>
              </span>
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
