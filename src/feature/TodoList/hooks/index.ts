import {atom, selector, useRecoilState} from 'recoil'
import {getId} from '../utils'

export type todoType = {
  id: number
  text: string
  isComplete: boolean
}

const todoListState = atom<todoType[]>({
  key: 'todoListState',
  default: [],
})

export type todoFilterType = 'All' | 'Completed' | 'Uncompleted'

export const todoListFilterState = atom<todoFilterType>({
  key: 'todoListFilterState',
  default: 'All',
})

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({get}) => {
    const filter = get(todoListFilterState)
    const list = get(todoListState)

    switch (filter) {
      case 'Completed':
        return list.filter((item) => item.isComplete)
      case 'Uncompleted':
        return list.filter((item) => !item.isComplete)
      default:
        return list
    }
  },
})

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({get}) => {
    const todoList = get(todoListState)
    const totalNum = todoList.length
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length
    const totalUncompletedNum = totalNum - totalCompletedNum
    const percentCompleted = totalNum === 0 ? 0 : Math.round(totalCompletedNum / totalNum * 100)

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    }
  },
})


export const useTodoList = () => {
  const [todoList, setTodoListState] = useRecoilState(todoListState)
  const addTodoItem = (value: string) => {
    setTodoListState((oldTodoList) => [
      {
        id: getId(),
        text: value,
        isComplete: false,
      },
      ...oldTodoList,
    ])
  }
  const editItemText = (key: number, value: string) => {
    const todoType = todoList.filter(x => x.id === key)[0]
    const newTodoItem = {
      ...todoType,
      text: value
    }
    setTodoListState(todoList.map(item => item.id === key ? newTodoItem : item))
  }
  const toggleItemCompletion = (key: number) => {
    const todoType = todoList.filter(x => x.id === key)[0]
    const newTodoItem = {
      ...todoType,
      isComplete: !todoType.isComplete
    }
    setTodoListState(todoList.map(item => item.id === key ? newTodoItem : item))
  }
  const deleteItem = (key: number) => {
    setTodoListState(todoList.filter(item => item.id !== key))
  }

  return {
    todoList,
    addTodoItem,
    editItemText,
    toggleItemCompletion,
    deleteItem
  }
}
