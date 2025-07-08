import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col-2 ">
                <div className=' relative'>
                    <img className='w-3/4' src={person}/>
                    <img className='w-1/2 absolute right-5 top-1/2' src={parts} />
                </div>
                <div>
                    <h4 className='text-[#FF3811] font-bold'>About Us</h4>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br /> <br /> the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="btn btn-primary bg-[#FF3811]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;