import React from "react";
import ClientHeader from "../components/clientHeader-guest";
import Nav from "../components/Nav/nav";
import Header from "../components/header";
import DoctorInfo from "../sampleData/doctorInfo.json";
import DoctorSchedule from "../components/doctor-schedule";

// const item = [
//   { label: "Dashboard", icon: "src/assets/das.svg", link: "/mainpage" },
//   { label: "Appointments", icon: "src/assets/app.svg", link: "/appoiments" },
//   { label: "Patients", icon: "src/assets/pat.svg", link: "/patients" },
//   { label: "Messages", icon: "src/assets/mes.svg", link: "/messages" },
//   { label: "Report", icon: "src/assets/rep.svg", link: "/report" },
//   {
//     label: "Settings",
//     icon: "src/assets/setb.svg",
//     active: true,
//     link: "/settings",
//   },
// ];

const Settings = () => {
  return (
    // <div className="w-screen h-screen">
    //     {/* Header */}
    //     <div className='w-full h-[7.5%] flex items-center border-b border-gray-300'>
    //         <Header />
    //     </div>
    //     <div className='grid grid-cols-6 h-[92.5%]'>
    //         <div className='border-r border-gray-300 col-span-1 flex justify-center items-start'>
    //             <Nav items={item} />
    //         </div>
    //     </div>
    // </div>

    <div className="font-inter">
      <div className="flex items-center border-b border-gray-300">
        <ClientHeader />
      </div>

      <div className="h-[92.5%] bg-customBg p-8">
        <main className="lg:w-3/5 lg:m-auto">
          <div className="rounded-3xl p-8 bg-white">
            <div className="flex items-center gap-8">
              <img
                className="rounded-full w-[160px] h-[160px]"
                src={DoctorInfo.avatar}></img>
              <div>
                <div className="flex items-center gap-4">
                  <p className="text-2xl font-bold">{DoctorInfo.ten}</p>
                </div>
                <div className="flex gap-2 mt-2 mb-3 text-sm">
                  <p className="flex items-center">
                    <img
                      className="w-5 h-5 mr-2"
                      src="src/assets/star.svg"></img>
                    <span className="font-medium mr-1">Đánh giá:</span>{" "}
                    {DoctorInfo.rating}
                  </p>
                  <p className="pl-2 border-l-gray-400 border-l">
                    {DoctorInfo.yoe} năm kinh nghiệm
                  </p>
                </div>
                <div>
                  <p>
                    Chuyên khoa:{" "}
                    <span className="font-medium text-blue-600">
                      {DoctorInfo.chuyenKhoa}
                    </span>
                  </p>
                  <p>
                    Chức vụ:{" "}
                    <span className="font-medium">{DoctorInfo.chucVu}</span>
                  </p>
                  <p>
                    Nơi công tác:{" "}
                    <span className="font-medium">{DoctorInfo.noiCongTac}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-4 mt-8">
              <div className="inline-block p-4 text-white bg-blue-700 rounded-2xl">
                <div className="flex gap-4 items-center mb-2">
                  <p className="font-bold">Địa chỉ</p>
                  <a
                    href={DoctorInfo.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-max flex gap-1 px-2 py-1 text-sm font-medium bg-white text-blue-700 rounded-2xl ">
                    <img
                      width="16px"
                      height="16px"
                      src="src/assets/map.svg"
                      alt=""
                    />
                    Mở bản đồ
                  </a>
                </div>
                <p>{DoctorInfo.diaChi}</p>
              </div>
            </div>

            <DoctorSchedule className="mx-4 mt-8"/>
            
            <div className="mt-8 mx-4">
              <p className="font-bold mb-2">Giới thiệu</p>
              {/* split + map để cách dòng đoạn giới thiệu */}
              <div className="">
                {DoctorInfo.gioiThieu.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
            <div className="mt-6 mx-4">
              <p className="font-bold mb-2">Kinh nghiệm</p>
              <ul>
                {DoctorInfo.kinhNghiem.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6 mx-4">
              <p className="font-bold mb-2">Quá trình đào tạo</p>
              <ul className="">
                {DoctorInfo.daoTao.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
