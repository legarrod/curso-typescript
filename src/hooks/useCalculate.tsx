import React from 'react';

const useCalculate = () => {
  const fnSuma = (n1: number, n2: number) => {
    const result: number = n1 + n2;
    return result;
  };
  const fnMultiplicar = (n1: number, n2: number) => {
    const result: number = n1 * n2;
    return result;
  };
  const fnSumandoTotal = (n1: number, n2: number, n3: number) => {
    const resultMultiplciar = fnMultiplicar(n1, n2)
    const resultFinal: number = fnSuma(resultMultiplciar, n3);
    return resultFinal;
  };
  return {
    fnSuma,
    fnMultiplicar,
    fnSumandoTotal
  };
};

export default useCalculate;
