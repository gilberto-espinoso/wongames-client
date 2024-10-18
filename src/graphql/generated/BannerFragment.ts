export interface BannerFragment_image_data_attributes {
  __typename: 'UploadFile'
  url: string
}

export interface BannerFragment_image_data {
  __typename: 'UploadFileEntityResponse'
  attributes: BannerFragment_image_data_attributes | null
}

export interface BannerFragment_image {
  __typename: 'UploadFileEntityResponse'
  data: BannerFragment_image_data | null
}

export interface BannerFragment_button {
  __typename: 'ComponentPageButton'
  label: string
  link: string
}

export interface BannerFragment_ribbon {
  __typename: 'ComponentPageRibbon'
  text: string
  color: string
  size: string
}

export interface BannerFragment_attributes {
  __typename: 'Banner'
  image: BannerFragment_image
  title: string
  subtitle: string
  button: BannerFragment_button | null
  ribbon: BannerFragment_ribbon | null
}

export interface QueryHome_banners_attributes {
  __typename: 'Banner'
  image: BannerFragment_image
  title: string
  subtitle: string
  button: BannerFragment_button | null
  ribbon: BannerFragment_ribbon | null
}

export interface QueryHome_banners {
  __typename: 'BannerEntity'
  attributes: QueryHome_banners_attributes | null
}

export interface QueryHome {
  banners: {
    data: QueryHome_banners[]
  }
}
