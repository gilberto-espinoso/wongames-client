import { Meta, StoryObj } from '@storybook/react'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  render: ({ ...args }) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <Banner {...args} />
    </div>
  ),
  args: {
    img: 'https://github.com/gilberto-espinosa/assets/blob/main/games/cyberpunk%20-%20phantom-liberty1042x586.jpg?raw=true',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  argTypes: {
    ribbon: {
      type: 'string'
    }
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta<BannerProps>

export const Default: StoryObj = {}
