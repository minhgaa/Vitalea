import { useState } from "react";
import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <div className="w-screen h-screen">
            <div className=" h-[7.5%] w-screen flex items-center justify-between" >
                <label className="pl-7 font-sofadi text-xl text-customBlue">
                    Vitaléa
                </label>
                <div className="flex items-center pr-7">
                    <button>
                        <img src="src/assets/notiIcon.svg"
                            className="w-7 h-7 mr-3" />
                    </button>
                    <button className="flex items-center justify-center  w-7 h-7 rounded-full border border-gray-400">
                        <img src="src/assets/avatar.png"
                            className="w-4 h-4" />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-2 h-[90%]">
                <div className="flex justify-center items-center">
                    <div className="w-[80%]">
                        <label className="font-poppin font-bold text-7xl text-customBlue">
                            Your favourite online clinic.
                        </label>
                        <label className=" flex mt-5 font-roboto font-bold text-xl text-[#084D7C]">
                            Start chatting with doctor now
                        </label>
                        <div className="flex mt-10">
                            <Link
                                to="/login"
                                type="button"
                                className="h-[50px] w-[120px] bg-customBlue rounded-full text-white text-l flex justify-center items-center"
                            >
                                Log in
                            </Link>
                            <Link
                                to="/signup"
                                type="button"
                                className="ml-5 h-[50px] w-[120px] bg-white rounded-full text-customBlue border border-customBlue text-l flex justify-center items-center"
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-center items-end ">
                    <img src="src/assets/chat.svg"
                        className="mb-72 mr-auto z-20 h-2/5 w-1/2"
                    />
                    <img src="src/assets/doctor.png"
                        className="ml-7 absolute w-1/3 h-5/6 z-10" />
                    <div className=" absolute w-1/3 h-[30%] bg-customBlue rounded-xl z-0" />
                </div>
            </div>
        </div>
    )
}
export default Landing