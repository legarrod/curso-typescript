import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Home from "modules/ModuleHome/Home"
import useCalculate from "hooks/useCalculate"

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/apiRest/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders learn react link', () => {
   const { fnSuma, fnMultiplicar } = useCalculate()
   expect(fnSuma(2, 3)).toEqual(5)
   expect(fnMultiplicar(2, 3)).toEqual(6)
});
  