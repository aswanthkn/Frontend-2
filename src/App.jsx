import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Admin from './admin/Admin';
import Hostal from './pages/Hostal';
import Signinadmin from './admin/Signinadmin'
import Signupadmin from './admin/Signupadmin';
import Addbook from './admin/Addbook';
import Searchuse from './pages/Searchuse';
import Orderdet from './admin/Orderdet';
import FavoriteBooks from './pages/FavoriteBooks';
import Userinfo from './pages/Userinfo';
import Search from './admin/Search';
import Form from './pages/Form';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Hostal/>}/>     

        <Route path="/signin" element={<Signin/>}/>     
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signinadmin" element={<Signinadmin/>}/>     
        <Route path="/signupadmin" element={<Signupadmin/>}/>     
        <Route path="/home" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/> 
        <Route path="/addbook" element={<Addbook/>}/> 
        <Route path="/search" element={<Search/>}/> 
        <Route path="/orderdet" element={<Orderdet/>}/> 
        <Route path="/sea" element={<Searchuse/>}/> 
        <Route path="/fav" element={<FavoriteBooks/>}/> 
        <Route path="/info" element={<Userinfo/>}/> 
        <Route path="/form" element={<Form/>}/> 

         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
