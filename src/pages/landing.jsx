import { Button } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom"
import Slider from "react-slick";
import { CiCirclePlus } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowCircleRight } from "react-icons/fa";
import Doctorlist from "../components/doctorcard";
import { useState } from "react";
import { useAuthContext } from '../context/AuthContext';

const Landing = () => {
    const [zoomIndex, setZoomIndex] = useState(0);

    const images = [
        { src: "src/assets/internal.png", label: "Internal medicine" },
        { src: "src/assets/obste.png", label: "Obstetrics & gynecology" },
        { src: "src/assets/pedia.png", label: "Pediatrics" },
        { src: "src/assets/internal.png", label: "Internal medicine" },
    ];

    const handleNextZoom = () => {
        setZoomIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const [activeButton, setActiveButton] = useState(null);
    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };
    const getButtonClasses = (buttonId) =>
        `mr-5 flex flex-col justify-start p-5 h-full w-[25%] font-cabin font-semibold text-lg rounded-xl customShadow snap-start transition-transform duration-300 ${activeButton === buttonId ? ' transform scale-110 text-black bg-customBlue1' : 'bg-white text-black'
        }`;
    const { authUser } = useAuthContext()
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
        <div className="pl-5 pr-5 xl:pl-20 xl:pr-20 w-screen h-screen bg-customBlue1 overflow-x-hidden">
            <div className="flex h-[9%] items-center justify-between">
                <Link to='/' className="font-sofadi text-xl text-white">
                    Vitaléa
                </Link>
                {authUser ? <Link to={authUser?.role === 'USER' ? '/user/order' : '/mainpage'}><img src={`http://localhost:3000/${authUser.image}`} className="w-7 h-7 rounded-full object-cover" /></Link> : <Link
                    to="/login"
                    type="button"
                    className="w-24 h-[60%] font-bold text-blue-950 flex justify-center items-center rounded-full bg-white">
                    Log in
                </Link>}
            </div>
            <div className="w-full flex flex-col items-center pt-10 h-[90%] pb-10 pr-20 pl-20 rounded-2xl bg-white">
                <img src="src/assets/bg.svg"
                    className="w-[90%] h-[70%]" />
                <button className=" max-w-[600px] mt-[-7%] w-[60%] text-lg rounded-full h-[70px] font-cabin bg-black text-white">Book your appointment online</button>
                <div className="w-full h-[35%] flex mt-5  pt-8">
                    <span className="ml-[6%] h-full w-[25%] font-cabin font-bold text-2xl">Best service</span>
                    <button className={getButtonClasses(1)}
                        onClick={() => handleButtonClick(1)}>
                        <div className="text-start">
                            Online<br />Booking
                        </div>
                        <div className="pt-[10%] flex items-center w-full flex-row justify-between">
                            <CiCirclePlus className="w-10 h-10" />
                            <span className="mt-4">1</span>
                        </div>
                    </button>
                    <button className={getButtonClasses(2)}
                        onClick={() => handleButtonClick(2)}>
                        <div className="text-start">
                            Diverse<br />specialties
                        </div>
                        <div className="pt-[10%] flex items-center w-full flex-row justify-between">
                            <CiCirclePlus className="w-10 h-10" />
                            <span className="mt-4">2</span>
                        </div>
                    </button>
                    <button className={getButtonClasses(3)}
                        onClick={() => handleButtonClick(3)}>
                        <div className="text-start">
                            100+<br />Doctors
                        </div>
                        <div className="pt-[10%] flex items-center w-full flex-row justify-between">
                            <CiCirclePlus className="w-10 h-10" />
                            <span className="mt-4">3</span>
                        </div>
                    </button>
                </div>
            </div>
            <div className=" xl:pl-20 xl:pr-20 pt-16  pb-16 pl-10 pr-8 flex items-center justify-between">
                <div className="w-[60%] mb-20 h-auto flex flex-col text-white font-cabin">
                    <span className="pb-10 text-7xl"> Easy booking<br /> appointment online</span>
                    <ul className="ml-8 list-disc mb-10 space-y-5 text-3xl ">
                        <li>Find the right doctor for your condition.</li>
                        <li>Booking based on your free time.</li>
                        <li>Simple interface, easy to use.</li>
                    </ul>
                    <button className="w-[200px] h-[50px] text-xl rounded-full bg-white text-customBlue1">Booking</button>
                </div>
                <img src="src/assets/booking.png"
                    className="max-h-[600px]" />
            </div>
            <div className="p-14 flex flex-col bg-white h-[95%] text-customBlue1 rounded-2xl w-full">
                <span className="mb-4 text-7xl">Variety of specialties</span>
                <span className="text-3xl">Every Specialty, A Step Towards Excellence.</span>
                <div className="mt-10 h-[700px] w-[100%] overflow-x-scroll xl:text-customBlue1 text-white font-cabin text-xl">
                    <div className="w-[2000px] h-full flex space-x-8">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`relative transition-transform duration-500 ${index === zoomIndex ? 'scale-110' : 'scale-100'
                                    }`}
                            >
                                <img src={image.src} alt={image.label} className="max-h-[350px]" />
                                <span className="pl-6 absolute xl:mt-[-10%] bottom-[8%]">{image.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full h-[100px] flex justify-end">
                    <button onClick={handleNextZoom}>
                        <img src="src/assets/nextb.png" className="h-8 w-8" alt="Next" />
                    </button>
                </div>
            </div>
            <div className="h-[75%] p-20 pt-20 flex flex-col items-center ">
                <span className="font-cabin text-4xl text-white">Our 100+ doctors with extensive experience.</span>
                <div className="w-full overflow-x-scroll">
                    <Doctorlist />
                </div>
            </div>

            {/* <div className="relative h-[92vh] bg-cover bg-no-repeat bg-[url('https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?t=st=1730818501~exp=1730822101~hmac=68922fb2946fedb7171e0a7f180787ebe548f25a6fa1bd52b184ec2fd67b631e&w=996')]">
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
            </div> */}
        </div>
    )
}
export default Landing