import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({ isHome }) => {
 
    const [dropdown, setDropDown] =  useState(false)

    return (

        <div className="navbar py-4">
            <div className="mx-auto max-w-5xl flex items-center justify-between ">
                <div className="font-bold text-3xl">
                    team.
                </div>
                <div className="font-semibold   hidden sm:flex sm:items-center">
                    <a href="#" className="mr-4"> Products </a>
                    <a href={'/blog'} className="mr-4"> Blog </a>
                    <a href="#" className="mr-4"> Contact </a>
                    <a href="#" className="mr-4"> Login </a>
                    <button className="bg-slate-700 px-3 py-2 rounded-sm"> Get Access </button>

                </div>
                <div className="sm:hidden ">

                    <svg  onClick={()=>{setDropDown(!dropdown)}} className={
                        (isHome) ? 'h-6 fill-white cursor-pointer' : 'h-6 fill-black cursor-pointer'
                    } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                </div>
            </div>
           <motion.div  animate={{translateY: (dropdown) ? 0 : -32, opacity: (dropdown) ? 1 : 0 }}  transition={{duration: 0.5}} className="absolute mt-2 bg-white ">
           <div className={(dropdown) ? 'flex flex-col sm:hidden ': 'hidden'}>
                <a href="#" className="mr-4 font-semibold"> Products </a>
                <a href="#" className="mr-4 font-semibold"> Blog </a>
                <a href="#" className="mr-4 font-semibold"> Contact </a>
                <a href="#" className="mr-4 font-semibold"> Login </a>


            </div>
           </motion.div>

        </div>
    );
}

export default Navbar;