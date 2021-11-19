import {useState} from 'react'
import {useTodoList} from '../../hooks'
import styled from '@emotion/styled'
import {Button} from '../../../../components/Button'

const StyledTextInput = styled.input`
  box-sizing: border-box;
  width: 80%;
  border-radius: 4px;
  border: 1px solid #282c34;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('')
  const {addTodoItem} = useTodoList()

  const addItem = () => {
    addTodoItem(inputValue)
    setInputValue('')
  }

  const onChange = (x: { target: { value: string } }) => {
    setInputValue(x.target.value)
  }

  return (
    <div>
      <StyledTextInput type="text" value={inputValue} onChange={onChange}/>
      <Button text={'add'} size={'medium'} color={'primary'} onClick={addItem}/>
    </div>
  )
}


