import './App.css';
import NavBar from './components/navigation/navBar';
import Users from './components/users';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, Routes } from 'react-router';
import LoginForm from './components/loginForm/LoginForm';
import HookForm from './components/hookForm';


function App() {
  return (
    <div className="app">
      <NavBar />
    <Routes>
        <Route path='/' element={<HookForm /> } />
        <Route path='/user' element={<Users /> } />
        <Route path='/form' element={<LoginForm /> } />
    </Routes>
    </div>
  );
}

export default App;
