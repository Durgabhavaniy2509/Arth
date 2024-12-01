import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import './index.css';
import OurFirm from './OurFirm/OurFirm.jsx';
import Services from './Services/Services.jsx';
import LogIn from './LogIn/LogIn.jsx';
import Resources from './Resources/Resources.jsx';
import Projects from './Projects/Projects.jsx';
import Contact from './Contact/Contact.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index path='/' element={<Home/>}/>
          <Route path='/OurFirm' element={<OurFirm/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/LogIn' element={<LogIn/>}/>
          <Route path='/Resources' element={<Resources/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Projects' element={<Projects/>}/>
        </Routes>   
      </BrowserRouter>
    </div>
  )
}

export default App
