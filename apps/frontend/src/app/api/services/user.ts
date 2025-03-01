import { User } from '@/lib/types';
import axios from 'axios';

export const sendUserToBackend = async (user: User) => {
  try {
    const res = await axios.post('/api/auth', {
      ...user,
      posts: user.posts ?? [],
      friends: user.friends ?? [],
    });

    return res.data; // Expecting `{ status: 'registered' | 'logged-in', user }`
  } catch (error) {
    console.error('Failed to authenticate user:', error);
    throw new Error('Could not authenticate user');
  }
};
