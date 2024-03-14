
import './Components/Style/App.css';
import Header from './Components/Pages/MainPages/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Components/Pages/MainPages/Main';
import Footer from './Components/Pages/MainPages/Footer';
import MainSkills from './Components/Pages/MainPages/MainSkills';
import Contact from './Components/Pages/MainPages/contact';
import Projects from './Components/Pages/MainPages/Projects';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/MainSkills' element={< MainSkills />}/>
        <Route path='/Contact' element={< Contact />}/>
        <Route path='/Projects' element={<Projects />}/>
      </Routes> 
      <Footer />
    </Router>
  );
}

export default App;
