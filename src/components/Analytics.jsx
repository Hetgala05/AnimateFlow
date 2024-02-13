import React from "react";
import Laptop from'../Assets/laptop.jpg'

const Analytics = () => {

    return(
        <div className="lg:flex text-black bg-white block w-full h-auto justify-center py-16 px-4 ">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2" >
                <img className="my-auto" src={Laptop} alt="laptop" /> 
                <div className="flex flex-col items-start my-auto">

                    <p className="uppercase text-[#00df91] font-bold" >Data Analytics Dash board</p>

                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-4">
                        Manage Data Analytics Centrally
                    </h1>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi corporis tempora nihil qui necessitatibus  quae provident soluta. Natus neque dignissimos asperiores earum accusantium voluptate est consectetur sed qui veritatis.</p>

                    <button className="md:mx-0 mx-auto w-[200px] my-6 py-3 bg-black text-[#00df9a] rounded-md ">Get started</button>
                </div>
            </div>
        
        </div>
    )

}

export default Analytics;