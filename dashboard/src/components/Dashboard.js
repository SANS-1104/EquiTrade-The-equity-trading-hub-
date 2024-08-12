import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Apps from './Apps';
import Summary from './Summary';
import Orders from './Orders';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';
import WatchList from './WatchList';

function Dashboard() {
    const { username } = useParams(); // Extract username from URL
    
    return (
        <div className='dashboard-container'>
            {/* <GeneralContextProvider> */}
            <WatchList />
            {/* </GeneralContextProvider> */}
            <div className='content'>
                <Routes>
                    <Route path='/' element={<Summary username={username} />} />
                    <Route path='/orders' element={<Orders username={username} />} />
                    <Route path='/holdings' element={<Holdings username={username} />} />
                    <Route path='/positions' element={<Positions username={username} />} />
                    <Route path='/funds' element={<Funds username={username} />} />
                    <Route path='/apps' element={<Apps username={username} />} />
                </Routes>
            </div>
        </div>
    );
}

export default Dashboard;
