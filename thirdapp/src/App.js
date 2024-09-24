// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { faqQuestions } from './data/faq';
import FaqComp from './faqcom';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


function App() {

  let [pstatus,setPstatus]=useState(false)
  let [menuStatus,setMenuStatus]=useState(false)
  let [modalStatus,setmodalStatus]=useState(false)
  let [showAns,setshowAns]=useState(faqQuestions[0].id)
  let saveInfo=()=>{
    // NotificationManager.info("Welcome to React Notification");
    // NotificationManager.success('Suceess Message',"Welcome to React Notification");
    NotificationManager.error("error message");
    
  }

  return (
    <div className="App">
      <NotificationContainer/>
      <button onClick={saveInfo}>Button for React Noti</button>
      <br/>
      <br/>


      {/* side scroll down modal  */}
      <button className='en' onClick={()=>setmodalStatus(true)}>Explore Know</button>
      <div className={`modalOverlay ${modalStatus ? 'showmodalOverlay':''} `} onClick={()=>setmodalStatus(false)}></div>
      <div className={`modelDiv ${modalStatus ? 'showmodelDiv':''} `}>
        <h3>Enquiry Know</h3>
      </div>


      {/* nav bar creation */}
      <button className='micon' onClick={()=>setMenuStatus(!menuStatus)}>
        {menuStatus ? <span>&times;</span>:<span>&#9776;</span>}
      </button>
      <div className={`menu ${menuStatus ? 'activeMenu':''}`} >
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Resume</li>
          <li>Contact Us</li>
        </ul>
      </div>


      {/* password button and input  */}
      <input type={(pstatus ? 'text':'password')} placeholder='Enter password'/>
      <button onClick={()=>setPstatus(!pstatus)}>{(pstatus ? 'Hide':'Show')}</button>



      <div className='faqDiv'>
        <h1>Frequently Asked Questions Sample Using State Management</h1>
        {faqQuestions.map((faqitems,i)=>{
        return(
          <div className='faqitems'>
            <h2 className='faqQuestion' onClick={()=>setshowAns(faqitems.id)}>{faqitems.question}</h2>
            <p className={showAns===faqitems.id ? 'faqAnsShow':''}>{faqitems.answere}</p>
          </div>  
          );
        })}
      </div>
      <hr/>
      <hr/>
      <FaqComp/>



    </div>
  );
}

export default App;
