import React from 'react';
import Search from './Search';
import '../styles/MainApplication.css';

const MainApplication = () => {

    return (
        <div className = "main-application">
            <div className = "left-sidebar">
                <Search />
            </div>
        </div>
    );
}


export default MainApplication;