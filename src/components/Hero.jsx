import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {

    return(
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] h-screen w-full mx-auto text-center flex flex-col justify-center">
                <p className="text-[#] font-bold uppercase">
                    Growing with data analytics
                </p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-3 ">
                    Grow with data.
                </h1>
                <div className="flex justify-center items-center">
                    <p className=" md:text-5xl sm:text-4xl text-xl font-bold">
                        Fast, flexible financing for 
                    </p>
                    <ReactTyped 
                    className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                        strings ={['BTC','BTB','SASS']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className="text-gray-500 md:text-2xl text-xl font-bold my-4 ">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
                <button className="w-[200px] my-6 py-3 bg-[#00df9a] text-black rounded-md mx-auto ">Get started</button>
                
            </div>
        </div>
    )

}

export default Hero;