import {RenderResult, act, renderHook} from '@testing-library/react-hooks'
import {useCounter, useCounterType} from './useCounter'


describe('useCounter', () => {
  let result: RenderResult<useCounterType>
  beforeEach(() => {
    result = renderHook(() => useCounter()).result
  })

  test('default count', () => {
    expect(result.current.count).toBe(0)
  })
  test('count up', () => {
    expect(result.current.count).toBe(0)
    act(() => {
      result.current.countUp()
    })
    expect(result.current.count).toBe(1)
  })
  test('count down', () => {
    expect(result.current.count).toBe(0)
    act(() => {
      result.current.countDown()
    })
    expect(result.current.count).toBe(-1)
  })
  test('count clean up', () => {
    expect(result.current.count).toBe(0)
    act(() => {
      result.current.countUp()
    })
    expect(result.current.count).toBe(1)
    act(() => {
      result.current.cleanUp()
    })
    expect(result.current.count).toBe(0)
  })
})