import {Counter} from './components/Counter'
import {RecoilRoot} from 'recoil'
import {TodoList} from './feature/TodoList'


export const App = () => (
  <RecoilRoot>
    <TodoList/>
    <Counter/>
  </RecoilRoot>
)
