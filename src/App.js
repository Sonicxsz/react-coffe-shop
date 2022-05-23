
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import FirstPage from './components/firstPage/firstPage';
import SeconPage from './components/secondPage/SeconPage';

function App() {
  return (
    <BrowserRouter>
   <div className='App'>
     <Routes>
       <Route path='' element={<FirstPage/>} />
       <Route path='secondPage' element={<SeconPage/>} />
     </Routes>
   </div>
   </BrowserRouter>
  );
}

export default App;
