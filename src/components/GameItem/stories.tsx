import { Meta, StoryObj } from '@storybook/react'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f2e22cd503abffa304796f40246a203a.png',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  }
} as Meta

export const Default: StoryObj<GameItemProps> = {}
