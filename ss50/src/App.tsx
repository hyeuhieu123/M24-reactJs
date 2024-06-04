import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Login from './components/login/Login'
import Register from './components/register/Register'
import NotFound from './components/notfound/NotFound'
import HomePage from './components/HomePage'
import Product from './components/product/Product'
import Detail from './components/detail/Detail'
import Header from './components/header/Header'
import BT8 from './components/BT8/BT8'
import Admin from './components/admin/Admin'
import Account from './components/account/Account'
import CustomLink from './components/CustomLink/CustomLink'
import ListUser from './components/listUser/ListUser'
import UserDetail from './components/UserDetail/UserDetail'


export default function App() {
  return (
    <div>App <br />
      <Routes>
        {/* B6
        <Route path='' element={<Home></Home>}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Route> */}
        {/* B7
        <Route path='' element={<Header></Header>}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path='/product' element={<Product></Product>}></Route>
          <Route path='/detail' element={<Detail></Detail>}></Route>
        </Route> */}
        {/* B8
        <Route path='' element={<BT8></BT8>}>
          <Route path='/admin' element={<Admin></Admin>}></Route>
          <Route path='/account' element={<Account></Account>}></Route>
          <Route path='/product' element={<Product></Product>}></Route>
        </Route> */}
        {/* B9
        <Route path='' element={<CustomLink></CustomLink>}>
          <Route path="/home-page" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Route> */}
        B10
        <Route path='' element={<ListUser></ListUser>}></Route>
        <Route path='/user/:id' element={<UserDetail></UserDetail>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  )
}
