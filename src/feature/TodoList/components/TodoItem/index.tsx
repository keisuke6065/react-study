import {FC} from 'react'
import {todoType, useTodoList} from '../../hooks'
import styled from '@emotion/styled'
import {Button} from '../../../../components/Button'

type PropsType = {
  id: number
  item: todoType
}
const StyledTextInput = styled.input`
  box-sizing: border-box;
  width: 80%;
  border-radius: 4px;
  border: 1px solid #282c34;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`
const StyledCheckboxInput = styled.input`
  box-sizing: border-box;
  width: 10%;
  border-radius: 4px;
  border: 1px solid #282c34;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`

export const TodoItem: FC<PropsType> = ({id, item}) => {
  const {editItemText, toggleItemCompletion, deleteItem} = useTodoList()

  return (
    <div>
      <StyledTextInput type="text" value={item.text} onChange={(e) => editItemText(id, e.target.value)}/>
      <StyledCheckboxInput
        type="checkbox"
        checked={item.isComplete}
        onChange={() => toggleItemCompletion(item.id)}
      />
      <Button text={'x'} color={'secondary'} size={'small'} onClick={() => deleteItem(item.id)}/>
    </div>
  )
}