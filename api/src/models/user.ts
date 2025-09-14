export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
}

export interface TokenPayload {
  id: number;
  email: string;
}
