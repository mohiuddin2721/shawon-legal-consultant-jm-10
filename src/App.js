import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Notfound from './components/shared/Notfound/Notfound';
import Footer from './components/shared/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
