export interface HighlightFragment_background_data_attributes {
  __typename: 'UploadFile'
  url: string
}

export interface HighlightFragment_background_data {
  __typename: 'UploadFileEntityResponse'
  attributes: HighlightFragment_background_data_attributes | null
}

export interface HighlightFragment_background {
  __typename: 'UploadFileEntityResponse'
  data: HighlightFragment_background_data | null
}

export interface HighlightFragment_floatImage_data_attributes {
  __typename: 'UploadFile'
  url: string
}

export interface HighlightFragment_floatImage_data {
  __typename: 'UploadFileEntityResponse'
  attributes: HighlightFragment_floatImage_data_attributes | null
}

export interface HighlightFragment_floatImage {
  __typename: 'UploadFileEntityResponse'
  data: HighlightFragment_floatImage_data | null
}

export interface HighlightFragment {
  __typename: 'ComponentPageHighlight'
  title: string
  subtitle: string
  background: HighlightFragment_background | null
  floatImage: HighlightFragment_floatImage | null
  buttonLabel: string
  buttonLink: string
  alignment: string | null
}
