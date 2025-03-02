export interface User {
  id: string;
  email: string;
  given_name?: string;
  picture?: string;
  posts: string; // JSON string
  friends: string; // JSON string
}
