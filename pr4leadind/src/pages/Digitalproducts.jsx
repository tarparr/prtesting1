import React from 'react';
import micr3grap from '../assets/images/micr3grap.jpg';
import micr4video from '../assets/images/micr4video.jpeg';
import micr5web from '../assets/images/micr5web.jpg';
import micr6digi from '../assets/images/micr6digi.webp';
import micr7credit from '../assets/images/micr7credit.jpg';
import micr8cibil from '../assets/images/micr8cibil.webp';
import micr15loan from '../assets/images/micr15loan.jpg';
import micr16dsaloan from '../assets/images/micr16dsaloan.jpg';
import micr9instdown from '../assets/images/micr9instdown.jpg';
import micr10whatsbulk from '../assets/images/micr10whatsbulk.jpg';
import micr11seotrf from '../assets/images/micr11seotrf.png';
import micr22sms from '../assets/images/micr22sms.jpg';
import micr23reel from '../assets/images/micr23reel.png';

export default function Digitalproducts() {

  const Digitalprarr1=[{image:micr22sms,
    digi:"SMS Bulk Sender",duration:' 2 ',
    fees:"1200",quan:"20,089"},
    {image:micr9instdown,
    digi:"Instagram Downloader",duration:' 1.5 ',
    fees:"3000",quan:"17025"},
    {image:micr10whatsbulk,
    digi:"WB Bulk Sender",duration:' 1 ',
    fees:"1500",quan:"8,003"},
      {image:micr23reel,
    digi:"IG Automation",duration:' 2 ',
    fees:"1800",quan:"9,000"},
      {image:micr11seotrf,
    digi:"SEO Traffic ",duration:' 2 ',
    fees:"3600",quan:"7600"},
      {image:micr9instdown,
    digi:"Instagram Downloader",duration:' 1.5 ',
    fees:"3000",quan:"17025"},
    {image:micr10whatsbulk,
    digi:"WB Bulk Sender",duration:' 1 ',
    fees:"1500",quan:"8,003"},
      {image:micr23reel,
    digi:"IG Automation",duration:' 2 ',
    fees:"1800",quan:"9,000"},
      {image:micr11seotrf,
    digi:"SEO Traffic ",duration:' 2 ',
    fees:"3600",quan:"7600"},
    

  ];

  return (

    <div className="container-courseit">
  
     <div className="container-child-courseit">
             <h1>Best Digital tools For Increase Your Business Growth</h1>
             <p>Buy Our Produts and become an ace digital marketer .</p>
           <p> learn Google Analytics, Google Ads, SEO, social media marketing, email marketing, AI tools, and more.</p>
           </div>
           <div className="container-child-courseit"></div>
             
        <div className="container-child-courseit">
     
            <div className="sidebar1-courseit">
     
             <div className='sidebar1-heading-courseit'>
               <h2>Top Tools</h2>
               <h4><span><i class="fa-solid fa-trophy"></i></span>SMS Bulk Sender</h4>
                <h4><span><i class="fa-solid fa-trophy"></i></span>IG Downloader</h4>
                 <h4><span><i class="fa-solid fa-trophy"></i></span>WB Bulk</h4>
                  <h4><span><i class="fa-solid fa-trophy"></i></span>Instagram tool</h4>
                  <h4><span><i class="fa-solid fa-trophy"></i></span>Traffic Mastery</h4>
             </div>
     
             <div className="sidebar1-child-courseit">
                      <img class="sidebar1-child-chcourseit" 
                     src={micr16dsaloan} alt=""/> 
                     <div class="sidebar1-child-chcourseit"> 
                       <h2>Hurry Up ! Sale Upto 50% off </h2> 
                       <p>     </p> 
                       <button class="sidebar1-child-ch-btncourseit">start now</button> 
                   </div> 
                 </div> 
           
           
             
             <div className="sidebar1-child-courseit">
                      <img class="sidebar1-child-chcourseit" 
                     src={micr3grap} alt=""/> 
                     <div class="sidebar1-child-chcourseit"> 
                       <h2>Sale Upto 50% off </h2> 
                       <p>     </p> 
                      <button class="sidebar1-child-ch-btncourseit">Buy now</button> 
                   </div> 
                 </div> 
           
           
             <div className="sidebar1-child-courseit">
                      <img class="sidebar1-child-chcourseit" 
                     src={micr8cibil} alt=""/> 
                     <div class="sidebar1-child-chcourseit"> 
                       <h2>Increase Cibil Score</h2> 
                       <p>     </p> 
                       <button class="sidebar1-child-ch-btncourseit">Buy now</button> 
                   </div> 
                 </div> 
           
           
             
           </div>
           
           
           
           
           <div className="content-courseit">
           <div className="face-post-courseit"> 
                 {Digitalprarr1.map((men1,index)=>( 
           <div className='facex1-post-courseit'>
             <div className="facex1x1-post-courseit"><img class="facex1x1-post-courseit-img" 
                             src={men1.image} alt=""/></div>
             <div class="facex1x1-post-courseit">
                 <h3>{men1.digi} tool</h3>
                 <p><span><i class="fa-solid fa-handshake"></i></span> Loved by <strong>{men1.quan}+</strong></p>
                 <h4><span><i class="fa-solid fa-book-open"></i></span>{men1.duration} Months Free Trial</h4>
                 <h3><span><i class="fa-solid fa-indian-rupee-sign"></i></span> {men1.fees}</h3>
                  <h3><span><i class="fa-solid fa-graduation-cap"></i></span> Easy to setup</h3>
             </div>
             <button class="facex1x1x1-post-courseit">Try Free</button>
         </div>
                 ))}
           
           
             
             
               </div> 
             </div> 
           
           
             <div className="sidebar2-courseit">
           
           </div> 
               
             </div>
    
    </div>
  );
}