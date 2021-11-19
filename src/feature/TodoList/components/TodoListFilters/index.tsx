import {useRecoilState} from 'recoil'
import {todoFilterType, todoListFilterState} from '../../hooks'

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const updateFilter = (x: { target: { value: string } }) => {
    setFilter(x.target.value as todoFilterType)
  }

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
    </>
  )
}