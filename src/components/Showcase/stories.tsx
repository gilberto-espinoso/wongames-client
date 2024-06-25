import highlightMock from '../../components/Highlight/mock'
import gamesMock from '../../components/GameCardSlider/mock'
import { Meta, StoryObj } from '@storybook/react'
import Showcase, { ShowcaseProps } from '.'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (StoryObj) => (
      <div style={{ margin: ' 0 auto' }}>
        <StoryObj />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<ShowcaseProps> = {
  render: (args) => <Showcase {...args} />
}

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock
}
