import {FC} from 'react'
import styled from '@emotion/styled'
import {css} from '@emotion/react/macro'

export type Props = {
  text: string
  onClick: () => unknown
  size: Size
  // add color props
}
type Size = 'small' | 'medium' | 'large'
// type Color = 'primary' | 'secondary'

const selectSize = (size: Size) => {
  const small = css`
    font-size: 12px;
    padding: 10px 16px;
  `
  const medium = css`
    font-size: 14px;
    padding: 11px 20px;
  `
  const large = css`
    font-size: 16px;
    padding: 12px 24px;
  `
  switch (size) {
    case 'small':
      return small
    case 'medium':
      return medium
    case 'large':
      return large
    default:
      return small
  }
}

const StyledButton = styled.button<{size: Size}>`
  border-radius: 3em;
  white-space: nowrap;
  background-color: #d9d9d9;
  font-weight: 700;
  line-height: 1;
  color: #333;
  ${({size}) => selectSize(size)}
//  add select color
`

export const Button: FC<Props> = (props) => (
  <StyledButton
    onClick={props.onClick}
    size={props.size}
  >
    {props.text}
  </StyledButton>)