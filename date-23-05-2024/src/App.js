import { increment , decrement } from './redux/Action';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  return (
   <>
   <h1>Counter App</h1>
   <h1>Coun : {count}</h1>

   <button onClick={()=>{dispatch(increment())}}>+</button>
   <button onClick={()=>{dispatch(decrement())}}>-</button>
   </>
  );
}

export default App;
