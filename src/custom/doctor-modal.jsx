import { useEffect, useState } from "react"
import axios from "axios";
// eslint-disable-next-line react/prop-types
const DoctorModal = ({activeDoctor = {}, handleToggle, setDoctors}) => {
    const [specialization, setSpecialization] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [clinic, setClinic] = useState('')
    const [phone, setPhone] = useState('')
    const [exp, setExp] = useState('')
    const [introduction, setIntroduction] = useState('')
    const [file, setFile] = useState('')
    const handleCheckbox = (e) => {
        if (e.target.checked) {
            setSpecialization(prevState => [...prevState, e.target.value])
        } else {
            setSpecialization(prevState => prevState.filter(state => state !== e.target.value))
        }
    }
    const handleSubmit = async () => {
        try {
            if (Object.keys(activeDoctor).length === 0){
                const data = new FormData()
                data.append('file', file)
                data.append('email', email)
                data.append('phone', phone)
                data.append('password', password)
                data.append('firstName', firstName)
                data.append('lastName', lastName)
                data.append('introduction', introduction)
                data.append('clinic', clinic)
                data.append('experience', parseInt(exp))
                data.append('specialization', specialization.join(', '))
                const response = await axios({
                    method: 'POST',
                    url: 'http://localhost:3000/api/doctor',
                    data,
                    headers: {'Content-Type': 'multipart/form-data'}
                })
                setDoctors(prevState => [...prevState, response.data.newDoctor])
            } else {
                const data = new FormData()
                data.append('id', activeDoctor.id)
                if (file) data.append('file', file)
                data.append('phone', phone || activeDoctor.phone)
                data.append('firstName', firstName || activeDoctor.firstName)
                data.append('lastName', lastName || activeDoctor.lastName)
                data.append('introduction', introduction || activeDoctor.introduction)
                data.append('clinic', clinic || activeDoctor.clinic)
                data.append('experience', parseInt(exp) || activeDoctor.experience)
                data.append('specialization', specialization.join(', ') || activeDoctor.specialization)
                const response = await axios({
                    method: 'PATCH',
                    url: 'http://localhost:3000/api/doctor',
                    data,
                    headers: {'Content-Type': 'multipart/form-data'}
                })
                setDoctors(prevState => {
                    return prevState = prevState.map(item => (item.id === response.data.id ? response.data : item));
                })
            }
            handleToggle()
        } catch (err){
            console.log(err)
        }
    }
    useEffect(() => {
        if (Object.keys(activeDoctor).length) {
            setSpecialization(activeDoctor.specialization.split(','))
        }
    }, [activeDoctor])
    return (
            <div className="w-screen">
                <div className="fixed top-0 left-0 h-screen w-screen bg-black opacity-70">

                </div>
                <div  className="fixed top-0 right-0 left-0 z-50 justify-center items-center md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative h-screen p-4 max-h-full z-[99]">
            <div className="w-[500px] overflow-y-scroll h-[500px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg shadow">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900">
                        Thông tin bác sĩ
                    </h3>
                    <button onClick={handleToggle} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="p-4 md:p-5 space-y-4">
                    <div>
                        <label htmlFor="img" className="block w-[100px] h-[100px] mx-auto rounded-full overflow-hidden cursor-pointer">
                            <img className="w-full h-full object-fill" src={file && URL.createObjectURL(file) || `https://i.pinimg.com/564x/29/b8/d2/29b8d250380266eb04be05fe21ef19a7.jpg`} alt="avatar" />
                        </label>
                        <input onChange={e => setFile(e.target.files[0])} className="hidden" id = "img" type="file"/>
                    </div>
                    <div className="flex">
                        <div className="w-1/2 flex flex-col">
                            <label htmlFor="firstName">Tên</label>
                            <div className="mt-2 border border-[#B3B3B3] rounded-md p-4">
                                <input id="firstName" type="text" className="w-full outline-none border-none" value={firstName || activeDoctor.firstName} onChange={e => setFirstName(e.target.value)}/>
                            </div>
                        </div>
                        <div className="ml-4 w-1/2 flex flex-col">
                            <label htmlFor="lastName">Họ</label>
                            <div className="mt-2 border border-[#B3B3B3] rounded-md p-4">
                                <input id="lastName" type="text" className="w-full outline-none border-none" value = {lastName || activeDoctor.lastName} onChange={e => setLastName(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col">
                        <label htmlFor="email">Email</label>
                        <div className="mt-2 border border-[#B3B3B3] rounded-md p-4">
                            <input disabled = {Object.keys(activeDoctor).length > 0} id="email" type="text" className="w-full outline-none border-none" value = {email || activeDoctor.account?.email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col">
                        <label htmlFor="password">Mật khẩu</label>
                        <div className="mt-2 border border-[#B3B3B3] rounded-md p-4">
                            <input disabled = {Object.keys(activeDoctor).length > 0} id="password" type="text" className="w-full outline-none border-none" value = {password} onChange={e => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col">
                        <label htmlFor="clinic">Địa chỉ phòng khám</label>
                        <div className="mt-2 border border-[#B3B3B3] rounded-md p-4">
                            <input id="clinic" type="text" className="w-full outline-none border-none" value = {clinic || activeDoctor.clinic} onChange={e => setClinic(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/2 flex flex-col">
                            <label htmlFor="phone">Số điện thoại</label>
                            <div className="mt-2 border border-[#B3B3B3] rounded-md p-4">
                                <input id="phone" type="text" className="w-full outline-none border-none" value = {phone || activeDoctor.phone} onChange={e => setPhone(e.target.value)}/>
                            </div>
                        </div>
                        <div className="ml-4 w-1/2 flex flex-col">
                            <label htmlFor="experience">Số năm kinh nghiệm</label>
                            <div className="mt-2 border border-[#B3B3B3] rounded-md p-4">
                                <input id="experience" type="text" className="w-full outline-none border-none" value = {exp || activeDoctor.experience} onChange={e => setExp(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Chuyên khoa</p>
                        <div className="flex gap-4 mt-4 flex-wrap">
                            <div className="flex items-center mb-4">
                                <input checked = {specialization.includes('Nhi khoa')} onChange={(e) => handleCheckbox(e)} id="nhi-khoa" type="checkbox" value="Nhi khoa" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="nhi-khoa" className="ms-2 text-sm font-medium text-black">Nhi khoa</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input checked = {specialization.includes('Sản phụ khoa')} onChange={(e) => handleCheckbox(e)} id="san-phu-khoa" type="checkbox" value="Sản phụ khoa" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="san-phu-khoa" className="ms-2 text-sm font-medium text-black">Sản phụ khoa</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input checked = {specialization.includes('Da liễu')} onChange={(e) => handleCheckbox(e)} id="da-lieu" type="checkbox" value="Da liễu" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="da-lieu" className="ms-2 text-sm font-medium text-black">Da liễu</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input checked = {specialization.includes('Tiêu hóa')} onChange={(e) => handleCheckbox(e)} id="tieu-hoa" type="checkbox" value="Tiêu hoá" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="tieu-hoa" className="ms-2 text-sm font-medium text-black">Tiêu hoá</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input checked = {specialization.includes('Cơ xương khớp')} onChange={(e) => handleCheckbox(e)} id="co-xuong-khop" type="checkbox" value="Cơ xương khớp" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="co-xuong-khop" className="ms-2 text-sm font-medium text-black">Cơ xương khớp</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input checked = {specialization.includes('Dị ứng - miễn dịch')} onChange={(e) => handleCheckbox(e)} id="di-ung" type="checkbox" value="Dị ứng - miễn dịch" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="di-ung" className="ms-2 text-sm font-medium text-black">Dị ứng - miễn dịch</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input checked = {specialization.includes('Gây mê hồi sức')} onChange={(e) => handleCheckbox(e)} id="gay-me" type="checkbox" value="Gây mê hồi sức" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="gay-me" className="ms-2 text-sm font-medium text-black">Gây mê hồi sức</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input checked = {specialization.includes('Tai - mũi - họng')} onChange={(e) => handleCheckbox(e)} id="tai-mui-hong" type="checkbox" value="Tai - mũi - họng" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="tai-mui-hong" className="ms-2 text-sm font-medium text-black">Tai - mũi - họng</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input checked = {specialization.includes('Nội tổng quát')} onChange={(e) => handleCheckbox(e)} id="noi-tong-quat" type="checkbox" value="Nội tổng quát" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="noi-tong-quat" className="ms-2 text-sm font-medium text-black">Nội tổng quát</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Giới thiệu</p>
                        <textarea value={introduction} onChange={e => setIntroduction(e.target.value)} className="resize-none mt-4 w-full border border-[#B3B3B3] rounded-md p-2" placeholder="Nhập lời giới thiệu của bác sĩ..." rows={5}/>
                    </div>
                    <div>
                        <button onClick={handleSubmit} className="hover:bg-[#04548a] duration-150 p-4 font-bold text-white bg-customBlue w-full rounded-md">Xác nhận</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </div>
    )
}
export default DoctorModal