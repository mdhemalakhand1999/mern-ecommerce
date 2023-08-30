import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from './components/Home';
import { Signin } from './components/Signin';
import { Signup } from './components/Signup';

function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/signin' Component={Signin} />
            <Route path='/signup' Component={Signup} />
          </Routes>
       </Router>
    </div>
  );
}

export default App;
