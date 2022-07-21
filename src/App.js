import './App.css';
import NavBar from './components/navigation/navBar';
import Users from './components/users';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, Routes } from 'react-router';


function App() {
  return (
    <div className="app">
      <NavBar />
    <Routes>
        <Route path='/user' element={<Users /> } />
    </Routes>
    </div>
  );
}

export default App;
