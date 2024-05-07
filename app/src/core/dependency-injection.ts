import { type DependencyContainer, type InjectionToken } from 'tsyringe';
import { inject, type App, type Plugin } from 'vue';

export function createDependenciesPlugin(container: DependencyContainer) {
  return {
    install(app: App) {
      app.provide('dependencies', container);
    },
  } as Plugin;
}

export function useDependency<T>(token: InjectionToken<T>) {
  const container = inject<DependencyContainer>('dependencies');
  if (!container) throw new Error('Dependency container not provided');
  return container.resolve(token);
}
