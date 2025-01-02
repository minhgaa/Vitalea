import { useState } from "react";
import Spinner from "../custom/spinner";
import Header from "../components/header";
import Nav from "../components/Nav/nav";

function QRPayment() {
  const [amount, setAmount] = useState("");
  const [qrVisible, setQrVisible] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfirm = () => {
    alert("Thanh toán đã được xác nhận!");
    setQrVisible(false);
    setAmount("");
    setUploadedImage(null);
  };
  const item = [
        { label: 'Lịch khám', icon: "../src/assets/app.svg", active: true, link: "/user/order" },
        { label: 'Nạp tiền', icon: "../src/assets/app.svg", link: "/user/payment" },
        { label: 'Lịch sử thanh toán', icon: "../src/assets/app.svg", link: "/user/profile" },
        { label: 'Hồ sơ', icon: "../src/assets/app.svg", link: "/user/profile" },
        { label: 'Tin nhắn', icon: "../src/assets/app.svg", link: "/user/messages" },
        { label: 'Tài khoản', icon: "../src/assets/app.svg", link: "/user/settings" },
        { label: 'Đăng xuất', icon: "../src/assets/app.svg", link: "/mainpage" },
    ];
  return (
    <div className="w-screen h-screen overflow-hidden">
            {/* <div className="w-screen h-screen fixed top-0 left-0">
                <Spinner/>
            </div> */}
            <div className="w-full h-[7.5%] flex items-center border-b border-gray-300">
                <Header />
            </div>
            <div className="grid grid-cols-6 h-[92.5%]">
                <div className="border-r border-gray-300 col-span-1 flex justify-center items-start">
                    <Nav items={item} />
                </div>
                <div className="col-span-5">
                    <div className="min-h-screen flex items-center justify-center bg-gray-100">
                    <div className="bg-white p-8 rounded shadow-md w-96">
                        <h1 className="text-2xl font-bold mb-4">Thanh Toán QR</h1>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                        Nhập số tiền:
                        </label>
                        <input
                        type="number"
                        className="block w-full p-2 border rounded-md mb-4 focus:ring focus:ring-indigo-300"
                        placeholder="Số tiền (VNĐ)"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        />
                        <button
                        className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700"
                        onClick={() => setQrVisible(true)}
                        disabled={!amount}
                        >
                        Tạo mã QR
                        </button>
                    </div>

                    {qrVisible && (
                        <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded shadow-lg w-96 h-[600px] overflow-y-scroll">
                            <h2 className="text-xl font-bold mb-4">Quét mã QR để thanh toán</h2>
                            <div className="mb-4">
                                <img src = 'https://api.vietqr.io/image/970405-6120205968837-o8n065A.jpg?accountName=NGUYEN%20PHI%20HOC&amount=0'/>
                            </div>
                            <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Tải lên hình ảnh xác nhận:
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleUpload}
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                            />
                            {uploadedImage && (
                                <img
                                src={uploadedImage}
                                alt="Uploaded"
                                className="mt-4 w-full h-auto rounded-md border"
                                />
                            )}
                            </div>
                            <div className="flex justify-between">
                            <button
                                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
                                onClick={() => setQrVisible(false)}
                            >
                                Hủy
                            </button>
                            <button
                                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                                onClick={handleConfirm}
                                disabled={!uploadedImage}
                            >
                                Xác nhận
                            </button>
                            </div>
                        </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
  );
}

export default QRPayment;
