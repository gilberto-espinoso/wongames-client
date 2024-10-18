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

export interface QueryHome {
  banners: {
    data: QueryHome_banners[]
  }
}
