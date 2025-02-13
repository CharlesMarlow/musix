import CreatePostCard from '@/components/post/CreatePostCard';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

export default async function Home() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  console.log('User:', user);
  
  
  const isLoggedIn = await isAuthenticated();
  if (!isLoggedIn) redirect('/api/auth/login');

  return (
    <div className='items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] '>
      <CreatePostCard />
    </div>
  );
}
