import React from 'react';
import P1 from './../../Assets/P1.PNG'
import P2 from './../../Assets/P2.PNG'
import P3 from './../../Assets/P3.PNG'

const Projects = () => {
    return (
        <div>
            <h2 className="text-3xl text-red-600 font-bold text-center absolute top-[150px] md:ml-[600px]">MY PROJECTS</h2>
            <div className='absolute top-[200px] flex md:gap-[40px] gap-[22px] md:ml-[260px]'>
                <div className="card md:w-64 w-36 bg-black shadow-xl">
                    <figure><img src={P1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">Skyhype Services</h2>
                        <p className="text-white">Online Service Providor App</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-red-600"><a href="https://sky-hype-f2075.web.app/">View Project</a></button>
                        </div>
                    </div>
                </div>
                <div className="card md:w-64 w-36 bg-black shadow-xl">
                    <figure><img src={P2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">Gnosis Web App</h2>
                        <p className="text-white">Online EduTech</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-red-600"><a href="https://gnosis-web-app.web.app/">View Project</a></button>
                        </div>
                    </div>
                </div>
                <div className="card md:w-64 w-36 bg-black shadow-xl">
                    <figure><img src={P3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">QuizQuark</h2>
                        <p className="text-white">Online Quiz Web App</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-red-600"><a href="https://prismatic-starlight-792202.netlify.app/">View Project</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;