import { Meta, StoryObj } from '@storybook/react'
import Highlight, { HighlightProps } from '.'
import item from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...item }
} as Meta

export const WithFloatImage: StoryObj<HighlightProps> = {
  args: {
    floatImage: '/img/red-dead-float.png'
  },
  render: ({ ...args }) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  )
}

export const Default: StoryObj = {}
