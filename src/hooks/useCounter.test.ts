import {RenderResult, act, renderHook} from '@testing-library/react-hooks'
import {useCounter, useCounterType} from './useCounter'


describe('useCounter', () => {
  let result: RenderResult<useCounterType>
  beforeEach(() => {
    result = renderHook(() => useCounter()).result
  })

  test('default count 0', () => {
    // count get variable = result.current.count
  })
  test('count up', () => {
    act(() => {
      result.current.countUp()
    })
  })
  test('count down', () => {
    act(() => {
      result.current.countDown()
    })
  })
  test('count clean up', () => {
    act(() => {
      result.current.countUp()
    })
    act(() => {
      result.current.cleanUp()
    })
  })
})