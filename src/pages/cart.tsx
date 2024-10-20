import Cart, { CartProps } from '@/templates/Cart'

import gamesMock from '@/components/GameCardSlider/mock'
import { QueryRecommended } from '@/graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from '@/graphql/queries/recommended'
import { initializeApollo } from '@/utils/apollo'
import { gamesMapper } from '@/utils/mappers'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      revalidate: 20,
      games: gamesMock,
      recommendedTitle: data.recommended.data?.attributes?.section?.title,
      recommendedGames: gamesMapper(
        data.recommended.data?.attributes?.section?.games.data
      ),
      recommendedHighlight: {
        title: data.recommended.data?.attributes?.section?.highlight?.title,
        subtitle:
          data.recommended.data?.attributes?.section?.highlight?.subtitle,
        backgroundImage: `http://localhost:1337${data.recommended.data?.attributes?.section?.highlight?.background?.data?.attributes?.url}`,
        floatImage: `http://localhost:1337${data.recommended.data?.attributes?.section?.highlight?.floatImage?.data?.attributes?.url}`,
        buttonLabel:
          data.recommended.data?.attributes?.section?.highlight?.buttonLabel,
        buttonLink:
          data.recommended.data?.attributes?.section?.highlight?.buttonLink,
        alignment:
          data.recommended.data?.attributes?.section?.highlight?.alignment
      }
    }
  }
}
