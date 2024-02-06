import Gamingroom from '../assets/gaming room.jpg';
import { motion } from 'framer-motion';
function Homepage(){
	return(
		<main>
			<div id="introduction" className="p-5 flex flex-col-reverse md:flex-row justify-center items-center">
				<motion.div initial={{x:-800}} animate={{x:0}} transition={{delay: 2}} className="w-full md:w-1/2 flex flex-col gap-3 p-2 md:p-5 bg-white">
					<h2 className="text-2xl font-medium">Unlock Limitless Excitement: Leveling Up Your Gaming Experience</h2>
					<p className="text-sm text-slate-500">
						Step into a world where gaming meets artistry. Our store, 
						a symphony of technology and design, invites you to explore 
						unparalleled excitement. With every click, our products 
						unlock a gateway to limitless adventures, blending innovation 
						seamlessly into your gaming journey.
					</p>
					<div className="flex flex-row gap-5">
						<button className="border-2 border-slate-300 px-4 py-2 rounded-lg bg-green-300 text-white">Shop Now!</button>
						<button className="border-b-2 border-black">Show Reel</button>
					</div>
				</motion.div>
				<motion.div initial={{opacity: 0.8}} animate={{opacity:1}} transition={{delay: 3}} className="w-full md:w-1/2">
					<img src={Gamingroom} className="border-2 border-white rounded-xl w-full md:w-2/3 md:left-1/2 transform md:translate-x-1/3" alt="Gaming Room"/>
				</motion.div>
			</div>
		</main>
		)
}

export default Homepage;