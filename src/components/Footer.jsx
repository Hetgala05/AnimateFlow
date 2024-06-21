import React from "react";

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Data-Finance</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <i class="fa fa-facebook"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-linkedin"></i>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
          <div>
              <h6 className='font-medium text-gray-400'>Solutions</h6>
              <ul>            
                  
                  <a href="./Analytics"><li className='py-2 text-sm'>Analytics</li></a>
                  <a href="#"><li className='py-2 text-sm'>Marketing</li></a>
                  <a href="#"><li className='py-2 text-sm'>Commerce</li></a>
                  <a href="#"><li className='py-2 text-sm'>Insights</li></a>     
              </ul>
          </div>
          <div>
              <h6 className='font-medium text-gray-400'>Support</h6>
              <ul>
                  <a href="#"><li className='py-2 text-sm'>Pricing</li></a>
                  <a href="#"><li className='py-2 text-sm'>Documentation</li></a>
                  <a href="#"><li className='py-2 text-sm'>Guides</li></a>
                  <a href="#"><li className='py-2 text-sm'>API Status</li></a>       
              </ul>
          </div>
          <div>
              <h6 className='font-medium text-gray-400'>Company</h6>
              <ul>
                  <a href="#"><li className='py-2 text-sm'>About</li></a>
                  <a href="#"><li className='py-2 text-sm'>Blog</li></a>
                  <a href="#"><li className='py-2 text-sm'>Jobs</li></a>
                  <a href="#"><li className='py-2 text-sm'>Press</li></a>
                  <a href="#"><li className='py-2 text-sm'>Careers</li></a>      
              </ul>
          </div>
          <div>
              <h6 className='font-medium text-gray-400'>Legal</h6>
              <ul>
                  <a href="#"><li className='py-2 text-sm'>Claim</li></a>
                  <a href="#"><li className='py-2 text-sm'>Policy</li></a>
                  <a href="#"><li className='py-2 text-sm'>Terms</li></a>    
              </ul>
          </div>
      </div>
    </div>
  );
};

export default Footer;
