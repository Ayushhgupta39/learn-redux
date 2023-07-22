
import './App.css';

function App() {
  const obj = {
    a: {
      b: 3,
      c: 6,
      d: 9
    }
  };

  const obj2 = {
    ...obj,
    a: {
      ...obj.a,
      b: "Changed"
    }
  }

  const obj3 = {
    ...obj,
    a: {
      b: "Changed"
    }
  }

  console.log("Obj2: ", obj2)
  console.log("Obj3: ", obj3)
  return (
    <div className="App">
     <h1>Learn Redux</h1>

    </div>
  );
}

export default App;
