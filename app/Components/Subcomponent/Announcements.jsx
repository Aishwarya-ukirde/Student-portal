import './Announcemnet.css';

export default function Announcements() {
  const announcements = [
    { 
      text: 'On account of Independence Day, August 15th will be a holiday.', 
      imgSrc: '/sun.png' 
    },
    { 
      text: 'Reminder to finish your assignments and submit them by Monday.', 
      imgSrc: '/clipboard-text.png' 
    },
  ];

  return (
    <div >
      <div className=' mr-10 '>
        <h2 className="announcements-heading">Announcements</h2>
        <section className="announcements-container">
          <ul className="announcement-list">
            {announcements.map((announcement, index) => (
              <li key={index} className="announcement-item">
                <img 
                  src={announcement.imgSrc} 
                  alt={`Icon for announcement ${index + 1}`} 
                  className="announcement-img" 
                />
                <span className="announcement-text">{announcement.text}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className='schedule'>
        <h2 className="schedule-title">Your Class Schedule</h2>
        <section className="schedule-container">
          <ul className="schedule-list">
            <li className="schedule-item gray-bg">
              <img src="/videocamera.png" className="schedule-img" />
              <div className='schedule-middle .1'>
                <span className="class-Class">Class 7, Science | Live Class</span>
                <span className="class-description">Tuesday, 5:00 - 5:50 PM</span>
              </div>
              <span className="class-day">Yesterday</span>
            </li>
            <li className="schedule-item pink-bg">
              <img src="/whitevideocamera.png" className="schedule-img" />
              <div className='schedule-middle two'>
                <span className="class-Class">Class 7, Science | Live Class</span>
                <span className="class-description">Tuesday, 6:30 - 7:15 PM</span>
              </div>
              <span className="class-day">Today</span>
            </li>
            <li className="schedule-item gray-bg">
              <img src="/videocamera.png" className="schedule-img" />
              <div className='schedule-middle .3'>
                <span className="class-Class">Class 7, Science | Live Class</span>
                <span className="class-description">Tuesday, 5:00 - 5:50 PM</span>
              </div>
              <span className="class-day">Tomorrow</span>
            </li>
            <li className="schedule-item lightpink-bg">
              <img src="/pinkvideocamera.png" className="schedule-img" />
              <div className='schedule-middle .4'>
                <span className="class-Class">Class 7, Science | Live Class</span>
                <span className="class-description">Tuesday, 5:00 - 5:50 PM</span>
              </div>
              <span className="class-day">23rd Sept. 2024</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
