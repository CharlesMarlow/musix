import db from '../db/dbClient';
import { User } from '../types/user';

export const findUserById = (id: string) => {
  return db.prepare('SELECT * FROM users WHERE id = ?').get(id);
};

// Create a new user
export const createUser = (user: User) => {
  const stmt = db.prepare(`
    INSERT INTO users (id, email, given_name, picture, posts, friends)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  stmt.run(
    user.id,
    user.email,
    user.given_name || '',
    user.picture || '',
    JSON.stringify(user.posts || []),
    JSON.stringify(user.friends || [])
  );
};
