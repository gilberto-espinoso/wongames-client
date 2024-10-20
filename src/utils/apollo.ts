import { useMemo } from 'react'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            games: {
              // Don't cache separate results based on
              // any of this field's arguments.
              keyArgs: false,

              // Concatenate the incoming list items with
              // the existing list items.
              merge(existing = [], incoming) {
                const existingGames = existing?.data || []
                const incomingGames = incoming?.data || []
                return {
                  ...incoming,
                  data: [...existingGames, ...incomingGames]
                }
              }
            }
          }
        }
      }
    })
  })
}

export function initializeApollo(initialState = {}) {
  //serve para verificar se já existe uma instância, para não criar outra
  const apolloClientGlobal = apolloClient ?? createApolloClient()

  // recuperando os dados de cache
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  // sempre inicializando no SSR com cache limpo
  if (typeof window === 'undefined') return apolloClientGlobal
  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
