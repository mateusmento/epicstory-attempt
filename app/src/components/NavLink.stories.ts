import type { Meta, StoryObj } from '@storybook/vue3';
import NavLink from './NavLink.vue';

const meta = {
  title: 'Components/NavLink',
  component: NavLink,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary'],
    },
  },
  render: (args) => ({
    components: { NavLink },
    setup: () => ({ args }),
    template: '<NavLink v-bind="args">Hello world</NavLink',
  }),
} satisfies Meta<typeof NavLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultVariant: Story = {
  args: {
    variant: 'default',
  },
};

export const PrimaryVariant: Story = {
  args: {
    variant: 'primary',
  },
};

export const SecondaryVariant: Story = {
  args: {
    variant: 'secondary',
  },
};
