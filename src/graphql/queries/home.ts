import { gql } from '@apollo/client'
import { BannerFragment } from '../fragments/banner'
import { GameFragment } from '../fragments/game'

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      data {
        attributes {
          ...BannerFragment
        }
      }
    }

    newGames: games(
      filters: { release_date: { lte: "2024-12-31" } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }
  }

  ${BannerFragment}
  ${GameFragment}
`
