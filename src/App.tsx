import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ModuleHome, ModuleRenderProps, ModuleRick, ModuleTodo} from "pages"
import LayoutCustom from "components/Layout/Layout"

const App: React.FC =()=> {

  return (
    <Router>
        <Routes>
      <Route
        path="/"
        element={<LayoutCustom><ModuleHome/></LayoutCustom>}
      />
      <Route
        path="/rick"
        element={<LayoutCustom><ModuleRick/></LayoutCustom>}
      />
       <Route
        path="/render"
        element={<LayoutCustom><ModuleRenderProps/></LayoutCustom>}
      />
       <Route
        path="/todo"
        element={<LayoutCustom><ModuleTodo/></LayoutCustom>}
      />
    </Routes>
    </Router>
  
  );
}

export default App;
