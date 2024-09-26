import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Hilux1} from './components/Hilux1';
import {Hilux2} from './components/Hilux2';
import {Hilux3} from './components/Hilux3';
import {Hilux4} from './components/Hilux4';
import {Hilux5} from './components/Hilux5';
import {Hilux6} from './components/Hilux6';
import { Navigation } from './components/Navigation';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <div>
        <h1 className='text-center my-3'>Gallery Project</h1>
      </div>
        <div className='container d-flex justify-content-center'> 
          <Routes>
            <Route path='/hilux1' element={<Hilux1 className='main-img-container' />} />
            <Route path='/hilux2' element={<Hilux2 className='main-img-container' />} />
            <Route path='/hilux3' element={<Hilux3 className='main-img-container' />} />
            <Route path='/hilux4' element={<Hilux4 className='main-img-container' />} />
            <Route path='/hilux5' element={<Hilux5 className='main-img-container' />} />
            <Route path='/hilux6' element={<Hilux6 className='main-img-container' />} />
          </Routes>
        </div>
        <div className='container'>
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
