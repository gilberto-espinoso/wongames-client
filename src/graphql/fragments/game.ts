import { gql } from '@apollo/client'

export const GameFragment = gql`
  fragment GameFragment on Game {
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
`
