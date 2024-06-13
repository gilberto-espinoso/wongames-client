import { Meta, StoryObj } from '@storybook/react'
import Heading, { HeadingProp } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: StoryObj<HeadingProp> = {}

Default.args = {
  children: 'Most Populars'
}
