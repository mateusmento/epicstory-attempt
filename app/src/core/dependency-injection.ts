import { container, type DependencyContainer, type InjectionToken } from 'tsyringe';
import { inject, provide } from 'vue';

function createDependencyContainer() {
  return container.createChildContainer();
}

export function provideDependencies() {
  const container = createDependencyContainer();
  provide('dependencies', container);
}

export function useDependency<T>(token: InjectionToken<T>) {
  const container = inject<DependencyContainer>('dependencies');
  if (!container) throw new Error('Dependency container not provided');
  return container.resolve(token);
}
