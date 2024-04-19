import { container as tsyringe, type DependencyContainer, type InjectionToken } from 'tsyringe';
import { inject, type App, type Plugin } from 'vue';

export function createDependencyContainer(configure: (container: DependencyContainer) => unknown) {
  return {
    install(app: App) {
      const container = tsyringe.createChildContainer();
      configure(container);
      app.provide('dependencies', container);
    },
  } as Plugin;
}

export function useDependency<T>(token: InjectionToken<T>) {
  const container = inject<DependencyContainer>('dependencies');
  if (!container) throw new Error('Dependency container not provided');
  return container.resolve(token);
}
