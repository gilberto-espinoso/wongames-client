import GamesTemplate, { GamesTemplateProps } from '@/templates/Games'
import filterItemsMock from '@/components/ExploreSidebar/mock'
import { initializeApollo } from '@/utils/apollo'
import { gql } from '@apollo/client'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: gql`
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
  })

  return {
    props: {
      revalidate: 60,
      games: data.games.data.map((game) => ({
        title: game.attributes.name,
        developer:
          game.attributes.develops?.data[0]?.attributes?.name ||
          'Unknown Developer',
        img:
          `http://localhost:1337${game.attributes.cover?.data?.attributes?.url}` ||
          null,
        price:
          new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(game.attributes.price) || 0
      })),
      filterItems: filterItemsMock
    }
  }
}
