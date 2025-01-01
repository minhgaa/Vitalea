import { useState } from "react";
import Header from "../components/header";
import Nav from "../components/Nav/nav";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const Profile = () => {
  const [file, setFile] = useState();
  const { authUser } = useAuthContext();
  const item = [
    { label: 'Lịch khám', icon: "../src/assets/app.svg", link: "/user/order" },
    { label: 'Lịch sử thanh toán', icon: "../src/assets/app.svg", link: "/user/profile" },
    { label: 'Hồ sơ', icon: "../src/assets/app.svg", active: true, link: "/user/profile" },
    { label: 'Tin nhắn', icon: "../src/assets/app.svg", link: "/user/messages" },
    { label: 'Tài khoản', icon: "../src/assets/app.svg", link: "/user/settings" },
    { label: 'Đăng xuất', icon: "../src/assets/app.svg", link: "/login" },
  ];

  const handleChangeAvatar = async (e) => {
    if (e.target.files) {
      setFile(URL.createObjectURL(e.target.files[0]));
      const data = new FormData();
      data.append('file', e.target.files[0]);
      data.append('userId', authUser?.accountId);
      const response = await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/auth/update',
        data,
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      const user = JSON.parse(localStorage.getItem('user'));
      user.image = response.data.image;
      localStorage.setItem('user', JSON.stringify(user));
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-50">
      <div className="w-full h-[7.5%] flex items-center border-b border-gray-300">
        <Header />
      </div>
      <div className="grid grid-cols-6 h-[92.5%]">
        <div className="border-r border-gray-300 col-span-1 flex justify-center items-start bg-white">
          <Nav items={item} />
        </div>
        <div className="col-span-5 p-8 bg-[#F3F4F6]">
          <h1 className="text-3xl font-semibold text-gray-800">Hồ sơ cá nhân</h1>
          <div className="w-full sm:w-3/4 md:w-2/4 lg:w-2/4 mx-auto mt-6 bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col items-center">
              <label htmlFor="img">
                <img
                  className="w-[100px] h-[100px] rounded-full border-2 border-primary cursor-pointer object-cover"
                  src={file || (authUser.image !== 'none' ? `http://localhost:3000/${authUser.image}` : "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg")}
                  alt="avatar"
                />
              </label>
              <input onChange={handleChangeAvatar} className="hidden" id="img" type="file" />
              <p className="mt-3 font-medium text-gray-600">{`Mã BN: ${authUser.accountId || 'YMP241972776'}`}</p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-lg text-gray-700">Thông tin cơ bản</h3>
              <div className="space-y-4 mt-4">
                <div className="flex justify-between text-gray-600">
                  <p>Họ và tên:</p>
                  <p>{authUser.firstName} {authUser.lastName}</p>
                </div>
                <div className="flex justify-between text-gray-600">
                  <p>Điện thoại:</p>
                  <p>{authUser.phone}</p>
                </div>
                <div className="flex justify-between text-gray-600">
                  <p>Ngày sinh:</p>
                  <p>{authUser.birthDate || '20/02/2004'}</p>
                </div>
                <div className="flex justify-between text-gray-600">
                  <p>Giới tính:</p>
                  <p>{authUser.gender || 'Nam'}</p>
                </div>
                <div className="flex justify-between text-gray-600">
                  <p>Địa chỉ:</p>
                  <p className="w-1/2 text-end">{authUser.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-lg text-gray-700">Thông tin bổ sung</h3>
              <div className="space-y-4 mt-4">
                <div className="flex justify-between text-gray-600">
                  <p>Email:</p>
                  <p>{authUser.email || 'ng.phihoc123@gmail.com'}</p>
                </div>
                <div className="flex justify-between text-gray-600">
                  <p>Nghề nghiệp:</p>
                  <p>{authUser.occupation || 'Sinh viên'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
