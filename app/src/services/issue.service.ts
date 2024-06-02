import { InjectAxios } from '@/core/axios';
import type { Issue } from '@/types/issue';
import type { Axios } from 'axios';
import { injectable } from 'tsyringe';

@injectable()
export class IssueService {
  constructor(@InjectAxios() private axios: Axios) {}

  createIssue(projectId: number, title: string) {
    return this.axios
      .post<Issue>(`/projects/${projectId}/issues`, { title })
      .then((res) => res.data);
  }
}
