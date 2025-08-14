import { useState, useRef } from 'react'
import './App.css'

function App() {


  return (
    <>
      <ControlledInput />
      <br />
      <UseRefInput />
    </>
  )
}

export default App

const UseRefInput = () => {
  const inputRef = useRef(null);
  const getInputValue = () => {
    console.log(inputRef.current.value);
  }

  const focusInput = () => {
    inputRef.current.focus();
  }
  return (
    <>
      <input ref={inputRef} />
      <button onClick={getInputValue}>input 값 가져오기</button>
      <button onClick={focusInput}>focus!!</button>
    </>
  );
}


const ControlledInput = () => {
  const [inputValue, setInputValue] = useState('')
  console.log("ControlledInput")
  return (<input
    value={inputValue}
    onChange={(event) => setInputValue(event.target.value)}
  />
  )
}