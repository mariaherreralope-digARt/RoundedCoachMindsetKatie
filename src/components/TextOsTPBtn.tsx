import { section } from "motion/react-client";
import { motion } from "framer-motion";

export default function TextOsTPBtn() {
  return (
  <section className="relative bg-lighter pb-8 md:pb-0 md:py-0 flex justify-center items-center h-full md:h-[70vh] overflow-hidden ">
      <motion.div
        className="relative z-10  text-dark text-center px-10 py-8 max-w-3xl "
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* <p className="oversection text-darker mb-6">
          Visit our studio
        </p> */}
        <h2 className="heading text-dark md:text-3xl  mb-6">
          When you understand your energy, you unlock a new version of your life.
        </h2>
       
                 <p className="paragraph text-center  text-darker pb-4 ">
                 Katie’s channel and work are built around making spiritual concepts simple, practical, and accessible — even for complete beginners. She believes spirituality isn’t something to be performed; it’s something to be lived. It’s the quiet choices you make daily. The mindset shifts that change everything. The moments when you allow yourself to slow down, reconnect, and listen.</p>
       
      
 

     <button className="w-48 btn-rounded">Contact Katie</button>
      </motion.div>
      </section>
  );
}