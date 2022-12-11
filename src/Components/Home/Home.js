import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
    return (
        <div className='absolute top-[270px]'>
            <h1 className='text-6xl md:ml-[415px] ml-[10px] font-bold text-white text-center'><span className="text-red-600">SHOAIB</span> AHAMMED</h1>
            <h2 className='text-white text-xl font-bold md:ml-[422px] ml-[50px]'>I AM A
                <span style={{ color: 'red', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={[' MERN STACK WEB DEVELOPER 💻']}
                        loop={10}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h2>
            <button className="btn bg-red-600 text-white md:ml-[610px] ml-[160px] md:mt-3 mt-5"><a href="https://drive.google.com/file/d/1fK4-kjMeT2yH2F777WTWvaeZfqN3wsgh/view?usp=share_link">DOWNLOAD RESUME</a></button>
        </div>
    );
};

export default Home;