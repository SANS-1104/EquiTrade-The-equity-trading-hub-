import React from 'react';
import '../CSS/main.css'

function RightImg({imageURL, techName, techDesc}) {
    return (  
        <div className='container w-4/5 mb-16'>
            <div className='row flex flex-wrap justify-center items-center gap-y-1'>
                <div className='Technology-data leftSecCol w-1/2 px-16 flex flex-col flex-wrap justify-start align-center'>
                    <h1> {techName} </h1>
                    <p> {techDesc} </p>
                </div>
                <div className='Technology-image leftSecCol w-1/2'>
                    <img src={imageURL} alt={techName}/>
                </div>
            </div>
        </div>
    );
}

export default RightImg;