import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


function Header(){
	const [navOpen, setNavOpen] = useState(false);
	const navHandler = () => {
		const navmenu = document.getElementById('navigation-menu');
		if(navOpen){
			navmenu.classList.remove('hidden');
			setNavOpen(false);
		}
		else{
			navmenu.classList.add('hidden');
			setNavOpen(true);
		}
	};
	return(
		<header className="bg-white border-b-2 border-slate-200 flex flex-col md:flex-row items-center justify-around">
			<div className="flex flex-row items-center justify-around w-full md:w-1/2">
				<h1 className="text-xl text-slate-800 font-bold p-5 md:p-3">Gaming Store</h1>
				<button className="block md:hidden text-2xl border-2 border-slate-500 p-3" onClick={() => navHandler()}>☰</button>
			</div>
			<nav className="w-full md:w-1/2 p-3 md:p-2">
				<ul id="navigation-menu" className="hidden md:flex flex-col md:flex-row gap-3 w-full">
					<li className="text-lg text-slate-700 font-medium rounded-xl p-3 md:p-5 hover:bg-green-200"><Link to="/">Home</Link></li>
					<li className="text-lg text-slate-700 font-medium rounded-xl p-3 md:p-5 hover:bg-green-200"><Link to="/">Shop</Link></li>
					<li className="text-lg text-slate-700 font-medium rounded-xl p-3 md:p-5 hover:bg-green-200"><Link to="/faq">FAQ</Link></li>
					<li className="text-lg text-slate-700 font-medium rounded-xl p-3 md:p-5 hover:bg-green-200"><Link to="/contact">Contact</Link></li>
				</ul>
			</nav>
		</header>
		);
}


export default Header;