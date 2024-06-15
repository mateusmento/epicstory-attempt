import { InjectAxios } from '@/core/axios';
import type { Axios } from 'axios';
import { injectable } from 'tsyringe';
import type { SignupRequest, SignupResponse } from './dtos/signup.dto';
import type { SigninRequest, SigninResponse } from './dtos/singin.dto';

@injectable()
export class AuthApi {
  constructor(@InjectAxios() private axios: Axios) {}

  signup(data: SignupRequest) {
    return this.axios.post<SignupResponse>('/auth/users', data).then((res) => res.data);
  }

  signin(data: SigninRequest) {
    return this.axios.post<SigninResponse>('/auth/token', data).then((res) => res.data);
  }
}
