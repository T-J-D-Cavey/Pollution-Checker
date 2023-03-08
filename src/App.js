import { Routes, Route } from 'react-router-dom';

import {ButtonComponent} from './components/ButtonComponent';
import {ResultsComponent} from './components/ResultsCompontent';
import {PageNotFound} from './components/PageNotFound';
import './App.css';

function App() {
  return (
    <div className='appContainer'>
      <Routes>
        <Route path='/' element={<ButtonComponent />}/>
        <Route path='results' element={<ResultsComponent />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </div>
  );
}

export default App;