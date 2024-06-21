import React,{useState} from "react";

const Navbar = () => {

    const[nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
}

    return(
        <div className="text-white max-w-[1240px] h-24 flex justify-between mx-auto items-center px-4 ">
            <h1 className="uppercase font-bold text-3xl text-[#00df9a]">Data-Finance</h1>
            <ul className="hidden md:flex">
                <a href="#"><li className="p-4 font-bold">Home</li></a>
                <a href="#"><li className="p-4 font-bold">Company</li></a>
                <a href="#"><li className="p-4 font-bold">Resources</li></a>
                <a href="#"><li className="p-4 font-bold">About</li></a>
                <a href="#"><li className="p-4 font-bold">Contact</li></a>
            </ul>
        
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <i class="fa fa-times text-2xl"></i> : <i class="fa fa-bars text-2xl"></i>}
            </div>
            <div className={!nav ? "fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-800 bg-[#000300] m-4 ease-in-out duration-500" : "fixed left-[-100%]"}>
                <h1 className="uppercase font-bold text-3xl text-[#00df9a] mb-4">Data-Finance</h1>
                <ul>
                    <li className="py-4 uppercase border-b border-b-gray-600 ">Home</li>
                    <li className="py-4 uppercase border-b border-b-gray-600 ">Company</li>
                    <li className="py-4 uppercase border-b border-b-gray-600 ">Resources</li>
                    <li className="py-4 uppercase border-b border-b-gray-600 ">About</li>
                    <li className="py-4 uppercase">Contact</li>
                </ul>
            </div>

        </div>
    )

}

export default Navbar;
