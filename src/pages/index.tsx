import { QueryHome } from '@/graphql/generated/QueryHome'
import { QUERY_HOME } from '@/graphql/queries/home'
import { initializeApollo } from '@/utils/apollo'
import Home, { HomeTemplateProps } from '../templates/Home'

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
      banners: banners.data.map((banner) => ({
        img: `http://localhost:1337${banner.attributes?.image.data?.attributes?.url}`,
        title: banner.attributes?.title || null,
        subtitle: banner.attributes?.subtitle || null,
        buttonLabel: banner.attributes?.button?.label || null,
        buttonLink: banner.attributes?.button?.link || null,
        ribbon: banner.attributes?.ribbon?.text || null,
        ribbonColor: banner.attributes?.ribbon?.color || null,
        ribbonSize: banner.attributes?.ribbon?.size || null
      })),
      newGamesTitle: sections.data?.attributes?.newGames?.title,
      newGames: newGames.data.map((newGame) => ({
        title: newGame.attributes?.name,
        slug: newGame.attributes?.slug,
        developer: newGame.attributes?.develops.data.map(
          (item) => item.attributes?.name
        ),
        img: `http://localhost:1337${newGame.attributes?.cover?.data?.attributes?.url}`,
        price: newGame.attributes?.price
      })),
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
      mostPopularGames: sections.data!.attributes!.popularGames!.games.data.map(
        (game) => ({
          title: game.attributes?.name,
          slug: game.attributes?.slug,
          developer: game.attributes?.develops.data.map(
            (item) => item.attributes?.name
          ),
          img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
          price: game.attributes?.price
        })
      ),
      upcommingGamesTitle: sections.data?.attributes?.upcomingGames?.title,
      upcommingGames: upcomingGames.data.map((upcoming) => ({
        title: upcoming.attributes?.name,
        slug: upcoming.attributes?.slug,
        developer: upcoming.attributes?.develops.data.map(
          (item) => item.attributes?.name
        ),
        img: `http://localhost:1337${upcoming.attributes?.cover?.data?.attributes?.url}`,
        price: upcoming.attributes?.price
      })),
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
      freeGames: freeGames.data.map((games) => ({
        title: games.attributes?.name,
        slug: games.attributes?.slug,
        developer: games.attributes?.develops.data.map(
          (item) => item.attributes?.name
        ),
        img: `http://localhost:1337${games.attributes?.cover?.data?.attributes?.url}`,
        price: games.attributes?.price
      })),
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
