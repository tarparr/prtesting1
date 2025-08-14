import React from 'react';
import micr1loan from '../assets/images/micr1loan.jpg';
import micr2refu from '../assets/images/micr2refu.jpg';
import micr3grap from '../assets/images/micr3grap.jpg';
import micr4video from '../assets/images/micr4video.jpeg';
import micr5web from '../assets/images/micr5web.jpg';
import micr6digi from '../assets/images/micr6digi.webp';
import micr7credit from '../assets/images/micr7credit.jpg';
import micr8cibil from '../assets/images/micr8cibil.webp';
import micr15loan from '../assets/images/micr15loan.jpg';
import micr16dsaloan from '../assets/images/micr16dsaloan.jpg';
import micr17inflmn from '../assets/images/micr17inflmn.png';
import micr18inflmn from '../assets/images/micr18inflmn.png';
import micr19inflmn from '../assets/images/micr19inflmn.webp';
import micr20inflmn from '../assets/images/micr20inflmn.webp';
import micr21inflmn from '../assets/images/micr21inflmn.webp';

export default function Influencers() {

 
  
const Inflarr1=[{image:"https://images.unsplash.com/photo-1603127060612-65958bf34488?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluc3RhZ3JhbSUyMGluZmx1ZW5jZXJzJTIwbWFlfGVufDB8fDB8fHww",
    name:"SUNIL KUMAR",likes:'566.3K',
    costs:"2.23",},
 {image:micr17inflmn,
    name:"Julia George",likes:'876.3K',
    costs:"12.23",}, {image:micr18inflmn,
    name:"keine Jensi",likes:'34.3K',
    costs:"7.99",}, {image:micr19inflmn,
    name:"molisha",likes:'5.1M',
    costs:"23.23",}, {image:micr20inflmn,
    name:"Ben Stokes",likes:'433.8K',
    costs:"5.23",}, {image:micr21inflmn,
    name:"Raju Kalakar",likes:'326.3K',
    costs:"7.23",},{image:micr18inflmn,
    name:"keine Jensi",likes:'34.3K',
    costs:"7.99",}, {image:micr19inflmn,
    name:"molisha",likes:'5.1M',
    costs:"23.23",}, {image:micr20inflmn,
    name:"Ben Stokes",likes:'433.8K',
    costs:"5.23",}, {image:micr21inflmn,
    name:"Raju Kalakar",likes:'326.3K',
    costs:"7.23",},{image:micr18inflmn,
    name:"keine Jensi",likes:'34.3K',
    costs:"7.99",}, {image:micr19inflmn,
    name:"molisha",likes:'5.1M',
    costs:"23.23",}, {image:micr20inflmn,
    name:"Ben Stokes",likes:'433.8K',
    costs:"5.23",}, {image:micr21inflmn,
    name:"Raju Kalakar",likes:'326.3K',
    costs:"7.23",},

];



  return (

    <div className="container-Influencers">

      <div className="container-child-Influencers">
        <h1>Work with influencers that already love your brands</h1>
        <p>Let creators and influential customers come to you through dedicated landing pages and your own CMS matching.</p>
      <p>Reclaim hours of your week: find creators and affiliates across all social networks. From micro-influencers, to celebrities and KOLs, find the best match.</p>
      </div>
      <div className="container-child-Influencers"></div>
        
   <div className="container-child-Influencers">

       <div className="sidebar1-Influencers">

        <div className='sidebar1-heading-Influencers'>
          <h2>Best Influencers</h2>
          <h4><span><i class="fa-solid fa-trophy"></i></span>Sunil Pal</h4>
           <h4><span><i class="fa-solid fa-trophy"></i></span>Ravina Jain</h4>
            <h4><span><i class="fa-solid fa-trophy"></i></span>Vinay Yadav</h4>
             <h4><span><i class="fa-solid fa-trophy"></i></span>Dinesh Kumar</h4>
             <h4><span><i class="fa-solid fa-trophy"></i></span>Anita Bansal</h4>
        </div>

        {/* <div className="sidebar1-child-Influencers">
                 <img class="sidebar1-child-chInfluencers" 
                src={micr16dsaloan} alt=""/> 
                <div class="sidebar1-child-chInfluencers"> 
                  <h2>Hurry Up ! Sale Upto 50% off </h2> 
                  <p>     </p> 
                  <button class="sidebar1-child-ch-btnInfluencers">start now</button> 
              </div> 
            </div> 
      
      
        
        <div className="sidebar1-child-Influencers">
                 <img class="sidebar1-child-chInfluencers" 
                src={micr3grap} alt=""/> 
                <div class="sidebar1-child-chInfluencers"> 
                  <h2>Sale Upto 50% off </h2> 
                  <p>     </p> 
                  <button class="sidebar1-child-ch-btnInfluencers">Buy now</button> 
              </div> 
            </div> 
      
      
        <div className="sidebar1-child-Influencers">
                 <img class="sidebar1-child-chInfluencers" 
                src={micr8cibil} alt=""/> 
                <div class="sidebar1-child-chInfluencers"> 
                  <h2>Increase Cibil Score</h2> 
                  <p>     </p> 
                  <button class="sidebar1-child-ch-btnInfluencers">Buy now</button> 
              </div> 
            </div>  */}
      
      
        
      </div>
      
      
      
      
      <div className="content-Influencers">
      <div className="face-post-Influencers"> 
            {Inflarr1.map((men1,index)=>( 
      <div className='facex1-post-Influencers'>
        <img class="facex1x1-post-Influencers" src={men1.image} alt=""/>
        <div class="facex1x1-post-Influencers">
            <h3>{men1.name}</h3>
            <h3><i class="fa-solid fa-heart"></i> {men1.likes}</h3>
            <h3>${men1.costs} Costs</h3>
            <button class="facex1x1x1-post-Influencers">Connect</button>
        </div>
    </div>
            ))}
      
      
        
        
          </div> 
        </div> 
      
    
        </div>
    </div>
  );
}