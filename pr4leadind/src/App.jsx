import { useState } from 'react'
import Headchild from './component/Headchild';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Scrolltop from "./component/Scrolltop";
import Home from './pages/Home';
import Findjobs from './pages/Findjobs';
import Courseit from './pages/Courseit';
import Digitalproducts from './pages/Digitalproducts';
import Influencers from './pages/Influencers';
import Reflaptop from './pages/Reflaptop';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <div className='maincontainer'>
         <Headchild />
    
 <button class="help-btn"><i class="fa-brands fa-whatsapp"></i></button>


<Scrolltop />




 <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Jobs" element={<Findjobs />} />
        <Route path="/Course" element={<Courseit />} />
        <Route path="/Dpr" element={<Digitalproducts />} />
        <Route path="/Inf" element={<Influencers/>} />
         <Route path="/Reflap" element={<Reflaptop/>} />
      </Routes>
    

<div className='footer-common'>
 <div className='footer-commonx1-child'>
<div className='footer-commonx1x1-child'><h3>Quick Links</h3><p><Link className='nav-link-footer' to="/">Home</Link></p><p><Link className='nav-link-footer' to="/Jobs">Find Jobs</Link></p><p><Link className='nav-link-footer' to="/Course">CourseIt</Link></p><p><Link className='nav-link-footer' to="/Dpr">Digital Products</Link></p><p><Link className='nav-link-footer' to="/Inf">Influencers</Link></p></div>
<div className='footer-commonx1x1-child'><h3>Supports</h3><p>Privacy Policy</p><p>Terms of Service</p><p>Refund Policy</p><p>FAQ</p><p>Contact Us</p></div>
<div className='footer-commonx1x1-child'>
  <span className='fot-btn'><i class="fa-brands fa-whatsapp"></i></span>
  <span className='fot-btn'><i class="fa-brands fa-instagram"></i></span>
  <span className='fot-btn'><i class="fa-brands fa-twitter"></i></span>
   <span className='fot-btn'><i class="fa-solid fa-envelope"></i></span>
   
</div>

 </div>
<p>© 2025 Leads India . All rights reserved.</p>
</div>
   



    </div>
    </Router>
     </>
  )
}

export default App
