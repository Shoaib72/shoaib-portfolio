import React from 'react';
import pic from '../../Assets/pic.jpg';
import { Typewriter } from 'react-simple-typewriter'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

const AboutMe = () => {
    return (
        <div className="bg-black shadow-xl absolute top-[190px] md:top-[200px] ml-[50px] md:ml-[300px] md:flex md:gap-[80px]">
            <img src={pic} alt="" className='md:h-[300px] md:w-[300px] h-[150px] w-[150px]' />
            <div>
                <h1 className="text-3xl font-bold text-red-600"><span className="text-white">SHOAIB</span> AHAMMED</h1>
                <h2 className='text-red-600 font-bold text-xl'>MERN
                    <span style={{ color: 'white', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={[' STACK WEB DEVELOPER 💻']}
                            loop={50}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h2>
                <p className="text-white mt-5">Hello, my name is shoaib. I have been developing
                    different <br></br>
                    websites and web applications using MERN stack. I have done<br></br>
                    couple of user friendly projects. I have completed my bachelors<br></br>
                    in Computer Science & Engineering from Daffodil International<br></br> University. I have good working experience with HTML5, CSS3,<br></br> Javascript, React, Express.js, Node.js, MongoDB, Tailwind, <br></br>Bootstrap and many more.</p>
                <div className="py-2 flex gap-6 w-[125px]">
                    <a href="https://www.facebook.com/shoaibdacapo/"><FaFacebook className='text-red-600' size={25}></FaFacebook></a>
                    <a href="https://github.com/Shoaib72"><FaGithub className='text-red-600' size={25}></FaGithub></a>
                    <a href="https://www.linkedin.com/in/shoaib-ahammed/"><FaLinkedin className='text-red-600' size={25}></FaLinkedin></a>
                </div>
            </div>
        </div >
    );
};

export default AboutMe;