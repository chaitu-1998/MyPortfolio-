
import './Components/Style/App.css';
import Header from './Components/Pages/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Components/Pages/Main';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
      </Routes> 
    </Router>
  );
}

export default App;
