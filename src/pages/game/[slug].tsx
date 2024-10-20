import { initializeApollo } from '@/utils/apollo'
import { useRouter } from 'next/router'

import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from '@/graphql/generated/QueryGameBySlug'
import { QueryGames, QueryGamesVariables } from '@/graphql/generated/QueryGames'
import { QueryHome } from '@/graphql/generated/QueryHome'
import { QueryRecommended } from '@/graphql/generated/QueryRecommended'
import { QUERY_GAME_BY_SLUG, QUERY_GAMES } from '@/graphql/queries/games'
import { QUERY_HOME } from '@/graphql/queries/home'
import { QUERY_RECOMMENDED } from '@/graphql/queries/recommended'
import Game, { GameTemplateProps } from '@/templates/Game'
import { gamesMapper, highlightMapper } from '@/utils/mappers'
import { GetStaticProps } from 'next'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  // caso a página esteja em branco, pode retornar um skeleton
  if (router.isFallback) return null

  return <Game {...props} />
}

// gerar em build time
//vai ser o passo em que ele gera as páginas baseado nas URL
export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games.data.map(({ attributes }) => ({
    params: { slug: attributes.slug }
  }))

  return { paths, fallback: true }
}

// é para a página em específico, onde vai alimentar a página com os dados (Preenche os dados)
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Get game data
  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({ query: QUERY_GAME_BY_SLUG, variables: { slug: `${params?.slug}` } })

  if (!data.games.data.length) return { notFound: true }

  const game = data.games.data[0]

  // Get recommended game data
  const { data: recommendedData } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  // Get home data
  const {
    data: { upcomingGames, sections }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    props: {
      revalidate: 60,
      cover: `http://localhost:1337${game.attributes.cover?.data?.attributes.src}`,
      gameInfo: {
        title: game.attributes.name,
        price: game.attributes.price,
        description: game.attributes.short_description
      },
      gallery: game.attributes.gallery.data.map((image) => ({
        src: `http://localhost:1337${image.attributes.src}`,
        label: image.attributes.label || null
      })),
      description: game.attributes.description,
      details: {
        developer: game.attributes.develops.data.map(
          (item) => item.attributes.name
        ),
        releaseDate: game.attributes.release_date,
        platforms: game.attributes.platforms.data.map(
          (platform) => platform.attributes.name
        ),
        publisher: game.attributes.publisher.data?.attributes.name,
        rating: game.attributes.rating,
        genres: game.attributes.categories.data.map(
          (category) => category.attributes.name
        )
      },
      UpcomingTitle: sections.data?.attributes?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcomingGames.data),
      upcomingHighlight: highlightMapper(
        sections.data?.attributes?.upcomingGames
      ),
      recommendedTitle:
        recommendedData.recommended.data?.attributes?.section?.title,
      recommendedGames: gamesMapper(
        recommendedData.recommended.data?.attributes?.section?.games.data
      )
    }
  }
}
