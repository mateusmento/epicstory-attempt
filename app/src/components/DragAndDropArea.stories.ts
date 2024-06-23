import type { Meta, StoryObj } from '@storybook/vue3';
import DragAndDropArea from '../components/DragAndDropArea.vue';

const meta = {
  title: 'Demos/DragAndDropArea.vue',
  component: DragAndDropArea,
} as Meta<typeof DragAndDropArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
