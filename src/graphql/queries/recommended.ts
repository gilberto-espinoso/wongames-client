import { gql } from '@apollo/client'
import { GameFragment } from '../fragments/game'
import { HighlightFragment } from '../fragments/highlight'

export const QUERY_RECOMMENDED = gql`
  query QueryRecommended {
    recommended {
      data {
        attributes {
          section {
            title
            highlight {
              ...HighlightFragment
            }
            games {
              data {
                attributes {
                  ...GameFragment
                }
              }
            }
          }
        }
      }
    }
  }

  ${GameFragment}
  ${HighlightFragment}
`
