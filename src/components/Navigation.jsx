
import { motion ,useAnimationControls} from "framer-motion"
import { useState , useEffect } from "react"

const Navigation=()=>{
const [isOpen,setIsOpen]=useState(false)

const ContainCrls=useAnimationControls()
const svgCrls=useAnimationControls()

useEffect(()=>{
    if(isOpen){
        ContainCrls.start("open")
        svgCrls.start("open")
    }else{
        ContainCrls.start("close")
        svgCrls.start("close")
    }
})

const contVar={
    close:{
        width :"5rem",
        transition:{
            type:"spring",
            damping:15,
            duration:0.5
        }
    },
    open :{
        width:"15rem",
        transition:{
            type:"spring",
            damping:25,
            duration:0.5
        }
    }
}

const SvgVariant={
    close:{
        rotate:360,
        transition:{
            duration:0.3
        }
    },
    open:{
        rotate:180,
        transition:{
            duration:0.3
        }

    }
}

const HandleOpCl=()=>{
    setIsOpen(!isOpen)
}
    return (
        <motion.nav variants={contVar} initial="close" animate={ContainCrls} className="bg-neutral-900 flex-col z-10 gap-20 p-5 absolute top-0 left-0 h-full shadow shadow-neutral-800">
            <div className="flex flex-row w-full justify-between place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 p-1 bg-slate-500 rounded-full">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
            </svg>

                <button onClick={HandleOpCl} className="p-1 rounded-full flex">
                <motion.svg variants={SvgVariant} initial="close" animate={svgCrls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 stroke-neutral-200">
                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </motion.svg>

                </button>
            </div>
        </motion.nav>
    )
}

export default Navigation