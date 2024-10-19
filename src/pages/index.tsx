import { initializeApollo } from '@/utils/apollo'
import gamesMock from '../components/GameCardSlider/mock'
import highlightMock from '../components/Highlight/mock'
import Home, { HomeTemplateProps } from '../templates/Home'
import { QueryHome } from '@/graphql/generated/QueryHome'
import { QUERY_HOME } from '@/graphql/queries/home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames, upcomingGames, freeGames }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

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
      newGames: newGames.data.map((newGame) => ({
        title: newGame.attributes?.name,
        slug: newGame.attributes?.slug,
        developer: newGame.attributes?.develops.data.map(
          (item) => item.attributes?.name
        ),
        img: `http://localhost:1337${newGame.attributes?.cover?.data?.attributes?.url}`,
        price: newGame.attributes?.price
      })),
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: upcomingGames.data.map((upcoming) => ({
        title: upcoming.attributes?.name,
        slug: upcoming.attributes?.slug,
        developer: upcoming.attributes?.develops.data.map(
          (item) => item.attributes?.name
        ),
        img: `http://localhost:1337${upcoming.attributes?.cover?.data?.attributes?.url}`,
        price: upcoming.attributes?.price
      })),
      upcommingHighligth: highlightMock,
      freeGames: freeGames.data.map((games) => ({
        title: games.attributes?.name,
        slug: games.attributes?.slug,
        developer: games.attributes?.develops.data.map(
          (item) => item.attributes?.name
        ),
        img: `http://localhost:1337${games.attributes?.cover?.data?.attributes?.url}`,
        price: games.attributes?.price
      })),
      freeHighligth: highlightMock
    }
  }
}
