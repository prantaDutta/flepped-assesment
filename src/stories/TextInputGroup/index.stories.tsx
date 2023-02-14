import { Meta, StoryObj } from '@storybook/react'
import { TextInputGroup } from '@/stories/TextInputGroup/index'

const meta: Meta<typeof TextInputGroup> = {
  title: 'Components/TextInputGroup',
  component: TextInputGroup,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof TextInputGroup>

export const Default: Story = {}
export const TextGroupLeft: Story = {
  args: {
    leftElement: <p>Price</p>,
  },
}

export const TextGroupRight: Story = {
  args: {
    rightElement: <p>Dollars</p>,
  },
}
