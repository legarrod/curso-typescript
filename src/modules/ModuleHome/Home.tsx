import React, { Fragment, useState } from 'react';
import { Button } from 'antd';
import { Input } from 'antd';

const Home = () => {
  const [count, setCount] = useState(2);
  const [counttwo, setCounttwo] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [text, setText] = useState("");
  const [moreInformation, setmoreInformation] = useState({nombre: "", edad: 0});

  // let miNombre;
  // miNombre = "Casrlos";
  // miNombre = "Luis";
  // console.log(miNombre);

  const onclickSuma = (set: any, initialValue: number, increment: number) => {
    set(initialValue + increment);
    setShowResults(true);
    setText("FELICITACIONES!")
   
  };

  const reset = () => {
    setCount(2);
    setCounttwo(0);
    setShowResults(false);
  };

  const onChangeInput = (e: any, typeValue: string)=>{
    if (typeValue === "nombre") {
      setmoreInformation({nombre: e.target.value, edad: 0})
    } 
    if (typeValue === "edad") {
      setmoreInformation({nombre: "Jorge", edad: e.target.value})
    } 
  }

  return (
    <Fragment>
      <h1 className="text-3xl font-bold underline text-green-800">
        Hello world!
      </h1>
      <Button
        type="primary"
        className="bg-slate-700"
        onClick={() => onclickSuma(setCount, count, 2)}
      >
        Suma + 2
      </Button>
      <Button
        type="primary"
        className="bg-slate-700"
        onClick={() => onclickSuma(setCounttwo, counttwo, 5)}
      >
        Suma + 5
      </Button>

      {showResults && (
        <Fragment>
          {' '}
          <h1 className='text-purple-800'>HOLA: {moreInformation.nombre} tu edad es {moreInformation.edad}</h1>
          <h2 className='text-2xl text-blue-700'>{text}</h2>
          <h3>El número es: {count}</h3>
          <h3>El número que aumenta en 5: {counttwo}</h3>
          
          <Button type="primary" className="bg-red-900" onClick={reset}>
            Ocultar
          </Button>
        </Fragment>
      )}


<Input placeholder="Escriba su nombre" onChange={(event)=>onChangeInput(event, "nombre")}/>
<Input placeholder="Escriba su edad" onChange={(e)=>onChangeInput(e, "edad")}/>
    </Fragment>
  );
};

export default Home;
