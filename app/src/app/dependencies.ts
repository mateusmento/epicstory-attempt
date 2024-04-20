import { Axios } from 'axios';
import { createAxios } from '@/core/axios';
import { createDependencyContainer } from '@/core/dependency-injection';
import { FooService } from '@/services/foo.service';

export default createDependencyContainer((container) => {
  const axios = createAxios({ baseURL: 'http://localhost:3000' });
  container.registerInstance(Axios, axios);
  container.registerSingleton(FooService);
});
