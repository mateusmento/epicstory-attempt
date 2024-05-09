import { InjectAxios } from '@/core/axios';
import type { Axios } from 'axios';
import { injectable } from 'tsyringe';

@injectable()
export class WorkspaceService {
  constructor(@InjectAxios() private axios: Axios) {}

  createWorkspace(name: string) {
    return this.axios.post('/workspaces', { name });
  }
}
