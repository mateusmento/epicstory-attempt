import { createAxios } from '@/core/axios';
import { FooService } from '@/services/foo.service';
import { ProjectService } from '@/services/project.service';
import { WorkspaceService } from '@/services/workspace.service';
import { Axios } from 'axios';
import { container as tsyringe } from 'tsyringe';

export default async function createDependencies() {
  const config = await import('./config');
  const axios = createAxios({ baseURL: config.API_URL });
  const container = tsyringe.createChildContainer();
  container.registerInstance(Axios, axios);
  container.registerSingleton(FooService);
  container.registerSingleton(WorkspaceService);
  container.registerSingleton(ProjectService);
  return container;
}
