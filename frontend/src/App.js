import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './views/home/Home';
import Services from './views/services/Services';
import ContactUs from './views/contactUs/ContactUs';
import AboutUs from './views/aboutUs/AboutUs'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='container'>
       <Router>
        <Navbar/>
        <div className='container-content'>
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/Services' element={<Services/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}>
          </Route>
        </Routes>
        </div>
       </Router>
       <Footer/>
    </div>
  );
}

export default App;
