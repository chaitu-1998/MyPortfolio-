
import './Components/Style/App.css';
import Header from './Components/Pages/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './Components/Pages/resume';
import Footer from './Components/Pages/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/Resume' element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
