import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './screen/Home/Home';
import News from './screen/News/News';
import Cart from './screen/Cart/Cart';
import Profile from './screen/Profile/Profile';
import BottomNavBar from './components/BottomNavBar/BottomNavBar';
import ProductDetail from './screen/ProductDetail/ProductDetail';

function App() {
  return (
    <div>
   <Routes>

    <Route exact path='/' element={<Home/>} />
    <Route exact path='/news' element={<News/>} />
    <Route exact path='/cart' element={<Cart/>} />
    <Route exact path='/cart/:id' element={<Cart/>} />
    <Route exact path='/profile' element={<Profile/>} />
    <Route path='/product/:id' element={<ProductDetail/>} />

   </Routes>
   <BottomNavBar/>

</div>
  );
}

export default App;
