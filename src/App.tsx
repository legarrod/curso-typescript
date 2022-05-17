import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ModuleHome, ModuleContact} from "pages"
import Layout from "components/Layout/Layout"

function App() {

  return (
    <Router>
        <Routes>
      <Route
        path="/"
        element={<Layout><ModuleHome/></Layout> }
      />
      <Route
        path="/contact"
        element={<Layout><ModuleContact/></Layout>}
      />
    </Routes>
    </Router>
  
  );
}

export default App;
