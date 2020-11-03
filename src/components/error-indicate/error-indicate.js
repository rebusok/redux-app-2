import React from 'react';
import './error-indicate.css';



const ErrorIndicate = () => {
    return(
        <div className='error-indic'>
            
            <span className='boom'>
                BOOM
            </span>
            <span>
                something has gone terribly wrong 
            </span>
            <span>
                (but we already sent to fix it)
            </span>
        </div>
    )
}

export default ErrorIndicate;