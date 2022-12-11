import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import BG from './../Assets/BG.mp4';
import './Main.css'

const Main = () => {
    return (
        <div className='main'>
            <video src={BG} muted autoPlay loop></video>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;