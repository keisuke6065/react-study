import {FC} from 'react'
import {ClickProps} from '../../../types/props'
import styled from '@emotion/styled'
import {css} from '@emotion/react'


type Size = 'maximum' | 'large' | 'middle' | 'small' | 'minimum'

export enum HeadingColorType {
  TextDefault = '#474A5E',
  TextSub = '#808d96',
}

export type Props = Partial<ClickProps> & {
  text: string
  size: Size
  color: HeadingColorType
}

const StyledHeading1 = styled.h1<{ headingColorType: HeadingColorType }>(css`
  size: 32px;
  font-size: 32px;
`, ({headingColorType}) => defaultStyled(headingColorType))
const StyledHeading2 = styled.h2<{ headingColorType: HeadingColorType }>(css`
  size: 24px;
  font-size: 24px;
`, ({headingColorType}) => defaultStyled(headingColorType))
const StyledHeading3 = styled.h3<{ headingColorType: HeadingColorType }>(css`
  size: 18px;
  font-size: 18px;
`, ({headingColorType}) => defaultStyled(headingColorType))
const StyledHeading4 = styled.h4<{ headingColorType: HeadingColorType }>(css`
  size: 14px;
  font-size: 14px;
`, ({headingColorType}) => defaultStyled(headingColorType))
const StyledHeading5 = styled.h5<{ headingColorType: HeadingColorType }>(css`
  size: 12px;
  font-size: 12px;
`, ({headingColorType}) => defaultStyled(headingColorType))

const defaultStyled = (headingColorType: HeadingColorType) => css`
  margin: 0;
  padding: 0;
  color: ${headingColorType};
`

export const Heading: FC<Props> = ({text, size, color = HeadingColorType.TextDefault}) => {
  switch (size) {
    case 'maximum':
      return (<StyledHeading1 headingColorType={color}>{text}</StyledHeading1>)
    case 'large':
      return (<StyledHeading2 headingColorType={color}>{text}</StyledHeading2>)
    case 'middle':
      return (<StyledHeading3 headingColorType={color}>{text}</StyledHeading3>)
    case 'small':
      return (<StyledHeading4 headingColorType={color}>{text}</StyledHeading4>)
    case 'minimum':
      return (<StyledHeading5 headingColorType={color}>{text}</StyledHeading5>)
    default:
      return (<StyledHeading1 headingColorType={color}>{text}</StyledHeading1>)
  }
}