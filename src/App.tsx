import React from 'react';
import {Direcciones} from "./context/useGlobalStore"

function App() {


  const micompañero: Direcciones ={
    dir1: "casa",
    dir2: 34
  }

  return (
    <div className="App">
      <h1>Estamos melos</h1>
    </div>
  );
}

export default App;
