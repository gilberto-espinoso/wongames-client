export interface GameFragment_cover_data_attributes {
  __typename: 'UploadFile'
  url: string
}

export interface GameFragment_cover_data {
  __typename: 'UploadFileEntityResponse'
  attributes: GameFragment_cover_data_attributes | null
}

export interface GameFragment_cover {
  __typename: 'UploadFileEntityResponse'
  data: GameFragment_cover_data | null
}

export interface GameFragment_develops_data_attributes {
  __typename: 'Develop'
  name: string
}

export interface GameFragment_develops_data {
  __typename: 'DevelopEntity'
  attributes: GameFragment_develops_data_attributes | null
}

export interface GameFragment_develops {
  __typename: 'DevelopRelationResponseCollection'
  data: GameFragment_develops_data[]
}

export interface GameFragment {
  __typename: 'Game'
  name: string
  slug: string
  cover: GameFragment_cover | null
  develops: GameFragment_develops
  price: number
}
