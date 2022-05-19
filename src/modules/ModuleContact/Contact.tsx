import React from 'react'
import ButtonComponent from "components/ButtonComponent/ButtonComponent"
import InputComponent from "components/InputComponent/InputComponent"
import {useStoreGlobalContact} from "./store/useStoreGlobalContact"
import useCalculate from "hooks/useCalculate"

function Contact() {
const {setNumero1, setNumero2, result, setresult, numero1, numero2, sumando, setSumando, resultTotal, setresultTotal}= useStoreGlobalContact()
const {fnMultiplicar, fnSumandoTotal} = useCalculate()
  const onChangeInput =(e:any, set:any)=>{
    set(parseInt(e.target.value))
  }
  const fnResult = ()=>{
    setresult(fnMultiplicar(numero1, numero2))
    setresultTotal(fnSumandoTotal(numero1, numero2, sumando))
  }
  
  return (
    <div>
      <h1>Multiplicar</h1>
      <ButtonComponent 
      name="Multiplicar"
      fn={()=>fnResult()}
      />
      <InputComponent 
        placeholder="Digite el primer número " 
        fn={(e: any) => onChangeInput(e, setNumero1)}
        label={"Numero 1"}
        type="number"
      />
       <InputComponent 
        placeholder="Digite el segundo número " 
        fn={(e: any) => onChangeInput(e, setNumero2)}
        label={"Numero 2"}
        type="number"
      />
      <InputComponent 
        placeholder="Digite el número a sumar" 
        fn={(e: any) => onChangeInput(e, setSumando)}
        label={"Sumando"}
        type="number"
      />
      <p className='text-xl'>Resultado= {result} mas el sumando queda {resultTotal}</p>
    </div>
  )
}

export default Contact