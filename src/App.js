import React from "react";
import Products from "./components/Products";
import './App.css'
import Welcome from "./components/Welcome";
import { Routes,Route } from "react-router";
import DetailProduct from "./components/DetailProduct";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <><Welcome />  <Products />  </>} />
        <Route path="/:id" element={<DetailProduct />}/>
        <Route path="/add-product" element={<AddProduct />}/>
        <Route path="/update-product/:id" element={<UpdateProduct />}/>

      </Routes>
    </div>
  );
}

export default App;
