import {FC} from 'react'
// import {ClickProps} from '../../../types/props'

export type Props =  {
  text: string
  onClick: () => unknown
}
// export type Props = Partial<ClickProps> & {
//   text: string
// }

export const Button: FC<Props> = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>)
// export const Button: FC<Props> = ({text,onClick}) => (
//   <button onClick={onClick}>
//     {text}
//   </button>)
// export const Button: FC<Props> = ({children,onClick}) => (
//   <button onClick={onClick}>
//     {children}
//   </button>)