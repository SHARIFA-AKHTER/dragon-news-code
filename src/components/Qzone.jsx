import React from 'react';
import swimmingImg from '../assets/swimming.png'
import ClassImg from '../assets/class.png'
import PlayGroundImg from '../assets/playground.png'
const Qzone = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold mb-6'>Q-Zone</h2>

           <div  className=" py-10 ">
           <div className="card bg-[#F3F3F3] w-96 shadow-lg rounded-lg transition-transform 
           transform hover:scale-105 hover:shadow-2xl m-4 ">
              <figure className="px-10 pt-10">
                <img
                  src={swimmingImg}
                  alt="Swimming"
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Swimming</h2>

              </div>
            </div>

            <div className="card bg-[#F3F3F3] w-96 shadow-lg rounded-lg transition-transform 
            transform hover:scale-105 hover:shadow-2xl m-4 ">
              <figure className="p-6">
                <img
                  src={ClassImg}
                  alt="classImg"
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Class</h2>

              </div>
            </div>

            <div className="card bg-[#F3F3F3] w-96 shadow-lg rounded-lg m-4
             transition-transform transform hover:scale-105 hover:shadow-2xl gap-4">
              <figure className="px-10 pt-10">
                <img
                  src={PlayGroundImg}
                  alt="PlayGroundImg"
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Play Ground</h2>

              </div>
            </div>
           </div>
        </div>
        
    );
};

export default Qzone;