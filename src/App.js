import './App.css';
import Navbar from './components/Navbar';
// import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <ItemListContainer/>
    </div>
  );
}

export default App;
