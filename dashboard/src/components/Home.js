import React from 'react';
import { useParams } from 'react-router-dom';
import Dashboard from './Dashboard';
import './CSS/main.css';
import Navbar from './Navbar';

function Home() {
    const { username } = useParams(); 
     

    return (
        <>
            <Navbar  username={username}/>
            <div className='mt-20'></div>
            <Dashboard username={username} />
        </>        
    );
}

export default Home;
