import Base from '@/templates/Base'

import Heading from '@/components/Heading'
import Showcase from '@/components/Showcase'
import { Container } from '@/components/Container'
import GameCard, { GameCardProps } from '@/components/GameCard'
import { HighlightProps } from '@/components/Highlight'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games?.map((game, index) => (
        <GameCard key={`wisjlist-${index}`} {...game} />
      ))}
    </Container>

    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist
