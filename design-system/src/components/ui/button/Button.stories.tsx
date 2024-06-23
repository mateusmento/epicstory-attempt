import type { Meta, StoryObj } from '@storybook/vue3'
import vButton from './vButton.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'shadcn-vue/Button',
  render: (args) => ({
    components: { vButton },
    render() {
      return <vButton {...args}>Click me</vButton>
    }
  }),
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['default', 'icon', 'xs', 'sm', 'lg'] },
    variant: {
      control: 'select',
      options: ['default', 'outline', 'destructive', 'link', 'text', 'ghost']
    }
  }
} satisfies Meta<typeof vButton>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {}
}
