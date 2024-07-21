import Game, { GameTemplateProps } from '../../templates/Game'

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
        'https://images.gog-statics.com/031b5010e665b8794be92683cfd3e03fa8d0cf9aa4bb2755055f0e4fb3381c8f.jpg'
    }
  }
}
