import React from 'react';
import { useParams } from 'react-router-dom';
import Dashboard from './Dashboard';
import './CSS/main.css';
import Navbar from './Navbar';

function Home() {
    const { username } = useParams(); // Get the username from the URL

    return (
        <>
            <Navbar />
            <div className='mt-20'></div>
            <Dashboard username={username} /> {/* Pass username as a prop */}
        </>        
    );
}

export default Home;
