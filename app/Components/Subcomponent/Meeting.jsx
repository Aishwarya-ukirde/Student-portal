import React, { useState } from 'react';
import './Meeting.css';

const Meeting = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div>
      <div className='meeting-display'>
        <div className='meetingheading'>
          <span className='one'>Class 7 Science</span>
          <span className='two'>Fundamentals of Organic Chemistry</span>
        </div>
        {/* <div className='closebutton'>
          <div className='icon' onClick={handleClose} >
            <img src='/close-circle.png' alt='Close' />
          </div>
        </div> */}
      </div>
      
      <div className='meeting-content'>
        <img src='/meetingvideo.png' alt='Meeting Video' className='meetingvideo' />
        
        <div className='icon-overlay'>
          
        <div className='displaymeet'><img src='/Group2.png'/></div>
          <div className='icon-group-left'>
            <div className='icon'><img src='/play.png' alt='Play' /></div>
            <div className='icon'><img src='/backward-15-seconds.png' alt='Rewind' /></div>
            <div className='icon'><img src='/forward-15-seconds.png' alt='Forward' /></div> 
          </div>
          <div className='icon-group-right'>
            <div className='icon'><img src='/volume-cross.png' alt='Mute' /></div> 
            <div className='icon'><img src='/iconframe.png' alt='Fullscreen' /></div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;