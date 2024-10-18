const ClientHeader = () => {
  return (
    <header className="w-full">
      <div className="flex items-center p-4">
        <label className="ml-7 mr-12 font-sofadi text-xl text-customBlue">
          Vitaléa
        </label>
        <div>
          <ul className="flex gap-6">
            <li>
              <a
                className="px-4 py-2 rounded-lg hover:bg-slate-100 hover:text-blue-700"
                href="#">
                Trang chủ
              </a>
            </li>
            <li>
              <a
                className="px-4 py-2 rounded-lg hover:bg-slate-100 hover:text-blue-700"
                href="#">
                Đặt lịch khám
              </a>
            </li>
            <li>
              <a
                className="px-4 py-2 rounded-lg hover:bg-slate-100 hover:text-blue-700"
                href="#">
                Tư vấn trực tuyến
              </a>
            </li>
            <li>
              <a
                className="px-4 py-2 rounded-lg hover:bg-slate-100 hover:text-blue-700"
                href="#">
                Tin Y tế
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-grow"></div>
        <div className="mr-5">
          <ul className="flex gap-12">
            <li><a href="#" className="px-4 py-2 font-medium text-blue-600 shadow-neutral-500 border rounded-md border-blue-500 hover:text-white hover:bg-blue-500 transition-all duration-100">Đăng nhập</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default ClientHeader;
