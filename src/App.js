import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './user/page/Homepage/HomePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* user route */}
        <Route>
          <Route path='/' element={<HomePage/>}/>
        </Route>
        {/* admin route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
