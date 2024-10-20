import { useQuery } from '@apollo/client'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import ExploreSidebar, { ItemProps } from '@/components/ExploreSidebar'
import GameCard, { GameCardProps } from '@/components/GameCard'
import { Grid } from '@/components/Grid'
import Base from '@/templates/Base'

import * as S from './styles'
import { QueryGames, QueryGamesVariables } from '@/graphql/generated/QueryGames'
import { QUERY_GAMES } from '@/graphql/queries/games'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data } = useQuery<QueryGames, QueryGamesVariables>(QUERY_GAMES, {
    variables: { limit: 9 }
  })

  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <section>
          <Grid>
            {data?.games.data.map((game) => (
              <GameCard
                key={game.attributes.slug}
                title={game.attributes.name}
                slug={game.attributes.slug}
                developer={game.attributes.develops?.data[0]?.attributes?.name}
                img={`http://localhost:1337${game.attributes.cover?.data?.attributes?.url}`}
                price={game.attributes.price}
              />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
