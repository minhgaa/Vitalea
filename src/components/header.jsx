import React, { useState }  from 'react'
import {Link} from 'react-router-dom'
const Header = () => {

    const [inputValue, setInputValue] = useState('');

    // Hàm xử lý khi giá trị của TextField thay đổi
    const handleChange = (e) => {
        setInputValue(e.target.value); // Cập nhật state với giá trị mới
    };
    return (
        <header>
            <div className=" h-[7.5%] w-screen flex items-center justify-between">
                <label className="pl-7 font-sofadi text-xl text-customBlue">
                    Vitaléa
                </label>
                <div className="flex items-center pr-7">
                    <div className="mr-5 flex items-center h-7 w-64 rounded-full border-[0.5px] border-gray-500 has-[:focus]:ring has-[focus]:ring-violet-300">
                        <button>
                            <img src="src/assets/search.svg" className='mr-2 ml-3 w-4 h-4'>
                            </img>
                        </button>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleChange}
                            className="border w-full text-sm border-gray-50 rounded-full focus:outline-none"
                            placeholder="Search"
                        />
                    </div>
                    <button>
                        <img src="src/assets/notiIcon.svg" className="w-7 h-7 mr-3" />
                    </button>
                    <button className="flex items-center justify-center  w-7 h-7 rounded-full border border-gray-400">
                        <img src="src/assets/avatar.png" className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header