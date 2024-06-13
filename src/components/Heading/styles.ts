import styled, { DefaultTheme, css } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProp, LineColors } from '.'

const wrapperModifiers = {
  small: (theme: DefaultTheme) => `
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem
    }
  `,

  medium: (theme: DefaultTheme) => `
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.xxlarge};
    `}
  `,

  lineLeft: (theme: DefaultTheme, lineColor: LineColors) => `
       padding-left: ${theme.spacings.xxsmall};
       border-left: 0.7rem solid ${theme.colors[lineColor]};
    `,

  lineBottom: (theme: DefaultTheme, lineColor: LineColors) => `
       position: relative;
       margin-bottom: ${theme.spacings.medium};

       &::after {
        position: absolute;
        left: 0;
        bottom: -1rem;
        content: '';
        width: 5rem;
        border-bottom: 0.5rem solid ${theme.colors[lineColor]};
       }
    `
}

export const Wrapper = styled.h2<HeadingProp>`
  ${({ theme, color, lineLeft, lineBottom, lineColor, size }) => css`
    color: ${theme.colors[color!]};

    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor)};
    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor)};
    ${!!size && wrapperModifiers[size](theme)};
  `}
`
