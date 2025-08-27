import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit"
import './App.css'
import { useDispatch, useSelector } from "react-redux"

const counterSlice = createSlice({
  name: 'counter',
  initialState: 5,
  reducers: {
    increment(state, action) { return state + 1 },
    decrement(state, action) { return state - 1 },
  }
})

const slowIncrementThunk = createAsyncThunk(
  'counter/slowIncrement',
  (value,{dispatch}) => {
    setTimeout(() => {
      dispatch(counterSlice.actions.increment())
    }, 2000)
  }
)

// 저장소 만들기
export const store = configureStore({  
  reducer: {
    counter: counterSlice.reducer
  }
})

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <>
      <div>Counter : {counter}</div>
      <button onClick = {() => {
        dispatch(slowIncrementThunk())
      }}>+</button>
      <button onClick={() => {
        dispatch(counterSlice.actions.decrement())
      }}>-</button>
    </>
  )
}

export default App
