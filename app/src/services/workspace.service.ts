import { InjectAxios } from '@/core/axios';
import type { Workspace } from '@/types/workspace';
import type { Axios } from 'axios';
import { injectable } from 'tsyringe';

@injectable()
export class WorkspaceService {
  constructor(@InjectAxios() private axios: Axios) {}

  createWorkspace(name: string) {
    return this.axios.post<Workspace>('/workspaces', { name }).then((res) => res.data);
  }
}
