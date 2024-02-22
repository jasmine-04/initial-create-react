
import './App.css'
import {Routes,Route} from 'react-router-dom';
import About from './pages/Aboutpages';
import Home from './pages/Homepages';
import Service from './pages/Servicepage';

function App() {

  return (
    <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/service' element={<Service/>}/>



    </Routes>

  );
}

export default App
