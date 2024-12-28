import React, { useState } from "react"
import { Link } from "react-router-dom"
const NavItem = ({ item }) => {
	const { label, icon, active, link } = item
	function CustomComponent() {
		return (
			<Link to={`${link}`} className="mt-10 h-[37px] sm:w-[60px] md:w-[180px] rounded-md bg-white flex sm:justify-center md:justify-start items-center">
				<img src={icon}
					className="ml-5 w-[20px] h-[20px] mr-3" />
				<label className="hidden md:block font-inter text-sm">
					{label}
				</label>
			</Link>
		);
	}
	function CustomClickedComponent() {
		return (
			<Link to={`${link}`} className="mt-10 h-[37px] sm:w-[60px] md:w-[180px] rounded-md bg-blue-50 flex sm:justify-center md:justify-start items-center">
				<img src={icon}
					className="ml-5 w-[20px] h-[20px] mr-3" />
				<label className="hidden md:block font-inter text-base">
					{label}
				</label>
			</Link>
		);
	}
	return (
		<li
			className="h-[37px] w-full ">
			{active ? <CustomClickedComponent /> : <CustomComponent />}
		</li>
	)
}

export default NavItem
