import type { Meta, StoryObj } from '@storybook/vue3';
import Dashboard from './Dashboard.vue';

const meta = {
  title: 'Views/Dashboard',
  component: Dashboard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dashboard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
