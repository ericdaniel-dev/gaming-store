import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/header'
import Footer from './component/footer'
import Homepage from './page/Homepage'
import FAQ from './page/FAQ'
import Contact from './page/Contact'
import Account from './page/Account'
import Cart from './page/Cart'

function App() {
  return (
    <Router>
      <Header></Header>
      <div id="container" className="flex flex-col border-2 border-black gap-2">
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  )
}
export default App
