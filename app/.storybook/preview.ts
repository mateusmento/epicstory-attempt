import 'reflect-metadata';

import '@/styles/main.css';
import '@epicstory/ui/style.css';
import './fonts.css';

import { setup, type Preview } from '@storybook/vue3';
import { createDependencies } from '../src/app/dependencies';
import { createDependenciesPlugin } from '../src/core/dependency-injection';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

setup(async (app) => {
  const dependencies = await createDependencies();
  app.use(createDependenciesPlugin(dependencies));
});

export default preview;
