import type { Meta, StoryObj } from '@storybook/vue3';
import Dashboard from './Dashboard.vue';

const meta = {
  title: 'Demos/Dashboard',
  component: Dashboard,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Dashboard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentWorkspace: {
      id: 1,
      name: 'Epicstory',
    },
  },
};
