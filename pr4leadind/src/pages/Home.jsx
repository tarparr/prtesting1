import React from 'react';
import { Link } from 'react-router-dom';
import micr1loan from '../assets/images/micr1loan.jpg';
import micr2refu from '../assets/images/micr2refu.jpg';
import micr3grap from '../assets/images/micr3grap.jpg';
import micr4video from '../assets/images/micr4video.jpeg';
import micr5web from '../assets/images/micr5web.jpg';
import micr6digi from '../assets/images/micr6digi.webp';
import micr7credit from '../assets/images/micr7credit.jpg';
import micr8cibil from '../assets/images/micr8cibil.webp';
import micr1 from '../assets/images/micr1.png';
import micr2 from '../assets/images/micr2.png';
import micr5 from '../assets/images/micr5.png';
import micr9instdown from '../assets/images/micr9instdown.jpg';
import micr10whatsbulk from '../assets/images/micr10whatsbulk.jpg';
import micr11seotrf from '../assets/images/micr11seotrf.png';
import micr12infl from '../assets/images/micr12infl.webp';
import micr13infl from '../assets/images/micr13infl.jpg';
import micr14infl from '../assets/images/micr14infl.webp';

export default function Home() {

const postx1info=[{image:micr1,
    hed:"Data Anaylist",ctc:'3 LPA to 12 LPA',
    },{image:micr2,
    hed:"ReactJS Developer",ctc:'1.80 LPA to 7 LPA',
    },
    {image:micr5,
    hed:"AI Engineer",ctc:'2.5 LPA to 5 LPA',
    },
];


const postx2info=[{image:micr6digi,
    hed:"Digital Marketing",dis:'Upto 50%',
    },{image:micr4video,
    hed:"Video Editings",dis:'Upto 30%',
    },
    {image:micr3grap,
    hed:"Graphic Designer",dis:'Upto 75%',
    },
];

const postx3info=[{image:micr10whatsbulk,
    hed:"WB Bulk Sms",desc:'Send Unlimited 0.10rs',
    },{image:micr11seotrf,
    hed:"Traffic Increase",desc:'10k traffic gain ',
    },
    {image:micr9instdown,
    hed:"IG Automation",desc:'Perfect for Automation',
    },
];


const postx4info=[{image:micr12infl,
    likes:"112.2k",roi:'8.2x ROI',
    },{image:micr13infl,
    likes:"43.4k",roi:'4.2x ROI',
    },{image:micr14infl,
    likes:"78k",roi:'5x ROI',
    },
];



  const imagesmain = [
    "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1662284972119-b83a58515a15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMG1hcmtldGluZyUyMGJpYiUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1544237538-6fae2b56441c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZnQlMjB3ZWIlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
    
  ];

const scrollimages = [...imagesmain, ...imagesmain];





  return (

    <div className="container-home">
<div className='alertnot'>Please,Visit from laptops,PC. its Not ready for mobile right now</div>
      <div className='container-head'>
        
  <div className='boxatside1'> 
    <h2>Top Results</h2>
     <div className='andarbox-child'><Link className='andarbox-link' to="/Jobs">Suraj got 6LPA Package</Link>  </div>
      <div className='andarbox-child'><Link className='andarbox-link' to="/Inf">Gives 10x ROI to Customer</Link>  </div>
       <div className='andarbox-child'><Link className='andarbox-link' to="/Reflab">Refurbished Laptop at 60% Discount</Link>  </div>
      <div className='andarbox-child'><Link className='andarbox-link' to="/Inf">Axi Brand Got 12.5x ROI </Link>  </div>
        <div className='andarbox-child'><Link className='andarbox-link' to="/Course">Job Placements Course</Link>  </div>
     </div>

      <div className='slider-scroller-wrapper-home'>
          <div className="scroller-container-home">
        {scrollimages.map((simg, index) => (
          <img key={index} src={simg} alt="" />
        ))}
      </div>
      </div>

 <div className='boxatside2'> 
  <h2>Best in 2025</h2>
     <div className='andarbox-child'><Link className='andarbox-link' to="/Jobs">Suraj got 6LPA Package</Link>  </div>
      <div className='andarbox-child'><Link className='andarbox-link' to="/Inf">Gives 10x ROI to Customer</Link>  </div>
       <div className='andarbox-child'><Link className='andarbox-link' to="/Reflab">Refurbished Laptop at 60% Discount</Link>  </div>
      <div className='andarbox-child'><Link className='andarbox-link' to="/Inf">Axi Brand Got 12.5x ROI </Link>  </div>
        <div className='andarbox-child'><Link className='andarbox-link' to="/Course">Job Placements Course</Link>  </div>
   </div>

</div> 


   <div className='titleboxcontainer-home'>
        Explore Our Organization
      </div>

<div className='boxcontainer-home'>
  
  <div className="content-home">
      
   
    <div className="jobx1-post-home"> 
        <div className="postx1-head-home"> 
           <div className="postx1-head-ch-home"><span className=""><i class="fa-solid fa-grip"></i></span><div>Get Placements in Top Companies</div></div>
           {/* <button className="postx1-head-ch-home">Explore..</button> */}
       </div> 

        <div className="postx1-info-home"> 
           {postx1info.map((pox1,index)=>(  
              <div  key={index} className="postx1-info-child-home">
                <div className="postx1-info-childx1-home"><img src={pox1.image} alt=""/></div> 
                <div className='postx1-info-childx1-home'><strong>Role:</strong> {pox1.hed}</div>
                <div className='postx1-info-childx1-home'><strong>CTC:</strong> {pox1.ctc}</div>
                 <div className="postx1-info-childx1-home"><Link className='postx1-info-childx1x1-home' to="/Jobs">More Detail</Link></div>
                </div> 
                 ))}
      </div> 
       </div> 
  
   
    
    <div className="jobx1-post-home"> 
        <div className="postx1-head-home"> 
           <div className="postx1-head-ch-home"><span className=""><i class="fa-solid fa-grip"></i></span><div>Top Demanding IT Courses</div></div>
           {/* <button className="postx1-head-ch-home">Explore..</button> */}
       </div> 

        <div className="postx1-info-home"> 
           {postx2info.map((pox2,index)=>(  
              <div  key={index} className="postx1-info-child-home">
                <div className="postx1-info-childx1-home"><img src={pox2.image} alt=""/></div> 
                <div className='postx1-info-childx1-home'><strong>Course:</strong> {pox2.hed}</div>
                <div className='postx1-info-childx1-home'><strong>Discount:</strong> {pox2.dis}</div>
                 <div className="postx1-info-childx1-home"><Link className='postx1-info-childx1x1-home' to="/Course">More Detail</Link></div>
                </div> 
                 ))}
      </div> 
       </div> 
  
  

    
    <div className="jobx1-post-home"> 
        <div className="postx1-head-home"> 
           <div className="postx1-head-ch-home"><span className=""><i class="fa-solid fa-grip"></i></span><div>Trending Digital Products</div></div>
           {/* <button className="postx1-head-ch-home">Explore..</button> */}
       </div> 

        <div className="postx1-info-home"> 
           {postx3info.map((pox3,index)=>(  
              <div  key={index} className="postx1-info-child-home">
                <div className="postx1-info-childx1-home"><img src={pox3.image} alt=""/></div> 
                <div className='postx1-info-childx1-home'><strong>Tool:</strong> {pox3.hed}</div>
                <div className='postx1-info-childx1-home'><strong>Benefits:</strong> {pox3.desc}</div>
                 <div className="postx1-info-childx1-home"><Link className='postx1-info-childx1x1-home' to="/Dpr">More Detail</Link></div>
                </div> 
                 ))}
      </div> 
       </div> 
  
  
  
    <div className="jobx1-post-home"> 
        <div className="postx1-head-home"> 
           <div className="postx1-head-ch-home"><span className=""><i class="fa-solid fa-grip"></i></span><div>Top Influencers for your brand</div></div>
           {/* <button className="postx1-head-ch-home">Explore..</button> */}
       </div> 

        <div className="postx1-info-home"> 
           {postx4info.map((pox4,index)=>(  
              <div  key={index} className="postx1-info-child-home">
                <div className="postx1-info-childx1-home"><img src={pox4.image} alt=""/></div> 
                <div className='postx1-info-childx1-home'><strong>Likes:</strong> {pox4.likes}</div>
                <div className='postx1-info-childx1-home'><strong>ROI:</strong> {pox4.roi}</div>
                 <div className="postx1-info-childx1-home"><Link className='postx1-info-childx1x1-home' to="/Inf">More Detail</Link></div>
                </div> 
                 ))}
      </div> 
       </div> 
  
  


  
  
  
    
    
    
    </div> 
  
  
    <div className="sidebar2-home">
  
  <div className="sidebar2-child-home">
      <img src={micr3grap} className="sidebar2-child-chhome" alt=""/>
      <div class="sidebar2-child-chhome"> 
              <h2>Sale Upto 50% off </h2> 
              <p>    </p> 
              <button class="sidebar2-child-ch-btnhome">Buy now</button> 
          </div> 
       </div>    
  
  
  <div className="sidebar2-child-home">
      <img src={micr8cibil} className="sidebar2-child-chhome" alt=""/>
      <div class="sidebar2-child-chhome"> 
              <h2>Want increase cibil </h2> 
              <p>    </p> 
              <button class="sidebar2-child-ch-btnhome">Buy now</button> 
          </div> 
       </div>  
  
  
  
  
  
  </div> 
      


</div>


    
    </div>
  );
}