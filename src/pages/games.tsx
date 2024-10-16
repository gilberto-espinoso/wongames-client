import GamesTemplate, { GamesTemplateProps } from '@/templates/Games'
import { QueryGames, QueryGamesVariables } from '@/graphql/generated/QueryGames'
import filterItemsMock from '@/components/ExploreSidebar/mock'
import { initializeApollo } from '@/utils/apollo'
import { QUERY_GAMES } from '@/graphql/queries/games'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 60,
      games: data.games.data.map((game) => ({
        title: game.attributes.name,
        slug: game.attributes.slug,
        developer:
          game.attributes.develops?.data[0]?.attributes?.name ||
          'Unknown Developer',
        img:
          `http://localhost:1337${game.attributes.cover?.data?.attributes?.url}` ||
          null,
        price: game.attributes.price
      })),
      filterItems: filterItemsMock
    }
  }
}
