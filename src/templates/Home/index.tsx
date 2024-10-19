import { BannerProps } from '@/components/Banner'
import BannerSlider from '@/components/BannerSlider'
import { Container } from '@/components/Container'
import { GameCardProps } from '@/components/GameCard'
import { HighlightProps } from '@/components/Highlight'
import Showcase from '@/components/Showcase'
import Base from '../Base'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighligth: HighlightProps
  freeGames: GameCardProps[]
  freeHighligth: HighlightProps
  newGamesTitle: string
  mostPopularGamesTitle: string
  upcommingGamesTitle: string
  freeGamesTitle: string
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighligth,
  freeGames,
  freeHighligth,
  newGamesTitle,
  mostPopularGamesTitle,
  upcommingGamesTitle,
  freeGamesTitle
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title={newGamesTitle} games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title={mostPopularGamesTitle}
      games={mostPopularGames}
      highlight={mostPopularHighlight}
    />

    <Showcase
      title={upcommingGamesTitle}
      games={upcommingGames}
      highlight={upcommingHighligth}
    />

    <Showcase
      title={freeGamesTitle}
      highlight={freeHighligth}
      games={freeGames}
    />
  </Base>
)

export default Home
