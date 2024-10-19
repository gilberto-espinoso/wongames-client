import { QueryHome_banners } from '@/graphql/generated/BannerFragment'
import { QueryGames_games } from '@/graphql/generated/QueryGames'
import {
  QueryHome_games,
  QueryHome_section_freeGames
} from '@/graphql/generated/QueryHome'

export const bannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
    img: `http://localhost:1337${banner.attributes?.image.data?.attributes?.url}`,
    title: banner.attributes?.title || null,
    subtitle: banner.attributes?.subtitle || null,
    buttonLabel: banner.attributes?.button?.label || null,
    buttonLink: banner.attributes?.button?.link || null,
    ribbon: banner.attributes?.ribbon?.text || null,
    ribbonColor: banner.attributes?.ribbon?.color || null,
    ribbonSize: banner.attributes?.ribbon?.size || null
  }))
}

export const gamesMapper = (
  games: QueryGames_games[] | QueryHome_games[] | null | undefined
) => {
  return (
    games &&
    games.map((game) => ({
      title: game.attributes?.name,
      slug: game.attributes?.slug,
      developer: game.attributes?.develops.data.map(
        (item) => item.attributes?.name
      ),
      img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
      price: game.attributes?.price
    }))
  )
}

export const highlightMapper = (
  highlightProp: QueryHome_section_freeGames | null | undefined
) => {
  return (
    highlightProp && {
      title: highlightProp.highlight?.title || 'Error',
      subtitle: highlightProp.highlight?.subtitle || 'Error',
      backgroundImage:
        `http://localhost:1337${highlightProp.highlight?.background?.data?.attributes?.url}` ||
        '/img/red-dead-img.jpg',
      floatImage:
        `http://localhost:1337${highlightProp.highlight?.floatImage?.data?.attributes?.url}` ||
        null,
      buttonLabel: highlightProp.highlight?.buttonLabel || 'Error',
      buttonLink: highlightProp.highlight?.buttonLink || null,
      alignment: highlightProp.highlight?.alignment || 'right'
    }
  )
}
