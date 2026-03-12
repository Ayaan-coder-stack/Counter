import React, { useState } from "react";
import "./App.css"

const App = () => {
  const [count, currentCount] = useState(0);
  const incrementValue = () => {
    if (count < 20) {
      currentCount(count + 1)
    }
  }
  const decrementValue = () => {
    if (count > 0) {
      currentCount(count - 1)
    }
  }
  const resetValue = () => {
    currentCount(0)
  }
  return (
    <div className="main">
      <h1>Ayaan's Counter</h1>
      <h2> {count} </h2>
      <div className="button-section">
        <button className="plus" onClick={incrementValue}>+</button>
        <button className="reset" onClick={resetValue}>Reset</button>
        <button className="minus" onClick={decrementValue}>&minus;</button>
      </div>
    </div>
  )
}

export default App;