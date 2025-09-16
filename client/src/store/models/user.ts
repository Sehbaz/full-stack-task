export interface User {
  id?: string;
  name?: string;
  email?: string;
  token?: string;
  password?: string;
  confirmPassword?: string;
}

export interface AuthState {
  user: User | null;
}

export interface Credentials {
  email: string;
  password: string;
}
