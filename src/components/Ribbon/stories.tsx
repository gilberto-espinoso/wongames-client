import { Meta, StoryObj } from '@storybook/react'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  render: ({ ...args }) => (
    <div
      style={{
        width: '20rem',
        height: '25rem',
        position: 'relative',
        backgroundColor: '#888'
      }}
    >
      <Ribbon {...args} />
    </div>
  ),
  args: {
    children: 'Best Seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta<RibbonProps>

export const Default: StoryObj = {}
