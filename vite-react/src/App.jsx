import { Component, useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0)


  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  }
  return (
    <>
      <Count counter={counter} />
      <PlusButton
        setCounter={setCounter}
        incrementCounter={incrementCounter} />

      <MinusButton
        setCounter={setCounter}
        decrementCounter={decrementCounter} />

      <CounterInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        setCounter={setCounter} />
    </>
  );
}

function CounterInput({ inputValue, setInputValue,setCounter }) {
  return (
    <>
      <input type="number" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      <button onClick={() => setCounter(inputValue)}>입력</button>
    </>
  );
}


function PlusButton({ setCounter }) {
  return (
    <button
      onClick={() => {
        setCounter((prev) => {
          return prev + 1;
        });
      }}
    >
      +
    </button>
  );
}

function MinusButton({ setCounter }) {
  return (<button
    onClick={() => {
      setCounter((prev) => {
        return prev - 1;
      })
    }}
  >
    -
  </button>
  );
}



function Count({ counter }) {
  return (
    <div>counter : {counter}</div>
  )
}



// class App extends Component {
//   state = { counter: 1 };
//   incrementCounter = () => {
//     this.setState({counter: this.state.counter + 1})
//   }

//   decrementCounter = () => {
//     this.setState({counter: this.state.counter - 1})
//   }

//   render() {
//     return (
//       <>
//       <Count counter={this.state.counter}/>
//       <PlusButton incrementCounter = {this.incrementCounter}/>
//       <MinusButton decrementCounter = {this.decrementCounter} />

//         {/* <div>counter: {this.state.counter}</div> */}
//         {/* <button onClick={() => this.setState({
//           counter: this.state.counter + 1
//         }
//         )}>+
//         </button>
//         <button onClick={() => this.setState({
//           counter: this.state.counter - 1
//         }
//         )}>-
//         </button> */}
//       </>
//     );}}

// class PlusButton extends Component{
//   render() {
//     return ( <button onClick={this.props.incrementCounter}
//     >
//       +
//         </button>)
//   }
// }

// class MinusButton extends Component{
//   render() {
//     return( <button onClick={this.props.decrementCounter}
//     >
//       -
//         </button>)
//   }
// }
// class Count extends Component{
//   constructor(props){
//     super(props);
//   }
//   render() {
//     return <div>counter: {this.props.counter}</div>;
//   }
// }


export default App;