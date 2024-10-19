// Banner Fragment Types
export interface QueryHome_banners_image_data_attributes {
  __typename: 'UploadFile'
  url: string
}

export interface QueryHome_banners_image_data {
  __typename: 'UploadFileEntityResponse'
  attributes: QueryHome_banners_image_data_attributes | null
}

export interface QueryHome_banners_image {
  __typename: 'UploadFileEntityResponse'
  data: QueryHome_banners_image_data | null
}

export interface QueryHome_banners_button {
  __typename: 'ComponentPageButton'
  label: string
  link: string
}

export interface QueryHome_banners_ribbon {
  __typename: 'ComponentPageRibbon'
  text: string
  color: string
  size: string
}

export interface QueryHome_banners_attributes {
  __typename: 'Banner'
  image: QueryHome_banners_image
  title: string
  subtitle: string
  button: QueryHome_banners_button | null
  ribbon: QueryHome_banners_ribbon | null
}

export interface QueryHome_banners {
  __typename: 'BannerEntity'
  attributes: QueryHome_banners_attributes | null
}

// Game Fragment Types
export interface QueryHome_games_cover_data_attributes {
  __typename: 'UploadFile'
  url: string
}

export interface QueryHome_games_cover_data {
  __typename: 'UploadFileEntityResponse'
  attributes: QueryHome_games_cover_data_attributes | null
}

export interface QueryHome_games_cover {
  __typename: 'UploadFileEntityResponse'
  data: QueryHome_games_cover_data | null
}

export interface QueryHome_games_develops_data_attributes {
  __typename: 'Develop'
  name: string
}

export interface QueryHome_games_develops_data {
  __typename: 'DevelopEntity'
  attributes: QueryHome_games_develops_data_attributes | null
}

export interface QueryHome_games_develops {
  __typename: 'DevelopRelationResponseCollection'
  data: QueryHome_games_develops_data[]
}

export interface QueryHome_games_attributes {
  __typename: 'Game'
  name: string
  slug: string
  cover: QueryHome_games_cover | null
  develops: QueryHome_games_develops
  price: number
}

export interface QueryHome_games {
  __typename: 'GameEntity'
  attributes: QueryHome_games_attributes | null
}

// Upcoming Games Fragment Types
export interface QueryHome_upcomingGames {
  __typename: 'GameEntity'
  attributes: QueryHome_games_attributes | null
}

// Free Games Fragment Types
export interface QueryHome_freeGames {
  __typename: 'GameEntity'
  attributes: QueryHome_games_attributes | null
}

// Main QueryHome Type
export interface QueryHome {
  banners: {
    data: QueryHome_banners[]
  }
  newGames: {
    data: QueryHome_games[]
  }
  upcomingGames: {
    data: QueryHome_games[]
  }
  freeGames: {
    data: QueryHome_freeGames[]
  }
}
