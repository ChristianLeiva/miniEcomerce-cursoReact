import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../src/components/HeaderApp';
import { Container } from 'react-bootstrap'
import { HeaderApp } from '../src/components/HeaderApp';
import { ListProducts } from './components/ListProducts';


//functional component
const App = () => {
  return (
    <Container>
      <div className="App">
        <HeaderApp />
        <br />
        <ListProducts />
      </div>
    </Container>
  )

}


export default App;
