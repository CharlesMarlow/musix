import Database from 'better-sqlite3';

const db = new Database('./database.sqlite');

// Create users table if not exists
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    given_name TEXT,
    picture TEXT,
    posts TEXT DEFAULT '[]',
    friends TEXT DEFAULT '[]'
  )
`);

export default db;
