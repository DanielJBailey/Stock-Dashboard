import React from 'react';
import Search from './Search';
import StockInfo from './StockInfo';
import '../styles/MainApplication.css';

const MainApplication = () => {

    return (
        <div className = "main-application">
            <div className = "left-sidebar">
                <Search />
                <StockInfo />
            </div>
        </div>
    );
}


export default MainApplication;