// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  let [pstatus,setPstatus]=useState(false)
  let [menuStatus,setMenuStatus]=useState(false)
  let [modalStatus,setmodalStatus]=useState(false)

  return (
    <div className="App">

      <button className='en' onClick={()=>setmodalStatus(true)}>Explore Know</button>

      <div className={`modalOverlay ${modalStatus ? 'showmodalOverlay':''} `} onClick={()=>setmodalStatus(false)}></div>
      <div className={`modelDiv ${modalStatus ? 'showmodelDiv':''} `}>
        <h3>Enquiry Know</h3>
      </div>


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


      <input type={(pstatus ? 'text':'password')} placeholder='Enter password'/>
      <button onClick={()=>setPstatus(!pstatus)}>{(pstatus ? 'Hide':'Show')}</button>
    </div>
  );
}

export default App;
