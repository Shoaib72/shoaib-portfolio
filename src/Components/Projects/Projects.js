import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import P1 from './../../Assets/P1.PNG'
import P2 from './../../Assets/P2.PNG'
import P3 from './../../Assets/P3.PNG'

const Projects = () => {
    return (
        <div>
            <h2 className="md:text-3xl text-xl text-red-600 font-bold text-center absolute md:top-[200px] top-[140px] md:ml-[520px] ml-[20px]">MY
                <span style={{ color: 'white', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={[' RECENT PROJECTS']}
                        loop={50}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h2>
            <div className='absolute md:top-[250px] top-[190px] md:flex md:gap-[40px] gap-[22px] md:ml-[260px] ml-[20px]'>
                <div className="card md:w-64 w-[325px] bg-black shadow-xl">
                    <figure><img src={P1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">Skyhype Services</h2>
                        <p className="text-white">Online Service Providor App</p>
                        <div className='flex flex-col py-1 my-1'>
                            <a className='border-2px border-red-600 bg-red-600 rounded-lg text-white p-1 font-bold w-[130px] md:mb-1' href="https://sky-hype-f2075.web.app/">VIEW PROJECT</a>
                            <a className='border-2px border-red-600 bg-red-600 rounded-lg text-white p-1 font-bold w-[130px] md:mb-1' href="https://github.com/Shoaib72/sky-hype-client">GITHUB</a>
                            <a className='border-2px border-red-600 bg-red-600 rounded-lg text-white p-1 font-bold w-[130px]' href="https://sky-hype-f2075.web.app/">DETAILS</a>

                        </div>
                    </div>
                </div>
                <div className="card md:w-64 w-[325px] bg-black shadow-xl">
                    <figure><img src={P2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">Gnosis Web App</h2>
                        <p className="text-white">Online EduTech</p>
                        <div className='flex flex-col py-1 my-1'>
                            <a className='border-2px border-red-600 bg-red-600 rounded-lg text-white p-1 font-bold w-[130px] md:mb-1' href="https://gnosis-web-app.web.app/">VIEW PROJECT</a>
                            <a className='border-2px border-red-600 bg-red-600 rounded-lg text-white p-1 font-bold w-[130px] md:mb-1' href="https://github.com/Shoaib72/gnosis-web-app">GITHUB</a>
                            <a className='border-2px border-red-600 bg-red-600 rounded-lg text-white p-1 font-bold w-[130px]' href="https://sky-hype-f2075.web.app/">DETAILS</a>

                        </div>
                    </div>
                </div>
                <div className="card md:w-64 w-[325px] bg-black shadow-xl">
                    <figure><img src={P3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">QuizQuark</h2>
                        <p className="text-white">Online Quiz Web App</p>
                        <div className='flex flex-col py-1 my-1'>
                            <a className='border-2px border-red-600 bg-red-600 rounded-lg text-white p-1 font-bold w-[130px] md:mb-1' href="https://prismatic-starlight-792202.netlify.app/">VIEW PROJECT</a>
                            <a className='border-2px border-red-600 bg-red-600 rounded-lg text-white p-1 font-bold w-[130px] md:mb-1' href="https://github.com/Shoaib72/quiz-quark-web-spp">GITHUB</a>
                            <a className='border-2px border-red-600 bg-red-600 rounded-lg text-white p-1 font-bold w-[130px]' href="https://sky-hype-f2075.web.app/">DETAILS</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;