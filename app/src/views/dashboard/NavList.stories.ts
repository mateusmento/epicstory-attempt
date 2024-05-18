import type { Meta, StoryObj } from '@storybook/vue3';
import NavList from './NavList.vue';
import NavLink from './NavLink.vue';

const meta = {
  title: 'Component/NavList',
  component: NavList,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VerticalList: Story = {
  render: () => ({
    components: { NavList, NavLink },
    template: `
        <NavList>
          <NavLink>Backlog</NavLink>
          <NavLink>Sprints</NavLink>
          <NavLink>Roadmap</NavLink>
          <NavLink>Members</NavLink>
        </NavList>
      `,
  }),
};

export const HorizontalList: Story = {
  render: () => ({
    components: { NavList, NavLink },
    template: `
      <NavList direction="row">
        <NavLink>Backlog</NavLink>
        <NavLink>Sprints</NavLink>
        <NavLink>Roadmap</NavLink>
        <NavLink>Members</NavLink>
      </NavList>
    `,
  }),
};
