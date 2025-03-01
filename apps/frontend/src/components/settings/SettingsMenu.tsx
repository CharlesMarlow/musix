import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { SETTINGS_MENU_ITEMS } from '../../app/constants/settings';
import { useRouter } from 'next/navigation';
import { Settings } from 'lucide-react';

const SettingsMenu = () => {
  const router = useRouter();
  const { isAuthenticated } = useKindeBrowserClient();
  const isLoggedIn = isAuthenticated;

  const menuActions: Record<string, () => void> = {
    profile: () => router.push('/profile'),
    account: () => router.push('/account'),
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Settings className='hoverEffect' size={40} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        className='bg-white text-black dark:bg-zinc-800 dark:text-white shadow-md rounded-lg p-2 w-56'
      >
        {SETTINGS_MENU_ITEMS.map(({ id, label, icon: Icon, href }) => (
          <DropdownMenuItem
            key={id}
            onClick={id !== 'logout' ? menuActions[id] : undefined}
            asChild={!!href}
            className='flex items-center gap-2 px-4 py-2 rounded-md text-zinc-900 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-100 dark:hover:text-white cursor-pointer'
          >
            {isLoggedIn && id === 'logout' ? (
              <LogoutLink className='flex items-center gap-2 w-full'>
                {Icon && <Icon className='h-4 w-4' />}
                {label}
              </LogoutLink>
            ) : href ? (
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
