import { motion } from 'framer-motion'

const BackgroundCicle = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                animation: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ['20%', '20%', '50%', '20%']
            }}
            transition={{ duration: 2.5 }}
            className="relative flex justify-center items-center"
        >
            <div className=" absolute border border-[#F7AB0A] rounded-full opacity-20 lg:h-[650px] lg:w-[650px] h-[375px] w-[375px] mt-52 animate-pulse" />
       {/*     <div className=" absolute border border-[#444444] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
            <div className=" absolute border border-[#444444] rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
            <div className=" absolute border border-[#444444] rounded-full h-[500px] w-[500px] mt-52 animate-ping" />
            <div className=" absolute border border-[#F7AB0A] rounded-full opacity-20 lg:h-[650px] lg:w-[650px] h-[375px] w-[375px] mt-52 animate-pulse" />
            <div className=" absolute border border-[#444444] rounded-full h-[800px] w-[800px] mt-52 animate-ping" />*/} 
        </motion.div>
    )
}

export default BackgroundCicle
