import Game, { GameTemplateProps } from '@/templates/Game'

import galleryMock from '@/components/Gallery/mock'

export default function Index(props: GameTemplateProps) {
  return <Game {...props} />
}

// gerar em build time
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'baldur-gate-3' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  return {
    props: {
      cover:
        'https://images.gog-statics.com/031b5010e665b8794be92683cfd3e03fa8d0cf9aa4bb2755055f0e4fb3381c8f.jpg',
      gameInfo: {
        title: 'Baldur Gate 3',
        price: '59.00',
        description:
          'Baldur Gate 3 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality'
      },
      gallery: galleryMock
    }
  }
}
