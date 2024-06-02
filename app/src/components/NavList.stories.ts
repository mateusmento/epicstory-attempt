import type { Meta, StoryObj } from '@storybook/vue3';
import NavList from './NavList.vue';
import NavLink from './NavLink.vue';

const meta = {
  title: 'Components/NavList',
  component: NavList,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column'],
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary'],
    },
  },
  args: {
    direction: 'row',
  },
  render: (args) => ({
    components: { NavList, NavLink },
    setup: () => ({ args }),
    template: `
      <NavList v-bind="args">
        <NavLink>Backlog</NavLink>
        <NavLink>Sprints</NavLink>
        <NavLink>Roadmap</NavLink>
        <NavLink>Members</NavLink>
      </NavList>
    `,
  }),
} satisfies Meta<typeof NavList>;

export default meta;

type Story = StoryObj<typeof meta>;

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

export const DefaultVariant: Story = {
  args: {
    variant: 'default',
  },
};
