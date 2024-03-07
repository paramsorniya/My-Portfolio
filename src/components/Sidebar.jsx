import React, { useState } from 'react'
import "./Sidebar.scss"
import Links from './Links'
import { motion} from 'framer-motion'
import ToggleButton from './ToggleButton'
const variants = {
  open:{
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    }
  },
  closed:{
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness:400,
      damping: 40,
    }
  }
}
const Sidebar = () => {


  const [open,setOpen] = useState(false)

  
  return (
    <motion.div className='sidebar' animate ={open? "open": "closed"}>
        <motion.div className='bg' variants={variants}>
            <Links></Links>
        </motion.div>
        <ToggleButton setOpen={setOpen}></ToggleButton>
     </motion.div>
  )
}

export default Sidebar;
