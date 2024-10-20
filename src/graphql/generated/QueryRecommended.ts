import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from './globalTypes'

// Game Fragment Types
export interface QueryRecommended_games_cover_data_attributes {
  __typename: 'UploadFile'
  url: string
}

export interface QueryRecommended_games_cover_data {
  __typename: 'UploadFileEntityResponse'
  attributes: QueryRecommended_games_cover_data_attributes | null
}

export interface QueryRecommended_games_cover {
  __typename: 'UploadFileEntityResponse'
  data: QueryRecommended_games_cover_data | null
}

export interface QueryRecommended_games_develops_data_attributes {
  __typename: 'Develop'
  name: string
}

export interface QueryRecommended_games_develops_data {
  __typename: 'DevelopEntity'
  attributes: QueryRecommended_games_develops_data_attributes | null
}

export interface QueryRecommended_games_develops {
  __typename: 'DevelopRelationResponseCollection'
  data: QueryRecommended_games_develops_data[]
}

export interface QueryRecommended_games_attributes {
  __typename: 'Game'
  name: string
  slug: string
  cover: QueryRecommended_games_cover | null
  develops: QueryRecommended_games_develops
  price: number
}

export interface QueryRecommended_games {
  __typename: 'GameEntity'
  attributes: QueryRecommended_games_attributes | null
}

// Highlight Fragment Types
export interface QueryRecommended_highlight_background_data_attributes {
  __typename: 'UploadFile'
  url: string
}

export interface QueryRecommended_highlight_background_data {
  __typename: 'UploadFileEntityResponse'
  attributes: QueryRecommended_highlight_background_data_attributes | null
}

export interface QueryRecommended_highlight_background {
  __typename: 'UploadFileEntityResponse'
  data: QueryRecommended_highlight_background_data | null
}

export interface QueryRecommended_highlight_floatImage_data_attributes {
  __typename: 'UploadFile'
  url: string
}

export interface QueryRecommended_highlight_floatImage_data {
  __typename: 'UploadFileEntityResponse'
  attributes: QueryRecommended_highlight_floatImage_data_attributes | null
}

export interface QueryRecommended_highlight_floatImage {
  __typename: 'UploadFileEntityResponse'
  data: QueryRecommended_highlight_floatImage_data | null
}

export interface QueryRecommended_highlight {
  __typename: 'ComponentPageHighlight'
  title: string
  subtitle: string
  background: QueryRecommended_highlight_background | null
  floatImage: QueryRecommended_highlight_floatImage | null
  buttonLabel: string
  buttonLink: string
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null
}

// Recommended Section Types
export interface QueryRecommended_section {
  __typename: 'ComponentSection'
  title: string
  highlight: QueryRecommended_highlight | null
  games: {
    data: QueryRecommended_games[]
  }
}

// Main QueryRecommended Type
export interface QueryRecommended_recommended_attributes {
  __typename: 'HomeRecommended'
  section: QueryRecommended_section | null
}

export interface QueryRecommended_recommended {
  __typename: 'HomeRecommendedEntity'
  attributes: QueryRecommended_recommended_attributes | null
}

export interface QueryRecommended {
  recommended: {
    data: QueryRecommended_recommended | null
  }
}
