import { InjectAxios } from '@/core/axios';
import type { Axios } from 'axios';
import { injectable } from 'tsyringe';
import type { SignupRequest, SignupResponse } from './dtos/signup.dto';

@injectable()
export class AuthApi {
  constructor(@InjectAxios() private axios: Axios) {}

  signup(data: SignupRequest) {
    return this.axios.post<SignupResponse>('/auth/users', data).then((res) => res.data);
  }
}
