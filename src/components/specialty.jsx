// App.js
import React from "react";
import { Link } from "react-router-dom";

const specialties = [
  { id: 1, name: "Chấn thương chỉnh hình", icon: "/pictures_healthcare/Chanthuongchinhhinh.webp" },
  { id: 2, name: "Cơ xương khớp", icon: "/pictures_healthcare/Coxuongkhop.webp" },
  { id: 3, name: "Da liễu", icon: "/pictures_healthcare/Dalieu.webp" },
  { id: 4, name: "Dị ứng - miễn dịch", icon: "/pictures_healthcare/Diungmiendich.webp" },
  { id: 5, name: "Hồi sức cấp cứu", icon: "/pictures_healthcare/hoisuccapcuu.webp" },
  { id: 6, name: "Gây mê - hồi sức", icon: "/pictures_healthcare/Gaymehoisuc.webp" },
  { id: 7, name: "Hô hấp", icon: "/pictures_healthcare/Hohap.webp" },
  { id: 8, name: "Lão khoa", icon: "/pictures_healthcare/laokhoa.webp" },
  { id: 9, name: "Huyết học", icon: "/pictures_healthcare/huyet-hoc.webp" },
  { id: 10, name: "Ngoại tổng quát", icon: "/pictures_healthcare/ngoaitongquat.webp" },
  { id: 11, name: "Nhi khoa", icon: "/pictures_healthcare/Nhikhoa.webp" },
  { id: 12, name: "Tai - Mũi - Họng", icon: "/pictures_healthcare/taimuihong.webp" },
];

const Specialty = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-center mb-8">Chuyên Khoa Y Học</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {specialties.map((specialty) => (
          <Link
            to={`/doctors/search/?specialty=${specialty.name}`}
            key={specialty.id}
            className="bg-white rounded-lg shadow-md p-4 text-center transition-transform transform hover:scale-105"
          >
            <img
              src={specialty.icon}
              alt={specialty.name}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-medium text-gray-800">
              {specialty.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Specialty;
