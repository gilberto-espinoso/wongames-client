import { Meta, StoryObj } from '@storybook/react'
import BannerSlider, { BannerSliderProps } from '.'

const items = [
  {
    img: 'https://github.com/gilberto-espinosa/assets/blob/main/games/the-witcher3.jpg?raw=true',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://github.com/gilberto-espinosa/assets/blob/main/games/roblox-2%20.jpg?raw=true',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  {
    img: 'https://github.com/gilberto-espinosa/assets/blob/main/games/rainbowsix.jpg?raw=true',
    title: 'Defy death 3',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<BannerSliderProps> = {
  render: ({ ...args }) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <BannerSlider {...args} />
    </div>
  )
}
