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
import Header1 from "../components/header1";

const Landing = () => {
    const [zoomIndex, setZoomIndex] = useState(0);

    const images = [
        { src: "src/assets/internal.png", label: "Internal medicine" },
        { src: "src/assets/obste.png", label: "Obstetrics & gynecology" },
        { src: "src/assets/pedia.png", label: "Pediatrics" },
        { src: "src/assets/Dermatology.jpg", label: "Dermatology" },
        { src: "src/assets/Cardiology.jpg", label: "Cardiology" },
        { src: "src/assets/Oncology.jpg", label: "Oncology" },
        { src: "src/assets/Rehabilitation.jpg", label: "Rehabilitation" },

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
        <div className="pl-5 pr-5 xl:pl-20 xl:pr-20 w-full h-full bg-customBlue1 overflow-x-hidden">
            <div className="flex h-[9%] items-center justify-between">
                <Header1/>
            </div>
            <div className="w-full flex flex-col items-center pt-10 h-[90%] pb-10 pr-20 pl-20 rounded-2xl bg-white">
                <img src="src/assets/bg.svg"
                    className="w-[90%] h-[70%]" />
                <div className="border rounded-md w-1/2 p-2 ">
                    <input className="w-full outline-none" type="text" placeholder="Nhập vào triệu chứng của bạn..."/>
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
                <div className="mt-10 h-[700px] w-[100%] overflow-x-scroll overflow-y-hidden xl:text-customBlue1 text-white font-cabin text-xl">
                    <div className="w-[2000px] h-full flex space-x-8">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`relative transition-transform duration-500 ${index === zoomIndex ? 'scale-110' : 'scale-100'
                                    }`}
                            >
                                <img src={image.src} alt={image.label} className="h-[300px] rounded-2xl w-[250px]" />
                                <h3 className="pl-6  absolute xl:mt-[-10%] bottom-[8%]">{image.label}</h3>
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
            <div className="h-[700px]   p-20 flex flex-col items-center ">
                <span className="font-cabin text-4xl text-white">Our 100+ doctors with extensive experience.</span>
                <div className="w-full overflow-x-scroll h-full">
                    <Doctorlist />
                </div>
            </div>
        </div>
    )
}
export default Landing