import { QueryHome } from '@/graphql/generated/QueryHome'
import { QUERY_HOME } from '@/graphql/queries/home'
import { initializeApollo } from '@/utils/apollo'
import Home, { HomeTemplateProps } from '../templates/Home'
import { bannerMapper, gamesMapper, highlightMapper } from '@/utils/mappers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  console.log(sections)
  console.log(sections.data?.attributes?.popularGames?.title)

  return {
    props: {
      revalidate: 20,
      banners: bannerMapper(banners.data),
      newGamesTitle: sections.data?.attributes?.newGames?.title,
      newGames: gamesMapper(newGames.data),
      mostPopularGamesTitle: sections.data?.attributes?.popularGames?.title,
      mostPopularHighlight: highlightMapper(
        sections.data?.attributes?.popularGames
      ),
      mostPopularGames: gamesMapper(
        sections.data!.attributes!.popularGames!.games.data
      ),
      upcommingGamesTitle: sections.data?.attributes?.upcomingGames?.title,
      upcommingGames: gamesMapper(upcomingGames.data),
      upcommingHighligth: highlightMapper(
        sections.data?.attributes?.upcomingGames
      ),
      freeGamesTitle: sections.data?.attributes?.freeGames?.title,
      freeGames: gamesMapper(freeGames.data),
      freeHighligth: highlightMapper(sections.data?.attributes?.freeGames)
    }
  }
}
