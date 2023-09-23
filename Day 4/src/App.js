import { BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
// import Navbar from './components/Navbar';

import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import './assets/css/Login.css';
import './assets/css/Signup.css';
import Home from './components/Home';
import Order from './components/Order';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
        
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        <Route path="/dash" element={<Dashboard/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/sidebar" element={<Sidebar/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;