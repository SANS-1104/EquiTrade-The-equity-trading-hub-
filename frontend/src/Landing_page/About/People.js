import React from 'react';
import '../CSS/main.css'


function People() {
    return (  
        <div className='container about-people-container flex flex-wrap flex-col justify-center items-center mb-32'>
            <div className='title'>About Me</div>
            <div className='about-people flex flex-wrap justify-center items-start'>
                <div className='about-image w-1/2 flex flex-wrap flex-col justify-center items-center'>
                    <img src='images/myimg.jpg' alt=''/>
                    <h5>Sanskriti Srivastava</h5>
                    <p>Developer</p>
                </div>
                <div className='about-desc w-1/2 flex flex-wrap flex-col justify-center items-start'>
                    <p>I am Sanskriti Srivastava, currently a Btech Student in CSE(AI) branch, graduating in 2025.</p>
                    <p>I developed this website to showcase my Frontend and backend skills. Built the website using MERN STACK.</p>
                    <p>My working domains are Web Development and Data Analysis.</p>
                    <p>See my work here <i class="fa-solid fa-arrow-right-long px-2"></i> <a href='https://sanskriti-srivastava.netlify.app/' target='blank'>Click Me!</a></p>
                </div>
            </div>
        </div>
    );
}

export default People;