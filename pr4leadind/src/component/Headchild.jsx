import React from 'react';
import { Link } from 'react-router-dom';
import pr4img1 from '../assets/images/pr4img1.jpeg';
import micr3grap from '../assets/images/micr3grap.jpg';
import micr4video from '../assets/images/micr4video.jpeg';
import micr5web from '../assets/images/micr5web.jpg';
import micr6digi from '../assets/images/micr6digi.webp';
import micr24dell from '../assets/images/micr24dell.jpg';
import micr25apple from '../assets/images/micr25apple.jfif';
import micr26lenovo from '../assets/images/micr26lenovo.webp';

export default function Headchild() {

const postx2info=[{image:micr6digi,
    hed:"Digital Marketing",quan:'1.5k',
    },{image:micr4video,
    hed:"Video Editings",quan:'2K',
    },
    {image:micr3grap,
    hed:"Graphic Designer",quan:'700',
    },
];

const postReflaptop=[{image:micr24dell,
    hed:"Dell Latitude ",quan:'24,000-26,500',
    },{image:micr25apple,
    hed:"HP EliteBook",quan:'19,000-21,500',
    },
    {image:micr26lenovo,
    hed:"HP ProBook",quan:'20,000-22,500',
    },
];




  return (
     <div class="header">
 <div class="g1headerchild">
      <div class="logo"><img src={pr4img1} className="logo-img" alt=""/></div>
      <div class="navbar">
      <div className='g1navbar-child'><Link className='nav-link' to="/">Home</Link> </div>   
    
      <div className='g1navbar-child'><Link className='nav-link' to="/Reflap">Refurbished Laptop</Link>
      <div className="child-hover-Reflaptop">
      <div className="g1child-hover-Reflaptop"> 
           {postReflaptop.map((pox2,index)=>(  
                        <div  key={index} className="postx1-info-child-home">
                          <div className="postx1-info-childx1-home"><img src={pox2.image} alt=""/></div> 
                          <div className='postx1-info-childx1-home'><strong>{pox2.hed} </strong> </div>
                          <div className='postx1-info-childx1-home'><strong>{pox2.quan} </strong> in deals </div>
                           <div className="postx1-info-childx1-home"><Link className='postx1-info-childx1x1-home' to="/Reflap">50% Discount</Link></div>
                          </div> 
                           ))}
      </div> 

      </div>
      
      </div>

      <div className='g1navbar-child'><Link className='nav-link' to="/Inf">Influencers</Link></div>

      <div className='g1navbar-child'><Link className='nav-link' to="/Jobs">Find Jobs</Link>   
       <div className="child-hover-jobs">
        <div className='g1child-hover-jobs'>
          <div className='g2child-hover-jobs'><p><Link to="/Jobs">Jobs in Jaipur</Link></p><p><Link to="/Jobs">Jobs in kota</Link></p><p><Link to="/Jobs">Jobs in Delhi</Link></p><p><Link to="/Jobs">Jobs in Gurgaon</Link></p></div>
          <div className='g2child-hover-jobs'><p><Link to="/Jobs">Jobs in Surat</Link></p><p><Link to="/Jobs">Jobs in Benglore</Link>  </p><p><Link to="/Jobs">Jobs in Chennai</Link>  </p><p><Link to="/Jobs">Jobs in Pune</Link></p></div>
        </div>
        </div>
      </div>
      <div className='g1navbar-child'><Link className='nav-link' to="/Course">Courses IT</Link>
      <div className="child-hover-courses">
      <div className="g1child-hover-courses"> 
           {postx2info.map((pox2,index)=>(  
                        <div  key={index} className="postx1-info-child-home">
                          <div className="postx1-info-childx1-home"><img src={pox2.image} alt=""/></div> 
                          <div className='postx1-info-childx1-home'><strong>{pox2.hed} Course</strong> </div>
                          <div className='postx1-info-childx1-home'><strong>{pox2.quan}+ </strong>Students already Done </div>
                           <div className="postx1-info-childx1-home"><Link className='postx1-info-childx1x1-home' to="/Course">Buy Now</Link></div>
                          </div> 
                           ))}
      </div> 

      </div>
      </div>
      <div className='g1navbar-child'><Link className='nav-link' to="/Dpr">Digital Products</Link>
       <div className="child-hover-digitalproducts">
 <div className='g1child-hover-jobs'>
          <div className='g2child-hover-jobs'><p><Link to="/Dpr">WB Bulk Sender</Link></p><p><Link to="/Dpr">IG Automation</Link></p><p><Link to="/Dpr">SMS Bulk Sender</Link></p></div>
          <div className='g2child-hover-jobs'><p><Link to="/Dpr">Traffic Tool</Link></p><p><Link to="/Dpr">SEO tool</Link> </p></div>     </div>

       </div>
      </div>

     
      </div>
    
    <div className='head-right-btn'>Help</div>
    </div>

     </div>


  );
}
