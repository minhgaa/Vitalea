/* eslint-disable react/prop-types */
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useState } from 'react';
import axiosInstance from '../config/api';
import getWeek from '../helpers/getWeek';

const Dropdownmenu = ({ setLoading, setAppointments, data, setSelectMonth, setSelectType }) => {
    const [label, setLabel] = useState(data[0]); 
    const [isOpen, setIsOpen] = useState(false); 
   
    const handleSelect = async (item) => {
        setLabel(item);
        setIsOpen(false);
        if (setSelectMonth) setSelectMonth(item.split(" ")[1])
        if (setSelectType) {
            setSelectType(item)
            const week = getWeek(new Date())
            try {
                switch (item) {
                    case 'This day': {
                        break 
                    }
                    case 'This week': {
                        const response = await axiosInstance.get(`/appointment/get/by-week?startDate=${week.start}&endDate=${week.end}`)
                        setAppointments(response.data)
                        break
                    }
                }
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
    };

    return (
        <Menu as="div" className=" relative inline-block text-left">
            <div>
                <MenuButton
                    className="inline-flex w-full pt-[2px] pb-[2px] px-1 justify-center gap-x-1.5 rounded-md bg-white text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
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
