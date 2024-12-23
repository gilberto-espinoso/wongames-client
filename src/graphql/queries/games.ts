import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { GameFragment } from '../fragments/game'
import { QueryGames, QueryGamesVariables } from '../generated/QueryGames'

export const QUERY_GAMES = gql`
  query QueryGames(
    $limit: Int!
    $start: Int
    $sort: String
    $genre: String
    $platform: String
    $price: Float
  ) {
    games(
      pagination: { limit: $limit, start: $start }
      sort: [$sort]
      filters: {
        and: [
          { categories: { name: { contains: $genre } } }
          { platforms: { name: { contains: $platform } } }
          { price: { lte: $price } }
        ]
      }
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }
  }
  ${GameFragment}
`

export const QUERY_GAME_BY_SLUG = gql`
  query QueryGameBySlug($slug: String!) {
    games(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          name
          short_description
          description
          price
          rating
          release_date
          gallery {
            data {
              attributes {
                src: url
                label: alternativeText
              }
            }
          }
          cover {
            data {
              attributes {
                src: url
              }
            }
          }
          develops {
            data {
              attributes {
                name
              }
            }
          }
          publisher {
            data {
              attributes {
                name
              }
            }
          }
          categories {
            data {
              attributes {
                name
              }
            }
          }
          platforms {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`

export function useQueryGames(
  options?: QueryHookOptions<QueryGames, QueryGamesVariables>
) {
  return useQuery<QueryGames, QueryGamesVariables>(QUERY_GAMES, options)
}
