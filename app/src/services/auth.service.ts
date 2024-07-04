import { InjectAxios } from '@/core/axios';
import type { Axios } from 'axios';
import { injectable } from 'tsyringe';

@injectable()
export class AuthService {
  constructor(@InjectAxios() private axios: Axios) {}

  signup(data: { name: string; email: string; password: string }) {
    return this.axios.post('/auth/signup', data);
  }

  signin(data: { email: string; password: string }) {
    return this.axios.post('/auth/signin', data);
  }
}
