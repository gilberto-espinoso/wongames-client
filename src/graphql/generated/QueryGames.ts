export interface QueryGames_games_cover_data_attributes {
  __typename: 'UploadFile'
  url: string
}

export interface QueryGames_games_cover {
  __typename: 'UploadFileEntityResponse'
  data: {
    attributes: QueryGames_games_cover_data_attributes
  } | null
}

export interface QueryGames_games_develops_data_attributes {
  __typename: 'Develop'
  name: string
}

export interface QueryGames_games_develops {
  __typename: 'DevelopRelationResponseCollection'
  data: {
    attributes: QueryGames_games_develops_data_attributes
  }[]
}

export interface QueryGames_games_attributes {
  __typename: 'GameAttributes'
  name: string
  slug: string
  cover: QueryGames_games_cover | null
  develops: QueryGames_games_develops
  price: number
}

export interface QueryGames_games {
  __typename: 'GameEntity'
  attributes: QueryGames_games_attributes
}

export interface QueryGames {
  games: {
    data: QueryGames_games[]
  }
}

export interface QueryGamesVariables {
  limit: number
  start?: number
}
