import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Learn Redux</h1>
      <h3>Counter</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button>Increment</button>
          {count}
        <button>Decrement</button>
      </div>
    </div>
  );
}

export default App;
