import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import {Home} from './components/Home';
import { Signin } from './components/Signin';
import { Signup } from './components/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllCategory, isUserLoggedIn } from './actions';
import { useDispatch } from 'react-redux';
import { Products } from './components/Products';
import { Orders } from './components/Orders';
import { Category } from './components/Categories';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if(!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    dispatch(getAllCategory())
  }, []);
  const auth = useSelector(state => state.auth);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <PrivateRoute>
              <Home/>
            </PrivateRoute>
          } />
          <Route path='/products' element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          } />
          <Route path='/orders' element={
            <PrivateRoute>
              <Orders/>
            </PrivateRoute>
          } />
          <Route path='/category' element={
            <PrivateRoute>
              <Category/>
            </PrivateRoute>
          } />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
