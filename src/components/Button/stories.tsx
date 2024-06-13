import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import { Meta, StoryObj } from '@storybook/react'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'function'
    }
  }
} as Meta

export const Default: StoryObj = {}
export const WithIcon: StoryObj = {}

Default.args = {
  children: 'By now'
}

WithIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}
