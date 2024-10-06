import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import React, { useState } from 'react';

const Dropdownmenu = ({ initialLabel, data }) => {
    const [label, setLabel] = useState(data[0]); 
    const [isOpen, setIsOpen] = useState(false); 
   
    const handleSelect = (item) => {
        setLabel(item);
        setIsOpen(false);
    };

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {label}
                    {isOpen ? <FaAngleUp className="mt-1" /> : <FaAngleDown className="mt-1" />}
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
            >
                <div className="py-1">
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <MenuItem key={index}>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100"
                                    onClick={() => handleSelect(item)} 
                                >
                                    {item}
                                </a>
                            </MenuItem>
                        ))
                    ) : (
                        <div className="px-4 py-2 text-sm text-gray-700">No items</div>
                    )}
                </div>
            </MenuItems>
        </Menu>
    );
};

export default Dropdownmenu;
