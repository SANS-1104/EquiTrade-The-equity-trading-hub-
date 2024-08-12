import React from 'react';
import '../CSS/main.css'

function PageNotFound() {
    return ( 
        <div className='container page-not-found my-40'>
            <h2>404</h2>
            <h1>Page Not Found</h1>
            <p>We couldn't find the page you were looking for.<br /> Visit <a href='/'>Zerodha's Home Page</a> </p>
        </div>
    );
}

export default PageNotFound;