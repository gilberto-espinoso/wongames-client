import { gql } from '@apollo/client'

export const QUERY_GAMES = gql`
  query QueryGames {
    games {
      data {
        attributes {
          name
          slug
          cover {
            data {
              attributes {
                url
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
          price
        }
      }
    }
  }
`
