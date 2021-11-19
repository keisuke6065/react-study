import {useRecoilValue} from 'recoil'
import {filteredTodoListState} from './hooks'
import {TodoListStats} from './components/TodoListStats'
import {TodoListFilters} from './components/TodoListFilters'
import {TodoItem} from './components/TodoItem'
import {TodoItemCreator} from './components/TodoItemCreator'
import {Heading, HeadingColorType} from '../../components/Heading'

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <>
      <Heading text={'todo app'} size={'maximum'} color={HeadingColorType.TextDefault}/>
      <TodoListStats/>
      <TodoListFilters/>
      <TodoItemCreator/>
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} id={todoItem.id} item={todoItem}/>
      ))}
    </>
  )
}

