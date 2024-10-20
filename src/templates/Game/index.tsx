import Base from '../../templates/Base'

import Showcase from '@/components/Showcase'
import TextContent from '@/components/TextContent'
import { Divider } from '@/components/Divider'
import { GameCardProps } from '@/components/GameCard'
import { HighlightProps } from '@/components/Highlight'
import GameInfo, { GameInfoProps } from '@/components/GameInfo'
import Gallery, { GalleryImageProps } from '@/components/Gallery'
import GameDetails, { GameDetailsProps } from '@/components/GameDetails'

import * as S from './styles'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
  recommendedTitle: string
  UpcomingTitle: string
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames,
  recommendedTitle,
  UpcomingTitle
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" arial-label="cover" />
    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>
      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent content={description} title="Description" />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />
        <Divider />
      </S.SectionGameDetails>

      <Showcase
        title={UpcomingTitle}
        games={upcomingGames}
        highlight={upcomingHighlight}
      />
      <Showcase title={recommendedTitle} games={recommendedGames} />
    </S.Main>
  </Base>
)

export default Game
