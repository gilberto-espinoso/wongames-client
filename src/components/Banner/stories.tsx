import { Meta, StoryObj } from '@storybook/react'
import Banner from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://github.com/gilberto-espinosa/assets/blob/main/games/cyberpunk%20-%20phantom-liberty1042x586.jpg?raw=true',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {}
