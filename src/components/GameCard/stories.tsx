import { Meta, StoryObj } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://github.com/gilberto-espinosa/assets/blob/main/games/fall-guys.jpg?raw=true',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  },
  render: ({ ...args }) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
} as Meta<GameCardProps>

export const WithRibbon: StoryObj<GameCardProps> = {
  args: {
    ribbon: '20% OFF',
    ribbonSize: 'small',
    ribbonColor: 'primary'
  },
  render: ({ ...args }) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
}

export const Default: StoryObj = {}
