import { InjectAxios } from '@/core/axios';
import type { Axios } from 'axios';
import { injectable } from 'tsyringe';

@injectable()
export class IssueService {
  constructor(@InjectAxios() private axios: Axios) {}

  createIssue(projectId: number, title: string) {
    return this.axios.post(`/projects/${projectId}/issues`, { title }).then((res) => res.data);
  }
}
