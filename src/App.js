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
      <footer><div>See the <a href='https://github.com/T-J-D-Cavey' target='_blank' >creator's Github page here</a></div></footer>
    </div>
  );
}

export default App;