import {useRecoilValue} from 'recoil'
import {todoListStatsState} from '../../hooks'
import styled from '@emotion/styled'

const StyledUl = styled.ul`
  width: 100%;
  padding: 4% 4%;
`
const StyledLi = styled.li`
  font-size: 18px;
  line-height: 30px;
  text-align: justify;
  letter-spacing: 1px;
`

export const TodoListStats = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState)

  return (
    <StyledUl>
      <StyledLi>Total items: {totalNum}</StyledLi>
      <StyledLi>Items completed: {totalCompletedNum}</StyledLi>
      <StyledLi>Items not completed: {totalUncompletedNum}</StyledLi>
      <StyledLi>Percent completed: {percentCompleted}</StyledLi>
    </StyledUl>
  )
}
