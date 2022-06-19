import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import AddProduct from './components/AddProduct'
import UpdateProduct from './components/UpdateProduct'
import Profile from './components/Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import ProductList from './components/ProductList';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        
        <Route element={<PrivateComponent />}>
        <Route path="/" element={<ProductList />} /> 
        <Route path="/add" element={<AddProduct />} /> 
        <Route path="/update/:id" element={<UpdateProduct />} /> 
        <Route path="/profile" element={<Profile />} /> 
        </Route>
        <Route path="/register" element={<SignUp />} /> 
        <Route path="/login" element={<Login />} /> 
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
