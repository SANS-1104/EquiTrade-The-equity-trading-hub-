import React from 'react';
import '../CSS/main.css'

function LeftImg({imageURL, techName, techDesc, link1, link2}) {
    return ( 
        <div className='container w-4/5 mb-16'>
            <div className='row flex flex-wrap justify-center items-center gap-y-1'>
                <div className='Technology-image leftSecCol w-1/2'>
                    <img src={imageURL} alt={techName}/>
                </div>
                <div className='Technology-data leftSecCol w-1/2 px-16 flex flex-col flex-wrap justify-start align-center'>
                    <h1> {techName} </h1>
                    <p> {techDesc} </p>
                    <div className='download flex flex-wrap justify-start items-center'>
                        <a href={link1} target='blank' className='mr-8'><img src='images/googlePlayBadge.svg' /></a>
                        <a href={link2} target='blank'><img src='images/appstoreBadge.svg' /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftImg;