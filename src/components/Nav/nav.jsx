/* eslint-disable react/prop-types */
import NavItem from './NavItem'
import { useEffect, useState } from 'react'

const NavItemsContainer = ({ items }) => (

	<>
		{items.map((item, index) => (
			<NavItem item={item} key={index} />
		))}
	</>
)
const Nav = ({ items }) => {
	return (
		<nav className='w-[100%] h-auto flex justify-center items-center'>
			<ul className="  ">
				<NavItemsContainer items={items} />
			</ul>
		</nav>
	)
}
export default Nav
