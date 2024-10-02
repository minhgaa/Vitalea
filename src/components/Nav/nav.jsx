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
const 	Nav = ({ items}) => {
	return (
    <nav className='w-[100%] h-auto flex justify-start items-center'>
      <ul className="lg:ml-5 mt-5  ">
					<NavItemsContainer items={items} />
				</ul>
    </nav>
	)
}
export default Nav
