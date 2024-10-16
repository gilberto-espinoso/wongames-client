import { gql } from '@apollo/client'

import { initializeApollo } from '@/utils/apollo'
import bannersMock from '../components/BannerSlider/mock'
import gamesMock from '../components/GameCardSlider/mock'
import highlightMock from '../components/Highlight/mock'
import Home, { HomeTemplateProps } from '../templates/Home'

const GET_GAMES = gql`
  query getGames {
    games {
      data {
        attributes {
          name
        }
      }
    }
  }
`

export default function Index(props: HomeTemplateProps) {
  if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>

  return <Home {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({ query: GET_GAMES })

  //retorno dos dados
  return {
    props: {
      data: data,
      initialApoloState: apolloClient.cache.extract(),
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighligth: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighligth: highlightMock
    }
  }
}
