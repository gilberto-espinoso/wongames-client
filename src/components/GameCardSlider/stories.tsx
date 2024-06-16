import { StoryObj, Meta } from '@storybook/react'

import { GameCardProps } from '../../components/GameCard'
import GameCardSlider from '.'

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://github.com/gilberto-espinosa/assets/blob/main/games/cyberpunk%20-%20phantom-liberty1042x586.jpg?raw=true',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://github.com/gilberto-espinosa/assets/blob/main/games/elden_ring_trailer_release_date.jpg?raw=true',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://github.com/gilberto-espinosa/assets/blob/main/games/the-witcher3.jpg?raw=true',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://github.com/gilberto-espinosa/assets/blob/main/games/call-off-duty-war-zone.jpeg?raw=true',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://github.com/gilberto-espinosa/assets/blob/main/games/roblox-2%20.jpg?raw=true',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://github.com/gilberto-espinosa/assets/blob/main/games/rainbowsix.jpg?raw=true',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
]

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<GameCardProps> = {
  render: ({ ...args }) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameCardSlider items={items} {...args} />
    </div>
  )
}
