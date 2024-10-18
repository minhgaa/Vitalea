import DoctorInfo from "../sampleData/doctorInfo.json";

const scrollLeft = () => {
  const scrollableDiv = document.getElementById("scrollableDiv");
  scrollableDiv.scrollBy({
    left: -250, // Adjust this value to control how far it scrolls
    behavior: "smooth",
  });
};

const scrollRight = () => {
  const scrollableDiv = document.getElementById("scrollableDiv");
  scrollableDiv.scrollBy({
    left: 250, // Adjust this value to control how far it scrolls
    behavior: "smooth",
  });
};

const DoctorSchedule = ({ className }) => {
  return (
    <div className={className}>
      <p className="font-bold">Đặt khám nhanh</p>
      <div className="relative w-full mt-2 px-10">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-5 transform -translate-y-1/2 p-1.5 rounded-full border bg-white">
          <img src="src/assets/arrow-back.svg" alt="" />
        </button>

        {/* Scrollable content */}
        <div
          id="scrollableDiv"
          className="flex w-full overflow-hidden whitespace-nowrap pb-4 scroll-smooth">
          {DoctorInfo.lich.map((ng, index) => (
            <button
              key={index}
              className="px-4 py-2 border-l border-y first:rounded-l-full last:rounded-r-full last:border-r hover:bg-gray-100 transition-all duration-100">
              <p className="font-medium">{ng.ngay}</p>
            </button>
          ))}
        </div>

        {/* Right Scroll Button */}

        <button
          onClick={scrollRight}
          className="absolute right-0 top-5 transform -translate-y-1/2 p-1.5 rounded-full border bg-white">
          <img src="src/assets/arrow-forward.svg" alt="" />
        </button>
      </div>
      <div className="grid grid-cols-auto-fill-140 gap-2 overflow-y-auto max-h-[200px] pr-4">
        {DoctorInfo.lich[0].gio.map((gio, index) => (
          <button
            key={index}
            className="border rounded-lg px-4 py-4 font-medium hover:text-white hover:bg-blue-500 transition-all duration-100">
            {gio}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DoctorSchedule;
