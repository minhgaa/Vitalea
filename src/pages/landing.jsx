import { Button } from "@headlessui/react";
// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowCircleRight } from "react-icons/fa";
import Header from "../components/header";
import { useState } from "react";
const Landing = () => {
    const navigate = useNavigate()
    const [symptom, setSymptom] = useState('')
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 4,
        infinite: false,
        slidesToScroll: 1
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate(`/doctors/search/?q=${symptom}`)
    }
    return (
        <div className="w-screen overflow-x-hidden">
            <Header />
            <div className="relative h-[92vh] bg-cover bg-no-repeat bg-[url('https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?t=st=1730818501~exp=1730822101~hmac=68922fb2946fedb7171e0a7f180787ebe548f25a6fa1bd52b184ec2fd67b631e&w=996')]">
                <div className="bg-black h-full w-full absolute top-0 left-0 opacity-70" ></div>
                <div className="flex justify-center items-center h-full relative z-10">
                    <div className="w-[50%] text-center">
                        <label className="font-poppin font-bold text-7xl text-white">
                            Keep doctors and loved ones in the loop
                        </label>
                        <label className=" flex mt-5 font-roboto font-bold text-xl text-white">
                            Securely share your comprehensive medical history with doctors and loved ones, for better communication and care
                        </label>
                        <form onSubmit={handleSubmit} className="mt-4 p-4 border border-[#B3B3B3] rounded-md">
                            <input onChange={e => setSymptom(e.target.value)} className="w-full bg-transparent text-white outline-none border-none" type="text" placeholder="Nhập vào triệu chứng của bạn..." />
                        </form>
                    </div>
                </div>
            </div>
            <div className="mt-4 w-[1200px] mx-[auto]">
                <div>
                    <h3 className="font-bold text-2xl">Đặt lịch khám với bác sĩ</h3>
                </div>
                <Slider {...settings}>
                    <div className="mt-6 shadow-md rounded-md border border-[#DEDEDE] !flex flex-col items-center">
                        <div>
                            <img src="../../public/pictures_healthcare/Nhikhoa.webp" />
                        </div>
                        <div>
                            <p className="font-bold text-[18px]">Nguyễn Văn A</p>
                            <p className="text-[#B2B2B2] text-center">Nội tiết</p>
                        </div>
                        <div className="mt-4 p-2 border-top border w-full flex items-center cursor-pointer hover:bg-[#0873BB] hover:text-white duration-150">
                            <Button className="font"><Link to="/doctor-profile/123" >Đặt lịch ngay</Link></Button>
                            <FaArrowCircleRight className="ml-[auto]" />
                        </div>
                    </div>
                    <div className="mt-6 shadow-md rounded-md border border-[#DEDEDE] !flex flex-col items-center">
                        <div>
                            <img src="../../public/pictures_healthcare/Nhikhoa.webp" />
                        </div>
                        <div>
                            <p className="font-bold text-[18px]">Nguyễn Văn A</p>
                            <p className="text-[#B2B2B2] text-center">Nội tiết</p>
                        </div>
                        <div className="mt-4 p-2 border-top border w-full flex items-center cursor-pointer hover:bg-[#0873BB] hover:text-white duration-150">
                            <Button className="font">Đặt lịch ngay</Button>
                            <FaArrowCircleRight className="ml-[auto]" />
                        </div>
                    </div>
                    <div className="mt-6 shadow-md rounded-md border border-[#DEDEDE] !flex flex-col items-center">
                        <div>
                            <img src="../../public/pictures_healthcare/Nhikhoa.webp" />
                        </div>
                        <div>
                            <p className="font-bold text-[18px]">Nguyễn Văn A</p>
                            <p className="text-[#B2B2B2] text-center">Nội tiết</p>
                        </div>
                        <div className="mt-4 p-2 border-top border w-full flex items-center cursor-pointer hover:bg-[#0873BB] hover:text-white duration-150">
                            <Button className="font">Đặt lịch ngay</Button>
                            <FaArrowCircleRight className="ml-[auto]" />
                        </div>
                    </div>
                    <div className="mt-6 shadow-md rounded-md border border-[#DEDEDE] !flex flex-col items-center">
                        <div>
                            <img src="../../public/pictures_healthcare/Nhikhoa.webp" />
                        </div>
                        <div>
                            <p className="font-bold text-[18px]">Nguyễn Văn A</p>
                            <p className="text-[#B2B2B2] text-center">Nội tiết</p>
                        </div>
                        <div className="mt-4 p-2 border-top border w-full flex items-center cursor-pointer hover:bg-[#0873BB] hover:text-white duration-150">
                            <Button className="font">Đặt lịch ngay</Button>
                            <FaArrowCircleRight className="ml-[auto]" />
                        </div>
                    </div>
                    <div className="mt-6 shadow-md rounded-md border border-[#DEDEDE] !flex flex-col items-center">
                        <div>
                            <img src="../../public/pictures_healthcare/Nhikhoa.webp" />
                        </div>
                        <div>
                            <p className="font-bold text-[18px]">Nguyễn Văn A</p>
                            <p className="text-[#B2B2B2] text-center">Nội tiết</p>
                        </div>
                        <div className="mt-4 p-2 border-top border w-full flex items-center cursor-pointer hover:bg-[#0873BB] hover:text-white duration-150">
                            <Button className="font">Đặt lịch ngay</Button>
                            <FaArrowCircleRight className="ml-[auto]" />
                        </div>
                    </div>

                </Slider>
            </div>
            <div className="w-[1200px] mx-auto mt-12">
                <div className="text-center">
                    <p className="font-bold text-[21px]">Đa dạng chuyên khoa khám</p>
                    <p className="text-[#6B7280]">Đặt khám dễ dàng và tiện lợi hơn với đầy đủ các chuyên khoa</p>
                </div>
                <div className="mt-12 flex justify-center">
                    <div className="text-center mr-8">
                        <div className="w-[125px] h-[125px]">
                            <img className="object-cover w-full h-full" src="/pictures_healthcare/Nhikhoa.webp" />
                        </div>
                        <p className="font-bold mt-4">Nhi khoa</p>
                    </div>
                    <div className="text-center mr-8">
                        <div className="w-[125px] h-[125px]">
                            <img className="object-cover w-full h-full" src="/pictures_healthcare/Coxuongkhop.webp" />
                        </div>
                        <p className="font-bold mt-4">Cơ xương khớp</p>
                    </div>
                    <div className="text-center mr-8">
                        <div className="w-[125px] h-[125px]">
                            <img className="object-cover w-full h-full" src="/pictures_healthcare/Dalieu.webp" />
                        </div>
                        <p className="font-bold mt-4">Da liễu</p>
                    </div>
                    <div className="text-center mr-8">
                        <div className="w-[125px] h-[125px]">
                            <img className="object-cover w-full h-full" src="/pictures_healthcare/Hohap.webp" />
                        </div>
                        <p className="font-bold mt-4">Hô hấp</p>
                    </div>
                    <div className="text-center mr-8">
                        <div className="w-[125px] h-[125px]">
                            <img className="object-cover w-full h-full" src="/pictures_healthcare/Noitiet.webp" />
                        </div>
                        <p className="font-bold mt-4">Nội tiết</p>
                    </div>
                </div>
                <div className="mt-12 flex justify-center">
                    <div className="text-center mr-8">
                        <div className="w-[125px] h-[125px]">
                            <img className="object-cover w-full h-full" src="/pictures_healthcare/Nhikhoa.webp" />
                        </div>
                        <p className="font-bold mt-4">Nhi khoa</p>
                    </div>
                    <div className="text-center mr-8">
                        <div className="w-[125px] h-[125px]">
                            <img className="object-cover w-full h-full" src="/pictures_healthcare/Coxuongkhop.webp" />
                        </div>
                        <p className="font-bold mt-4">Cơ xương khớp</p>
                    </div>
                    <div className="text-center mr-8">
                        <div className="w-[125px] h-[125px]">
                            <img className="object-cover w-full h-full" src="/pictures_healthcare/Dalieu.webp" />
                        </div>
                        <p className="font-bold mt-4">Da liễu</p>
                    </div>
                    <div className="text-center mr-8">
                        <div className="w-[125px] h-[125px]">
                            <img className="object-cover w-full h-full" src="/pictures_healthcare/Hohap.webp" />
                        </div>
                        <p className="font-bold mt-4">Hô hấp</p>
                    </div>
                    <div className="text-center mr-8">
                        <div className="w-[125px] h-[125px]">
                            <img className="object-cover w-full h-full" src="/pictures_healthcare/Noitiet.webp" />
                        </div>
                        <p className="font-bold mt-4">Nội tiết</p>
                    </div>
                </div>
                <div className="mt-12 flex justify-center">
                    <div className="text-center mr-8">
                        <div className="w-[125px] h-[125px]">
                            <img className="object-cover w-full h-full" src="/pictures_healthcare/Nhikhoa.webp" />
                        </div>
                        <p className="font-bold mt-4">Nhi khoa</p>
                    </div>
                    <div className="text-center mr-8">
                        <div className="w-[125px] h-[125px]">
                            <img className="object-cover w-full h-full" src="/pictures_healthcare/Coxuongkhop.webp" />
                        </div>
                        <p className="font-bold mt-4">Cơ xương khớp</p>
                    </div>
                    <div className="text-center mr-8">
                        <div className="w-[125px] h-[125px]">
                            <img className="object-cover w-full h-full" src="/pictures_healthcare/Dalieu.webp" />
                        </div>
                        <p className="font-bold mt-4">Da liễu</p>
                    </div>
                    <div className="text-center mr-8">
                        <div className="w-[125px] h-[125px]">
                            <img className="object-cover w-full h-full" src="/pictures_healthcare/Hohap.webp" />
                        </div>
                        <p className="font-bold mt-4">Hô hấp</p>
                    </div>
                    <div className="text-center mr-8">
                        <div className="w-[125px] h-[125px]">
                            <img className="object-cover w-full h-full" src="/pictures_healthcare/Noitiet.webp" />
                        </div>
                        <p className="font-bold mt-4">Nội tiết</p>
                    </div>
                </div>
            </div> */
            <footer className="h-[400px] mt-8 bg-black text-center"><h3 className="text-[64px] font-bold text-white">FOOTER</h3></footer>
        </div>
    )
}
export default Landing