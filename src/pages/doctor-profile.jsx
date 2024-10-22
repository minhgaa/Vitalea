const DoctorProfile = () => {
    return (
        <div className="bg-[#F5F9FF] h-screen">
            <label className="pl-7 font-sofadi text-xl text-customBlue">
                    Vitaléa
            </label>
            <div className="flex items-center">
                <div className="mt-12 ml-12">
                    <img src="/pictures_healthcare/doctor1.png" className="w-[600px] h-[600px]"/>
                </div>
                <div className="bg-white rounded-md w-[600px] shadow-sm ml-20 px-4 py-8">
                    <p className="text-customBlue font-bold">Thông tin cơ bản</p>
                    <div className="mt-4 flex items-center">
                        <p className=" font-bold">BS. CK1.  Nguyễn Văn A</p>
                        <p className="ml-4 px-2 p-1 bg-[#0873BB] text-white font-bold text-[12px] rounded-[25px]">24 năm kinh nghiệm</p>
                        <p className="ml-4 px-2 p-1 bg-[#0873BB] text-white font-bold text-[12px] rounded-[25px]">Chuyên khoa: Nội tiết</p>

                    </div>
                    <p className="mt-4">Chức vụ: Trưởng khoa Nội Tiết bệnh viện Đại học Y Dược TP.HCM</p>
                    <p className="mt-4">Nơi công tác: Bệnh viện Trường Đh Y Dược</p>
                    <p className="mt-4 text-[#b5b5b5]">Phó Giáo sư, Tiến sĩ, Bác sĩ Lâm Việt Trung đã có hơn 20 năm kinh nghiệm trong lĩnh vực Tiêu hóa.
                    Là một bác sĩ giỏi, có bề dày kinh nghiệm cũng như chuyên môn cao, PGS.TS.BS Lâm Việt Trung hiện là Trưởng khoa Ngoại tiêu hóa - Bệnh viện Chợ Rẫy và hiện đang giữ chức vụ Phó Giám Đốc Bệnh Viện Chợ Rẫy.</p>
                    <p className="mt-4">Địa chỉ phòng mạch: 53 Phạm Hữu Chí, Phường 12, Quận 5, Hồ Chí Minh</p>
                    <p className="mt-4">Lịch sử làm việc:</p>
                    <p className="ml-2">Tốt nghiệp Đại học Y dược</p>
                    <p className="ml-4">Công tác tại Đại học Y dược</p>
                    <div className="mt-4 p-2  rounded-[25px] text-white font-bold cursor-pointer w-[60%] mx-auto bg-[#0873BB] text-center"><button>Đặt lịch ngay</button></div>
                </div>
            </div>
        </div>
    )
}
export default DoctorProfile