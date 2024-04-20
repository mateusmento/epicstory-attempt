import { InjectAxios } from '@/core/axios';
import type { Axios } from 'axios';
import { injectable } from 'tsyringe';

const baseURL = 'http://localhost:3000';

@injectable()
export class FooService {
  constructor(@InjectAxios({ baseURL }) private axios: Axios) {}

  getFoos() {
    return this.axios.get('/foos').then((res) => res.data);
  }

  createFoo() {
    return this.axios.post('/foos').then((res) => res.data);
  }

  incrementFoo(id: number) {
    return this.axios.post(`/foos/${id}/increment`).then((res) => res.data);
  }
}
