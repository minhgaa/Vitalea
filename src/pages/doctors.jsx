import { useCallback, useEffect, useState } from "react";
import axiosInstance from "../config/api";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Spinner from "../custom/spinner";

const Doctors = () => {
  const [loading, setLoading] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState("Tất cả"); // Lưu trạng thái radio button được chọn

  const getDoctorsBySpecialization = useCallback(async (specialization) => {
    setLoading(true);
    try {
      if (specialization === "Tất cả") {
        const response = await axiosInstance.get("/doctor");
        setDoctors(response.data);
        return;
      }
      const response = await axiosInstance.post("/doctor/find", {
        specialization,
      });
      setDoctors(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const getAllDoctors = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/doctor");
      setDoctors(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleChangeSpecialization = async (e) => {
    const specialization = e.target.value;
    setSelectedSpecialization(specialization); // Cập nhật trạng thái radio được chọn
    await getDoctorsBySpecialization(specialization);
  };

  useEffect(() => {
    getAllDoctors();
  }, [getAllDoctors]);

  return (
    <div>
      {loading ? (
        <div className="h-screen w-screen fixed top-0 left-0">
          <Spinner />
        </div>
      ) : (
        <>
          <Header />
          <div className="flex overflow-y-hidden">
            {/* Sidebar */}
            <div className="w-1/4 p-8 bg-gray-50 rounded-lg shadow-lg">
              <p className="text-xl font-bold text-gray-800 mb-6">Chuyên khoa</p>
              <div className="mb-6">
                <input
                  type="text"
                  className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tìm nhanh chuyên khoa..."
                />
              </div>
              <div className="space-y-4">
                {[
                  { id: "tatca", label: "Tất cả", value: "Tất cả" },
                  { id: "nhikhoa", label: "Nhi khoa", value: "Nhi khoa" },
                  { id: "coxuongkhop", label: "Cơ xương khớp", value: "Cơ xương khớp" },
                  { id: "dalieu", label: "Da liễu", value: "Da liễu" },
                  { id: "hohap", label: "Hô hấp", value: "Hô hấp" },
                  { id: "noitiet", label: "Nội tiết", value: "Nội tiết" },
                  { id: "diungmiendich", label: "Dị ứng - miễn dịch", value: "Dị ứng - miễn dịch" },
                  { id: "gaymehoisuc", label: "Gây mê hồi sức", value: "Gây mê hồi sức" },
                  { id: "taimuihong", label: "Tai - mũi - họng", value: "Tai - mũi - họng" },
                  { id: "ungbuou", label: "Ung bướu", value: "Ung bướu" },
                ].map((specialization) => (
                  <div key={specialization.id} className="flex items-center">
                    <input
                      id={specialization.id}
                      type="radio"
                      value={specialization.value}
                      name="specialization"
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
                      onChange={handleChangeSpecialization}
                      checked={selectedSpecialization === specialization.value} // Kiểm tra trạng thái được chọn
                    />
                    <label
                      htmlFor={specialization.id}
                      className="ml-3 text-sm font-medium text-gray-800 cursor-pointer hover:text-blue-600 transition-colors"
                    >
                      {specialization.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctors List */}
            <div className="w-3/4 h-[700px] ml-6 overflow-hidden overflow-y-scroll">
              {doctors.map((doctor, index) => {
                return (
                  <div
                    key={index}
                    className="mt-6 p-4 rounded-md border border-[#DEDEDE] flex items-center justify-between"
                  >
                    <div className="flex">
                      <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                        <img src={doctor.account.image} alt="Doctor" />
                      </div>
                      <div className="ml-4">
                        <p className="font-bold text-[18px]">
                          {doctor.firstName} {doctor.lastName}
                        </p>
                        <div className="flex">
                          {doctor?.specialization.split(", ").map((item, index) => {
                            return (
                              <p
                                key={index}
                                className="mr-4 my-4 text-black text-[12px] py-2 px-4 mt-4 bg-[#F3F4F6] rounded-full font-bold text-center"
                              >
                                {item}
                              </p>
                            );
                          })}
                        </div>
                        <p>{doctor.clinic}</p>
                      </div>
                    </div>
                    <Link to={`/appointment/${doctor.id}`}>
                      <button
                        className="px-6 py-2 bg-customBlue mr-4 font-bold rounded-md text-white text-[14px] transition-all duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 hover:shadow-lg"
                      >
                        Đặt khám
                      </button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Doctors;
