import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './Navbar';
import BrowseEvent from './BrowseEvent';
import HostEvents from './HostEvents';
import Register from './Register';
import Login from './Login';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<BrowseEvent />}/>
      <Route path='/Register' element={<Register />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/HostEvents' element={<HostEvents />} />
    </Routes>        
    </>
  );
}

export default App;
