import type { Meta, StoryObj } from '@storybook/vue3';
import ScrollInnerFlexContainer from './ScrollInnerFlexContainer.vue';

const meta = {
  title: 'Demos/ScrollInnerFlexContainer',
  component: ScrollInnerFlexContainer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollInnerFlexContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
