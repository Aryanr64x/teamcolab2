import Navbar from "./Navbar";
import { motion } from "framer-motion";
import client from "../../sanity/client";
import { useState } from "react";

const Hero = () => {

    const [formSubmitted, setFormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const email = '';

    const submit = () => {                                                               
        setLoading(true)
        if (email.length !== 0) {
            const doc = {
                _type: 'emailid',
                emailid: email,
            }

            client.create(doc).then((res) => {
                console.log("Thanks for giving us your email")
                setFormSubmitted(true)
                setLoading(false)
            })
        }else{
            console.log("Entered too short email id ")
        }
    }


    return (
        <div className="px-2 hero  text-white min-h-screen">
            <Navbar isHome={true} />
            <div className="mt-40 max-w-5xl mx-auto flex">
                <div className="   lg:basis-1/2">
                    <motion.h1 initial={{ translate: -40, opacity: 0 }} animate={{ translateX: 40, opacity: 1 }} className="text-4xl sm:text-5xl font-bold" transition={{ duration: 0.5 }}>
                        Instant Collaboration for Remote Teams
                    </motion.h1>
                    <motion.div className="font-normal mt-4 text-xl " initial={{ translate: -40, opacity: 0 }} animate={{ translateX: 40, opacity: 1 }} transition={{ duration: 0.5 }}>
                        All In one place for your remote team to chat ,collaborate and track project progress
                    </motion.div>
                    {
                        (formSubmitted) ? (
                            <motion.div  initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-teal-600 px-4 py-6 mt-8 rounded-sm">
                                Thanks for registering your email !. 
                            </motion.div>
                        ) : (<div className="ml-2 mt-8 flex  flex-col items-end sm:flex-row ">
                            <input onChange={(e) => { email = e.target.value }} className="mr-2 py-2 px-2 rounded w-full sm:w-80 text-black" type="email" placeholder="Enter your email" />
                            <button disabled={loading} onClick={submit} className="bg-primary text-white px-4 py-2 rounded mt-2 sm:mt-0 hover:bg-opacity-80 transition-all duration-500"> Get Early Access </button>
                        </div>)
                    }
                </div>

            </div>
        </div>
    )
}

export default Hero;