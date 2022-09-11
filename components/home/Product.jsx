import Image from "next/image"; 
import dashboard from '../../styles/images/dashboard.png'
import dashboard2 from '../../styles/images/dashboard2.png'
import { motion } from "framer-motion";
const Product = ()=>{
    console.log(dashboard)
    return (
        <div className="mt-40 px-2 ">
            <div className="max-w-5xl mx-auto  ">
                    <div className="flex items-center">
                        <motion.div  initial={{ translate: -40, opacity: 0 }} whileInView={{ translateX: 40, opacity: 1 }} transition={ { duration: 0.5 } } className="basis-1/2">
                            <h2 className="text-4xl font-semibold">
                                Your Hub For 
                                Team Work 
                            </h2>
                            <div className="mt-2">
                            Project discussions, important documents, free food announcements: they all live tidily together in Team. With your team and information in one easily searchable place, collaborating  online is as easy as collaborating in person.
                            </div>
                            <div className="mt-4 font-bold cursor-pointer text-primary">
                                Learn More 
                            </div>
                        </motion.div>
                     
                     
                        <img  style={{  marginRight: -2000 }}   src={ dashboard2.src } alt="Image of the app dashboard" />

                        
                    </div>
            </div>
        </div>
    );
}

export default Product;