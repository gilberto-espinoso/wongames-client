import { QueryHome_banners } from '@/graphql/generated/BannerFragment'
import { QueryGames_games } from '@/graphql/generated/QueryGames'
import { QueryHome_games } from '@/graphql/generated/QueryHome'

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
