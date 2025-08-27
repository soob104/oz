import { useState } from 'react'

import './App.css'
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { memo } from 'react';

function App() {
  const [number, setNumber] = useState(0)
  const [rerender, setRerender] = useState(false);

  const plus1 = useCallback((number) => {
    console.log('plus1 실행 됨');
    return number + 1;
  }, []);

  const numberPlus1 = useMemo(() => {
    return plus1(number);
  }, [rerender]);

  useEffect(() => {
    console.log('plus1 생성됨')
  }, [plus1]);
  return (
    <>
      <NumberDisplay number={number} />
      <div>numberPlus1 : {numberPlus1} </div>
      <button onClick={() => { setNumber(number + 1) }}>number + 1</button>
      <button onClick={() => { setRerender(!rerender) }}>Rerender</button>
    </>
  )
}

const NumberDisplay = memo(({ number }) => {
  console.log('Diaplay 렌더링');
  return <div>number : {number}</div>;
});

export default App
