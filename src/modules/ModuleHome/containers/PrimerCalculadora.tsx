import React, { Fragment, useState, useEffect } from 'react';
import { Button } from 'antd';
import { Input } from 'antd';
import { useStoreGlobalHome } from '../store/useStoreGlobalHome';
import DinamicButtons from '../components/DinamicButtons/DinamicButtons';

export default function PrimerCalculadora() {
  const {
    userName,
    setUserName,
    setEstatura,
    estatura,
    // hoy,
    showResults,
    setShowResults,
  } = useStoreGlobalHome();
  const [count, setCount] = useState(2);
  const [counttwo, setCounttwo] = useState(0);
  const [countExample, setCountExample] = useState(0);
  const [text, setText] = useState('');
  const [moreInformation, setmoreInformation] = useState({
    nombre: '',
    edad: 0,
  });

  // let miNombre;
  // miNombre = "Casrlos";
  // miNombre = "Luis";
  // console.log(miNombre);

  const reset = () => {
    setCount(2);
    setCounttwo(0);
    setShowResults(false);
  };

  const onChangeInput = (e: any, typeValue: string) => {
    if (typeValue === 'nombre') {
      setUserName(e.target.value);
    }
    if (typeValue === 'edad') {
      setmoreInformation({ nombre: 'Jorge', edad: e.target.value });
    }
    if (typeValue === 'estatura') {
      setEstatura(e.target.value);
    }
  };

  useEffect(() => {
    if (count > 10) {
      setCountExample(count);
    }
  }, [count]);

  //
  return (
    <Fragment>
      <h1 className="text-3xl font-bold underline text-green-800">
        Hello world! {userName}
      </h1>
      {/* <p className="text-3xl">{JSON.stringify(hoy)}</p> */}
      <DinamicButtons
        setText={setText}
        count={count}
        setCount={setCount}
        counttwo={counttwo}
        setCounttwo={setCounttwo}
      />

      {showResults && (
        <Fragment>
          {' '}
          <h1 className="text-purple-800">
            HOLA: {userName} tu edad es {moreInformation.edad} y tu estatura{' '}
            {estatura}
          </h1>
          <h2 className="text-2xl text-blue-700">{text}</h2>
          <h3>El número es: {count}</h3>
          <h3>El número que aumenta en 5: {counttwo}</h3>
          <Button type="primary" className="bg-red-900" onClick={reset}>
            Ocultar
          </Button>
        </Fragment>
      )}

      <Input
        placeholder="Escriba su nombre"
        onChange={(event) => onChangeInput(event, 'nombre')}
      />
      <Input
        placeholder="Escriba su edad"
        onChange={(e) => onChangeInput(e, 'edad')}
      />
      <Input
        placeholder="Escriba su estatura"
        onChange={(e) => onChangeInput(e, 'estatura')}
      />

      <h1>Ejemplo: {countExample}</h1>
    </Fragment>
  );
}
