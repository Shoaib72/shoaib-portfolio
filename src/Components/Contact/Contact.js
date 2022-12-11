import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert'
import { Typewriter } from 'react-simple-typewriter'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y6d8pu3', 'template_kawu71i', form.current, 'DhBIPLUegaAXguHjG')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
                swal("Good job!", "Message Sent", "success");
            }, (error) => {
                console.log(error.text);
            });

    };
    return (
        <div className='absolute top-[240px] md:ml-[500px] ml-[10px]'>
            <h1 className='text-white text-xl font-bold md:ml-[80px] ml-[70px] mb-5'>WRITE
                <span style={{ color: 'red', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={[' ME HERE... 💻']}
                        loop={50}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h1>
            <form className='w-96' ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Type your name here" className="input input-bordered w-full" /><br />
                <input type="email" name="user_email" placeholder="Type you email" className="input input-bordered w-full mt-5" />
                <textarea name="message" className="textarea textarea-bordered mt-5 w-full" placeholder="Text"></textarea>
                <button type="submit" value="Send" className='btn bg-red-600 text-white mx-auto ml-[155px] mt-5'>SEND</button>
            </form>
        </div>
    );
};

export default Contact;