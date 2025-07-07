import React from 'react';
import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[600px] ">
                <img
                    src={banner1}
                    className="w-full" />
                    
                <div className="absolute mt-40 text-white w-[500px] pl-5 gap-3 h-full bg-linear-to-r from-[#151515] to-[rgba(21, 21, 21, 0) ] ">
                    <h3 className='text-6xl font-bold'>Affordable Price For Car Servicing</h3>
                    <p className='my-[30px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className='btn mr-3 bg-[#FF3811]'>Discover More</button>
                        <button className='btn'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-3">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[600px]">
                <img
                    src={banner2}
                    className="w-full" />
                <div className="absolute mt-40 text-white w-[500px] pl-5 gap-3 h-full bg-linear-to-r from-[#151515] to-[rgba(21, 21, 21, 0) ] ">
                    <h3 className='text-6xl font-bold'>Affordable Price For Car Servicing</h3>
                    <p className='my-[30px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className='btn mr-3 bg-[#FF3811]'>Discover More</button>
                        <button className='btn'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-3">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[600px]">
                <img
                    src={banner3} />
                <div className="absolute mt-40 text-white w-[500px] pl-5 gap-3 h-full bg-linear-to-r from-[#151515] to-[rgba(21, 21, 21, 0) ] ">
                    <h3 className='text-6xl font-bold'>Affordable Price For Car Servicing</h3>
                    <p className='my-[30px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className='btn mr-3 bg-[#FF3811]'>Discover More</button>
                        <button className='btn'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-3">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[600px]">
                <img
                    src={banner4}
                    className="w-full" />
                <div className="absolute mt-40 text-white w-[500px] pl-5 gap-3 h-full bg-linear-to-r from-[#151515] to-[rgba(21, 21, 21, 0) ] ">
                    <h3 className='text-6xl font-bold'>Affordable Price For Car Servicing</h3>
                    <p className='my-[30px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className='btn mr-3 bg-[#FF3811]'>Discover More</button>
                        <button className='btn'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-3">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;