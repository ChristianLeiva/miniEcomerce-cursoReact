import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../src/components/HeaderApp';
import {Switch, BrowserRouter, Route, History } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { HeaderApp } from '../src/components/HeaderApp';
import { ListProducts } from './components/ListProducts';
import { ProductDetails } from './components/ProductDetails';
import { ShopingCartDetails } from './components/ShopingCart/ShopingCartDetails';





//functional component
const App = () => {


  return (
    <Container>
      
        <div className="App">
          <HeaderApp />
          <br />
          <BrowserRouter>
            <Route path={"/product/:id"} component = {ProductDetails}/>
            <Route path={"/shoppingCart"} component = {ShopingCartDetails}/>
            <Route path={"/"} exact component= {ListProducts}/>
          </BrowserRouter>
        </div>

    </Container>
  )

}


export default App;
