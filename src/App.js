import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";
import Home from "./pages/home/Home";
import ProductDetail from "./pages/home/ProductDetail";
import CreateProduct from "./pages/home/CreateProduct";
import EditProduct from "./pages/home/EditProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}>

        </Route>
          <Route path="detail/:id" element={<ProductDetail/>}></Route>
          <Route path="/create" element={<CreateProduct/>}></Route>
          <Route path="edit/:id"  element={<EditProduct/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
