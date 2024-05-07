import { InjectAxios } from '@/core/axios';
import type { Axios } from 'axios';
import { injectable } from 'tsyringe';

@injectable()
export class FooService {
  constructor(@InjectAxios() private axios: Axios) {}

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
