'use client';

import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import CreatePostCard from '@/components/post/CreatePostCard';
import { sendUserToBackend } from './api/services/user';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { useRouter } from 'next/navigation';
import { User } from '@/lib/types';

export default function Home() {
  const router = useRouter();
  const { isAuthenticated, getUser } = getKindeServerSession();

  // Mutation for sending user data to backend
  const mutation = useMutation({
    mutationFn: sendUserToBackend,
  });

  useEffect(() => {
    const fetchUser = async () => {
      const isLoggedIn = await isAuthenticated();
      if (!isLoggedIn) {
        router.push('/api/auth/login');
        return;
      }

      const user = await getUser();
      console.log('User:', user);

      if (user) {
        const transformedUser: User = {
          id: user.id,
          email: user.email ?? '',
          given_name: user.given_name ?? '',
          picture: user.picture ?? '',
          posts: [],
          friends: [],
        };

        mutation.mutate(transformedUser);
      }
    };

    fetchUser();
  }, [isAuthenticated, getUser, mutation, router]);

  return (
    <div className='items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] '>
      <CreatePostCard />
    </div>
  );
}
