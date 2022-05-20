import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Rooms from './components/pages/Rooms';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/rooms' exact element={<Rooms />} />
        <Route path='/services' exact element={<Services />} />
        <Route path='/sign-up' exact element={<SignUp />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
