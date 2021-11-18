import {useEffect, useState} from 'react'


export type useCounterType = {
  count: number,
  countUp: () => unknown,
  countDown: () => unknown,
  cleanUp: () => unknown,
  text: string
}

export const useCounter = (): useCounterType => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  const countUp = () => setCount((prevState) => prevState + 1)
  const countDown = () => setCount((prevState) => prevState - 1)
  const cleanUp = () => setCount(() => 0)
  useEffect(() => {
    setText(count % 3 === 0 && count !== 0 ? '3multiple' : `click count ${count}`)
  }, [count])


  return {
    count,
    countUp,
    countDown,
    cleanUp,
    text
  }
}