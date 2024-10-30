"use client";
import React, { useState } from "react";
import "./Access.css"; 
import Meeting from "../../Components/Subcomponent/Meeting"; 

const Access = () => {
  const [ismeetingOpen, setIsmeetingOpen] = useState(false); 
  const handleOpenmeeting = () => {
    setIsmeetingOpen(true);
  };

  // const handleClosemeeting = () => {
  //   setIsmeetingOpen(false);
  // };

  return (
    <div>
      <div className="  md:mr-10">
        <h2 className="access-title">Your Class Access</h2>
        <section className="access-container sm:mr-10">
          <div className="search-box">
            <img src="/search-normal.png" className="searchicon" alt="Search Icon" />
            <span className="searchheadline">Search for class recordings</span>
          </div>

          <div className="filter">
            <h1 className="filterheadline">Filter By :</h1>
            <div className="right-box">
              <div className="filter-box">
                <div className="filtertext">
                  <span>This week</span>
                  <img src="downarrow.png" className="arrow" alt="Arrow" />
                </div>
              </div>
              <div className="filter-box">
                <div className="filtertext">
                  <span>All subjects</span>
                  <img src="downarrow.png" alt="Arrow" />
                </div>
              </div>
            </div>
          </div>

          <ul className="access-list">
            <li className="access-item">
              <div className="access-middle one">
                <span className="class-Class">Class 7 Math</span>
                <span className="class-description">Algebraic Equations</span>
                <span className="class-day">24th October, 2024</span>
              </div>
              <img src="/video 5.png" className="access-img" alt="Thumbnail" />
            </li>

            <li className="access-item">
              <div className="access-middle two">
                <span className="class-Class">Class 7 Math</span>
                <span className="class-description">Differential Maths</span>
                <span className="class-day">24th October, 2024</span>
              </div>
              <img src="/video 5.png" className="access-img" alt="Thumbnail" />
            </li>

            <li className="access-item">
              <div className="access-middle three">
                <span className="class-Class">Class 7 Science</span>
                <span className="class-description">Fundamentals of Organic Chemistry</span>
                <span className="class-day">24th October, 2024</span>
              </div>
              <img
                src="/videopinkcolour.png"
                className="access-img"
                alt="Thumbnail"
                onClick={handleOpenmeeting} 
              />
            </li>

            <li className="access-item">
              <div className="access-middle four">
                <span className="class-Class">Class 7 Math</span>
                <span className="class-description">Trigonometry 101</span>
                <span className="class-day">23rd September, 2024</span>
              </div>
              <img src="/video 5.png" className="access-img" alt="Thumbnail" />
            </li>
          </ul>
        </section>
      </div>

      {ismeetingOpen && (
       
        
       <div className="meeting-overlay">
       <img
         className="close-button"
         src="/close-circle.png"
         alt="Close"
         onClick={() => setIsmeetingOpen(false)}
       />
       <Meeting />
     </div>
     
        
          
      )}
    </div>
  );
};

export default Access;
