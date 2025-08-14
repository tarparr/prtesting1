import React from 'react';
import micr3grap from '../assets/images/micr3grap.jpg';
import micr4video from '../assets/images/micr4video.jpeg';
import micr5web from '../assets/images/micr5web.jpg';
import micr6digi from '../assets/images/micr6digi.webp';
import micr7credit from '../assets/images/micr7credit.jpg';
import micr8cibil from '../assets/images/micr8cibil.webp';
import micr15loan from '../assets/images/micr15loan.jpg';
import micr16dsaloan from '../assets/images/micr16dsaloan.jpg';

export default function Courseit() {

  const Courseitarr1=[ {image:micr4video,
    course:"Video Editing",duration:'2 to 3',
    fees:"3000",stu:"7K"},
    {image:micr5web,
    course:"Website Designing",duration:'1.5 to 3',
    fees:"8000",stu:"2200"},
    {image:micr6digi,
    course:"Digital Marketing",duration:'2 to 3',
    fees:"20000",stu:"5K"},  {image:micr4video,
    course:"Video Editing",duration:'2 to 3',
    fees:"3000",stu:"7K"},{image:micr3grap,
    course:"Graphic Designing",duration:'2 to 3',
    fees:"12000",stu:"2300"},
    {image:micr5web,
    course:"Website Designing",duration:'1.5 to 3',
    fees:"8000",stu:"2200"},
    {image:micr6digi,
    course:"Digital Marketing",duration:'2 to 3',
    fees:"20000",stu:"5K"},  {image:micr4video,
    course:"Video Editing",duration:'2 to 3',
    fees:"3000",stu:"7K"},
    {image:micr5web,
    course:"Website Designing",duration:'1.5 to 3',
    fees:"8000",stu:"2200"},
    {image:micr6digi,
    course:"Digital Marketing",duration:'2 to 3',
    fees:"20000",stu:"5K"},

  ];

  return (

    <div className="container-courseit">
  
     <div className="container-child-courseit">
             <h1>Best course with AI</h1>
             <p>Enroll in the Digital Marketing course and become an ace digital marketer .</p>
           <p> learn Google Analytics, Google Ads, SEO, social media marketing, email marketing, AI tools, and more.</p>
           </div>
           <div className="container-child-courseit"></div>
             
        <div className="container-child-courseit">
     
            <div className="sidebar1-courseit">
     
             <div className='sidebar1-heading-courseit'>
               <h2>Top Courses</h2>
               <h4><span><i class="fa-solid fa-trophy"></i></span>Digital Marketing</h4>
                <h4><span><i class="fa-solid fa-trophy"></i></span>Web Design</h4>
                 <h4><span><i class="fa-solid fa-trophy"></i></span>Graphic Design</h4>
                  <h4><span><i class="fa-solid fa-trophy"></i></span>Video Editing</h4>
                  <h4><span><i class="fa-solid fa-trophy"></i></span>App Developement</h4>
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
                 {Courseitarr1.map((men1,index)=>( 
           <div className='facex1-post-courseit'>
             <div className="facex1x1-post-courseit"><img class="facex1x1-post-courseit-img" 
                             src={men1.image} alt=""/></div>
             <div class="facex1x1-post-courseit">
                 <h3>{men1.course} course</h3>
                 <p><span><i class="fa-solid fa-handshake"></i></span> <strong>+{men1.stu}</strong> Students</p>
                 <h4><span><i class="fa-solid fa-book-open"></i></span> {men1.duration}</h4>
                 <h3><span><i class="fa-solid fa-indian-rupee-sign"></i></span> {men1.fees}</h3>
                  <h3><span><i class="fa-solid fa-graduation-cap"></i></span> 100% Placement Support</h3>
             </div>
             <button class="facex1x1x1-post-courseit">Join now</button>
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