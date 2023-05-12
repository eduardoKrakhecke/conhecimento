export class User {
  id: number;
  name: string;
  email: string;
  admin: boolean;
  iat: Date
  exp: Date
  token: string
  password: string
  confirmPassword: string
}
