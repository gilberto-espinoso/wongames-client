import { screen } from '@testing-library/react'

import Logo from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // Os 3 principais processos de um teste -----
    // renderizar o componente `render` é o método principal
    // selecionar o elemento que queremos testar `screen` é o método principal (queries) -getByLabel...
    // expect - assertion (asserção/comparação/análise) ex: (espero que renderize a logo na cor branca)

    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
