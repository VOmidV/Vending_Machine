import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Home from './components/home';
import Custard from './components/custard';
import Soda from './components/soda';
import Gum from './components/gum';


function App() {
  return (
    <main className='App'>
      <BrowserRouter>
      
      <Routes>
      <Route exact path='/' element={<Home/>}>
      </Route>
      <Route exact path='/custard' element={<Custard/>}>
      </Route>
      <Route exact path='/soda' element={<Soda/>}>
      </Route>
      <Route exact path='/gum' element={<Gum/>}>
      </Route>
      
      </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
