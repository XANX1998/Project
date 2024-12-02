import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import OurFood from './components/OurFood';
import AboutUs from './components/AboutUs';
import SignIn from './components/SignIn';

function App() {
   return (
    <>
      <BrowserRouter> 
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/aboutus' element={<AboutUs/>} />
          <Route path='/ourfood' element={<OurFood/>} />
          <Route path='/signin' element={<SignIn/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
