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

export default function Findjobs() {

const contentarr=[{image:"https://images.unsplash.com/photo-1595074475099-633660478a7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwcm9maWxlcyUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D",
    hed:"Front End Developer",des:'Predusk Technology pvt ltd',
    iconhead:"fa-regular fa-bookmark fa-cus-findjobs",iconexp:"fa-solid fa-money-check-dollar" ,
    textexp:"2-3 Years",iconlocation:"fa-solid fa-location-dot",textlocation:"Jaipur,Rajasthan",
    iconskills:"fa-solid fa-pen-to-square",textskills:"HTML5, CSS3, JavaScript,Reactjs" ,iconcall:"fa-solid fa-phone",
    textcall:"+91 92*****265",textdatepost:"Posted 8 days ago"}, {image:"https://images.unsplash.com/photo-1631894137110-7a1842f0cb18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFtYXpvbiUyMGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
    hed:"Data Anaylist",des:'Relience Nippon Life Insurance Company Limited',
    iconhead:"fa-regular fa-bookmark fa-cus-findjobs",iconexp:"fa-solid fa-money-check-dollar" ,
    textexp:"0 to 5 year",iconlocation:"fa-solid fa-location-dot",textlocation:"Gurgaon",
    iconskills:"fa-solid fa-pen-to-square",textskills:"Power-Bi Python SQL MS-Excel" ,iconcall:"fa-solid fa-phone",
    textcall:"+91 87*****265",textdatepost:"Posted 2 days ago"},
    {image:"https://images.unsplash.com/photo-1595074475099-633660478a7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwcm9maWxlcyUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D",
    hed:"Front End Developer",des:'Predusk Technology pvt ltd',
    iconhead:"fa-regular fa-bookmark fa-cus-findjobs",iconexp:"fa-solid fa-money-check-dollar" ,
    textexp:"2-3 Years",iconlocation:"fa-solid fa-location-dot",textlocation:"Jaipur,Rajasthan",
    iconskills:"fa-solid fa-pen-to-square",textskills:"HTML5, CSS3, JavaScript,Reactjs" ,iconcall:"fa-solid fa-phone",
    textcall:"+91 92*****265",textdatepost:"Posted 8 days ago"}, 
    {image:"https://images.unsplash.com/photo-1550622824-c11e494a4b65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlcyUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D",
    hed:"React Js Developer",des:'IMG Global Infotech',
    iconhead:"fa-regular fa-bookmark fa-cus-findjobs",iconexp:"fa-solid fa-money-check-dollar" ,
    textexp:"0 to 7 yr",iconlocation:"fa-solid fa-location-dot",textlocation:"Surat,Gujarat",
    iconskills:"fa-solid fa-pen-to-square",textskills:"Reactjs,HTML5, CSS3, JavaScript" ,iconcall:"fa-solid fa-phone",
    textcall:"+91 63*****265",textdatepost:"Posted 1 weeks ago"},
        {image:"https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D",
    hed:"Backend Developer",des:'Impetus Consulting Associates Private Limited',
    iconhead:"fa-regular fa-bookmark fa-cus-findjobs",iconexp:"fa-solid fa-money-check-dollar" ,
    textexp:"0 to 5 yr",iconlocation:"fa-solid fa-location-dot",textlocation:"Jaipur,Rajasthan",
    iconskills:"fa-solid fa-pen-to-square",textskills:"Reactjs,Nodejs, HTML5,JavaScript" ,iconcall:"fa-solid fa-phone",
    textcall:"+91 97*****265",textdatepost:"Posted 4 days ago"},
     {image:"https://images.unsplash.com/photo-1595074475099-633660478a7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwcm9maWxlcyUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D",
    hed:"Web Developer",des:'Predusk Technology pvt ltd',
    iconhead:"fa-regular fa-bookmark fa-cus-findjobs",iconexp:"fa-solid fa-money-check-dollar" ,
    textexp:"2-3 Years",iconlocation:"fa-solid fa-location-dot",textlocation:"Jaipur,Rajasthan",
    iconskills:"fa-solid fa-pen-to-square",textskills:"HTML5, CSS3, JavaScript,Reactjs" ,iconcall:"fa-solid fa-phone",
    textcall:"+91 92*****265",textdatepost:"Posted 8 days ago"},
      
    {image:"https://images.unsplash.com/photo-1550622824-c11e494a4b65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlcyUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D",
    hed:"Java Developer",des:'Alcotech Global Infotech',
    iconhead:"fa-regular fa-bookmark fa-cus-findjobs",iconexp:"fa-solid fa-money-check-dollar" ,
    textexp:"0 to 7 yr",iconlocation:"fa-solid fa-location-dot",textlocation:"Surat,Gujarat",
    iconskills:"fa-solid fa-pen-to-square",textskills:"Java , Springboot ,Hibernate" ,iconcall:"fa-solid fa-phone",
    textcall:"+91 63*****265",textdatepost:"Posted 1 weeks ago"},
        {image:"https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D",
    hed:"NodeJS Developer",des:'Impetus Consulting Associates Private Limited',
    iconhead:"fa-regular fa-bookmark fa-cus-findjobs",iconexp:"fa-solid fa-money-check-dollar" ,
    textexp:"0 to 5 yr",iconlocation:"fa-solid fa-location-dot",textlocation:"Jaipur,Rajasthan",
    iconskills:"fa-solid fa-pen-to-square",textskills:"Reactjs,Nodejs, HTML5,JavaScript" ,iconcall:"fa-solid fa-phone",
    textcall:"+91 97*****265",textdatepost:"Posted 4 days ago"},
  

];

  




    
  return (

    <div className="container-findjobs">

      <div className='container-hubby-findjobs'></div>
       <div className='container-son-findjobs'></div>
        <div className='container-wife-findjobs'>
  
      
        <div className="sidebar1-findjobs">

       <div className="sidebar1-child-findjobs">
           <img class="sidebar1-child-chfindjobs" 
src={micr16dsaloan} alt=""/> 
        <div class="sidebar1-child-chfindjobs"> 
            <h2></h2> 
            <p> </p> 
            <button class="sidebar1-child-ch-btnfindjobs">start now</button> 
        </div> 
         </div> 


      
  

  

  
        </div>




<div className="content-findjobs">
   
   {/* <div className='content-heading-findjobs'>
    <h2>Top Companies</h2>
    <h3>Perfect Place for getting Interview calls get Jobs at High CTC</h3>
    <p>
Lets Starts
    </p>
   </div> */}
   
    {contentarr.map((con,index)=>(   
  <div key={index} className="job-post-findjobs"> 
      <div className="post-head-findjobs"> 
            <div className="post-head-ch-findjobs">
                 <img src={con.image} className="post-head-child-findjobs" alt=""/> 
                 <div className="post-head-child-findjobs"> 
                        <div className='cha-findjobs'>{con.hed}</div>
                        <div className='char-findjobs'>{con.des}</div>
                 </div>
            </div>
             <div className='post-head-ch-findjobs'>
              <i className={con.iconhead}></i>
             </div>
        </div> 
      <div className="post-info-findjobs"> 
            <p className="post-info-child-findjobs"><span className=""><i className={con.iconexp}></i></span> <span>{con.textexp}</span></p> 
            <p className="post-info-child-findjobs"><span className=""><i className={con.iconlocation}></i></span><span>{con.textlocation}</span></p>
            <p className="post-info-child-findjobs"><span className=""><i className={con.iconskills}></i></span><span>{con.textskills}</span></p>     
            <p className="post-info-child-findjobs"><span className=""><i className={con.iconcall}></i></span><span>{con.textcall}</span></p> 
      </div> 
      <div className="post-foot-findjobs"> 
           <span className="post-foot-child-findjobs text-bor-findjobs">{con.textdatepost}</span> 
          <button className="post-foot-child-findjobs">Apply</button> 
      </div> 
     </div> 

    ))}
  







  
  
  
  </div> 


  <div className="sidebar2-findjobs">

<div className="sidebar2-child-findjobs">
    <img src={micr3grap} className="sidebar2-child-chfindjobs" alt=""/>
    <div class="sidebar2-child-chfindjobs"> 
            <h2>Sale Upto 50% off </h2> 
            <p>    </p> 
            <button class="sidebar2-child-ch-btnfindjobs">Buy now</button> 
        </div> 
     </div>    


<div className="sidebar2-child-findjobs">
    <img src={micr8cibil} className="sidebar2-child-chfindjobs" alt=""/>
    <div class="sidebar2-child-chfindjobs"> 
            <h2>Want increase cibil </h2> 
            <p>    </p> 
            <button class="sidebar2-child-ch-btnfindjobs">Buy now</button> 
        </div> 
     </div>  





</div> 
    </div>
    </div>
  );
}