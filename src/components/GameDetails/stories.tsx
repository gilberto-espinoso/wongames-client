import { Meta, StoryObj } from '@storybook/react'
import GameDetails, { GameDetailsProps } from '.'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    platforms: ['windows', 'linux', 'mac']
  },
  argTypes: {
    platforms: {
      control: {
        type: 'radio',
        options: ['windows', 'linux', 'mac']
      }
    }
  }
} as Meta

export const Default: StoryObj<GameDetailsProps> = {
  render: ({ ...args }) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameDetails platforms={args.platforms} />
    </div>
  )
}
