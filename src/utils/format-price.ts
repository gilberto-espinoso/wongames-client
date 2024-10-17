export default function formatPrice(price: number | bigint): string {
  if (price === 0) return 'Grátis'

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
