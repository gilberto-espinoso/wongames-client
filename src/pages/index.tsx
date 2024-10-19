import { QueryHome } from '@/graphql/generated/QueryHome'
import { QUERY_HOME } from '@/graphql/queries/home'
import { initializeApollo } from '@/utils/apollo'
import Home, { HomeTemplateProps } from '../templates/Home'
import { bannerMapper, gamesMapper } from '@/utils/mappers'

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
      mostPopularHighlight: {
        title:
          sections.data?.attributes?.popularGames?.highlight?.title || 'Error',
        subtitle:
          sections.data?.attributes?.popularGames?.highlight?.subtitle ||
          'Error',
        backgroundImage:
          `http://localhost:1337${sections.data?.attributes?.popularGames?.highlight?.background?.data?.attributes?.url}` ||
          '/img/red-dead-img.jpg',
        floatImage:
          `http://localhost:1337${sections.data?.attributes?.popularGames?.highlight?.floatImage?.data?.attributes?.url}` ||
          null,
        buttonLabel:
          sections.data?.attributes?.popularGames?.highlight?.buttonLabel ||
          'Error',
        buttonLink:
          sections.data?.attributes?.popularGames?.highlight?.buttonLink ||
          null,
        alignment:
          sections.data?.attributes?.popularGames?.highlight?.alignment ||
          'right'
      },
      mostPopularGames: gamesMapper(
        sections.data!.attributes!.popularGames!.games.data
      ),
      upcommingGamesTitle: sections.data?.attributes?.upcomingGames?.title,
      upcommingGames: gamesMapper(upcomingGames.data),
      upcommingHighligth: {
        title: sections.data?.attributes?.upcomingGames?.highlight?.title,
        subtitle: sections.data?.attributes?.upcomingGames?.highlight?.subtitle,
        backgroundImage: `http://localhost:1337${sections.data?.attributes?.upcomingGames?.highlight?.background?.data?.attributes?.url}`,
        buttonLabel:
          sections.data?.attributes?.upcomingGames?.highlight?.buttonLabel,
        buttonLink:
          sections.data?.attributes?.upcomingGames?.highlight?.buttonLink
      },
      freeGamesTitle: sections.data?.attributes?.freeGames?.title,
      freeGames: gamesMapper(freeGames.data),
      freeHighligth: {
        title:
          sections.data?.attributes?.freeGames?.highlight?.title || 'Error',
        subtitle:
          sections.data?.attributes?.freeGames?.highlight?.subtitle || 'Error',
        backgroundImage:
          `http://localhost:1337${sections.data?.attributes?.freeGames?.highlight?.background?.data?.attributes?.url}` ||
          '/img/red-dead-img.jpg',
        floatImage:
          `http://localhost:1337${sections.data?.attributes?.freeGames?.highlight?.floatImage?.data?.attributes?.url}` ||
          null,
        buttonLabel:
          sections.data?.attributes?.freeGames?.highlight?.buttonLabel ||
          'Error',
        buttonLink:
          sections.data?.attributes?.freeGames?.highlight?.buttonLink || null,
        alignment:
          sections.data?.attributes?.freeGames?.highlight?.alignment || 'right'
      }
    }
  }
}
