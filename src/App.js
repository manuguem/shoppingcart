import './App.css';
import Navbar from './components/Navbar';
// import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Hola User"/>}/>
          <Route path="item/:id" element={<ItemDetailContainer />}/>
          <Route path="category/:id" element={<ItemListContainer />}/>
        </Routes>
    </div>
  );
}

export default App;