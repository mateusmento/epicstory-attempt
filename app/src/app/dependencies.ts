import { createAxios } from '@/core/axios';
import { IssueService } from '@/services/issue.service';
import { ProjectService } from '@/services/project.service';
import { WorkspaceService } from '@/services/workspace.service';
import { Axios } from 'axios';
import { container as tsyringe } from 'tsyringe';

export default async function createDependencies() {
  const { default: config } = await import('./config');
  const axios = createAxios({ baseURL: config.API_URL });
  const container = tsyringe.createChildContainer();
  container.registerInstance(Axios, axios);
  container.registerSingleton(WorkspaceService);
  container.registerSingleton(ProjectService);
  container.registerSingleton(IssueService);
  return container;
}
