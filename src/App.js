import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Notfound from './components/shared/Notfound/Notfound';
import Footer from './components/shared/Footer/Footer';
import Home from './components/home/Home/Home';
import Services from './components/home/Services/Services';
import CheckOut from './components/home/CheckOut/CheckOut';
import Clientele from './components/home/Clientele/Clientele';
import Blog from './components/home/Blog/Blog';
import Contact from './components/home/Contact/Contact';
import AboutMe from './components/home/AboutMe/AboutMe';
import RequireAuth from './components/loginRegRequireAuth/RequireAuth/RequireAuth';
import Login from './components/loginRegRequireAuth/Login/Login';
import Register from './components/loginRegRequireAuth/Register/Register';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service' element={<Services></Services>}></Route>
        <Route path='/checkOut' element={
        <RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>
        }></Route>
        <Route path='/clientele' element={<Clientele></Clientele>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/aboutMe' element={<AboutMe></AboutMe>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
