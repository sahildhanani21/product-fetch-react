import './App.css'
import Footer from './Comman/Footer'
import Header from './Comman/Header'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import About from './Pages/About'
import Shopsingle from './Pages/Shopsingle'
import ShopBycategory from './Pages/ShopBycategory'
import SearchQ from './Pages/SearchQ'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {


  return (
    <>
     
    <BrowserRouter>
     <Header />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Shop' element={<Shop />}/>
      <Route path='/Shopsingle/:id' element={<Shopsingle />}/>
      <Route path='/Contact' element={<Contact />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/ShopBycategory/:id' element={<ShopBycategory />} />
      <Route path='/SearchQ' element={<SearchQ />} />
     </Routes>
     <Footer />
     
    </BrowserRouter>    
    
    </>
  )
}

export default App
