import { Component, useState } from 'react';
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([
    {id: 0, content: "밥 먹기"},
    {id: 1, content: "코딩 공부하기"},
  ]);

  return (
    <>
    <ul>
      {todoList.map((todo) => (
        <li>{todo.content}</li>
      ))}
    {/* <li>{todolist[0].content}</li>
    <li>{todolist[1].content}</li> */}
    </ul>
    </>
  );
}

export default App;