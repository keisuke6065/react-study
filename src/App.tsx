import {useEffect, useState} from 'react'
import {Button} from './components/Button'

export const App = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  const countUp = () => setCount((prevState) => prevState + 1)
  const countDown = () => setCount((prevState) => prevState - 1)
  const cleanUp = () => setCount(() => 0)
  useEffect(() => {
    setText(count % 3 === 0 && count !== 0 ? '3multiple': `click count ${count}`)
  }, [count])

  return (<>
    <h1>{text}</h1>
    <h2>count: {count}</h2>
    <Button onClick={countUp} text={'up'} size={'large'} color={'primary'}/>
    <Button onClick={countDown} text={'down'} size={'medium'} color={'secondary'}/>
    <Button onClick={cleanUp} text={'clean'} size={'small'} color={'secondary'}/>
  </>)
}
