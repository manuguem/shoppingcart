import './App.css';
import Navbar from './components/Navbar';
// import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import Container from '@mui/material/Container';
import { BrowserRouter, Switch, Routes, Route } from 'react-router-dom';
import Grid from '@mui/material/Grid';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar />
        <Container>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Hola User"/>}/>
        </Routes> 
        </Container>
    </div>
    </BrowserRouter>
  );
}

export default App;