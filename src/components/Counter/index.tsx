import {Button} from '../Button'
import {useCounter} from '../../hooks/useCounter'
import {Heading, HeadingColorType} from '../Heading'

export const Counter = () => {
  const {count,countUp,countDown,cleanUp,text} = useCounter()
  return (<>
    <Heading size={'maximum'} color={HeadingColorType.TextDefault} text={'counter app'}/>
    <Heading size={'maximum'} color={HeadingColorType.TextDefault} text={text}/>
    <Heading size={'large'} color={HeadingColorType.TextSub} text={`count: ${count}`}/>
    <Button onClick={countUp} text={'up'} size={'large'} color={'primary'}/>
    <Button onClick={countDown} text={'down'} size={'medium'} color={'secondary'}/>
    <Button onClick={cleanUp} text={'clean'} size={'small'} color={'secondary'}/>
  </>)
}