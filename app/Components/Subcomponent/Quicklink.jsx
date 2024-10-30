import React from 'react'
import './Quicklink.css';

const Quicklink = () => {
  return (
    <div className='quickline-main md:mr-10'>
        <h1 className='quicklink-headline'>Quick Links</h1>
      <div className='quickline-box'>
        <ul >
        <li  className='quicklink-item one'>
        <img src="/Linklogo1.png" className="quicklink-img" />

            <h1 className='quicklink-h1'>Canvas LMS</h1>
            <p className='quicklink'>Click here to access your LMS portal for assignments, class recordings and notes.</p>
        </li>
        <li  className='quicklink-item two'>
        <img src="/Linklogo2.png" className="quicklink-img" />

            <h1 className='quicklink-h1'>Join Live Class</h1>
            <p className='quicklink'>Click here to join your live class session. Please do not share this link.</p>

        </li>
        <li  className='quicklink-item three'>
        <img src="/Linklogo3.png" className="quicklink-img" />

            <h1 className='quicklink-h1'>Contact Teacher</h1>
            <p className='quicklink'>Click here to contact your teacher for any doubts or concerns.</p>

        </li>
        </ul>
      </div>
    </div>
  )
}

export default Quicklink
