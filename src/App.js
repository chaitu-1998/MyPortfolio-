
import './Components/Style/App.css';
import Header from './Components/Pages/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Components/Pages/Main';
import Footer from './Components/Pages/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
      </Routes> 
      <Footer />
    </Router>
  );
}

export default App;
