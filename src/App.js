import React from "react";
import Products from "./components/Products";
import './App.css'
import Welcome from "./components/Welcome";
import { Routes,Route } from "react-router";
import DetailProduct from "./components/DetailProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <><Welcome /><Products />  </>} />
        <Route path="/:id" element={<DetailProduct />}/>
      </Routes>
    </div>
  );
}

export default App;
