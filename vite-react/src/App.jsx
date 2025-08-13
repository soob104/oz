import { Component, useState } from 'react';
import './App.css'

function App() {
  const [mood, setMood] = useState("Normal");
  return (
    <>
      <Face3 mood={mood} />
      <div className={mood === "Happy" ? 'Happy' : mood === "Normal" ? "normal" : "sad" }>기분: {mood}</div>
      <div>
        <button onClick={() => setMood("Happy")}>Happy</button>
        <button onClick={() => setMood("Normal")}>Normal</button>
        <button onClick={() => setMood("Sad")}>Sad</button>
      </div>
    </>
  );
}

function Face({ mood }) {
  if (mood === "Happy") {
    return ("😊");
  } else if (mood === "Normal") {
    return ("🙂");
  } else {
    return ("😭");
  }
}

function Face2({ mood }) {
  return (
    <>
      {mood === "Happy" ? (<div>😊</div>)
        : mood === "Normal" ? (<p>🙂</p>)
          : (<span>😭</span>
          )}
    </>
  )
}

function Face3({mood}){
  return(
    <>
    {mood === "Happy" && <div>😊</div>}
    {mood === "Normal" && <p>🙂</p>}
    {mood === "Sad" && <span>😭</span>}
    </>
  )
}
export default App;