import { ENUM_GAME_RATING } from './globalTypes'

export interface QueryGameBySlug_games_gallery_data_attributes {
  __typename: 'UploadFile'
  src: string
  label: string
}

export interface QueryGameBySlug_games_gallery_data {
  __typename: 'UploadFileEntityResponse'
  data: {
    attributes: QueryGameBySlug_games_gallery_data_attributes
  }[]
}

export interface QueryGameBySlug_games_categories_data_attributes {
  __typename: 'Category'
  name: string
}

export interface QueryGameBySlug_games_categories {
  __typename: 'CategoryRelationResponseCollection'
  data: {
    attributes: QueryGameBySlug_games_categories_data_attributes
  }[]
}

export interface QueryGameBySlug_games_publisher_data_attributes {
  __typename: 'Publisher'
  name: string
}

export interface QueryGameBySlug_games_publisher {
  __typename: 'PublisherRelationResponseCollection'
  data: {
    attributes: QueryGameBySlug_games_publisher_data_attributes
  } | null
}

export interface QueryGameBySlug_games_cover_data_attributes {
  __typename: 'UploadFile'
  src: string
}

export interface QueryGameBySlug_games_cover {
  __typename: 'UploadFileEntityResponse'
  data: {
    attributes: QueryGameBySlug_games_cover_data_attributes
  } | null
}

export interface QueryGameBySlug_games_develops_data_attributes {
  __typename: 'Develop'
  name: string
}

export interface QueryGameBySlug_games_develops {
  __typename: 'DevelopRelationResponseCollection'
  data: {
    attributes: QueryGameBySlug_games_develops_data_attributes
  }[]
}

export interface QueryGameBySlug_games_platforms_data_attributes {
  __typename: 'Platform'
  name: string
}

export interface QueryGameBySlug_games_platforms {
  __typename: 'PlatformRelationResponseCollection'
  data: {
    attributes: QueryGameBySlug_games_platforms_data_attributes
  }[]
}

export interface QueryGameBySlug_games_attributes {
  __typename: 'GameAttributes'
  name: string
  short_description: string
  description: string
  price: number
  rating: ENUM_GAME_RATING | null //number
  release_date: string
  gallery: QueryGameBySlug_games_gallery_data
  cover: QueryGameBySlug_games_cover | null
  develops: QueryGameBySlug_games_develops
  publisher: QueryGameBySlug_games_publisher
  categories: QueryGameBySlug_games_categories
  platforms: QueryGameBySlug_games_platforms
}

export interface QueryGameBySlug_games {
  __typename: 'GameEntity'
  attributes: QueryGameBySlug_games_attributes
}

export interface QueryGameBySlug {
  games: {
    data: QueryGameBySlug_games[]
  }
}

export interface QueryGameBySlugVariables {
  slug: string
}
