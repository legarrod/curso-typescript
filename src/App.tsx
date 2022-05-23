import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ModuleHome, ModuleContact} from "pages"
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
        path="/contact"
        element={<LayoutCustom><ModuleContact/></LayoutCustom>}
      />
    </Routes>
    </Router>
  
  );
}

export default App;
