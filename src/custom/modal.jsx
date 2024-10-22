// eslint-disable-next-line react/prop-types
const Modal = ({handleToggle}) => {
    return (
            <div className="w-screen">
                <div className="fixed top-0 left-0 h-screen w-screen bg-black opacity-70">

                </div>
                <div  className="fixed top-0 right-0 left-0 z-50 justify-center items-center md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative h-screen p-4 max-h-full z-[99]">
            <div className="w-[500px] overflow-y-scroll h-[500px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg shadow">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900">
                        Thông tin đặt lịch
                    </h3>
                    <button onClick={handleToggle} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="p-4 md:p-5 space-y-4">
                    <div className="flex justify-between">
                        <p className="text-base leading-relaxed text-gray-500">
                            Mã phiếu khám
                        </p>
                        <p className="text-base leading-relaxed text-gray-500">
                            YMA2410102430
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-base leading-relaxed text-gray-500">
                            Ngày khám
                        </p>
                        <p className="text-base leading-relaxed text-gray-500">
                            15/10/2024
                        </p>
                    </div>
                    <div className="flex justify-between ">
                        <p className="text-base leading-relaxed text-gray-500">
                            Giờ khám
                        </p>
                        <p className="text-base leading-relaxed text-gray-500">
                            9:00 - 10:00
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-base leading-relaxed text-gray-500">
                            Mã bệnh nhân
                        </p>
                        <p className="text-base leading-relaxed text-gray-500">
                            YMP241972776
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-base leading-relaxed text-gray-500">
                            Họ và tên
                        </p>
                        <p className="text-base leading-relaxed text-gray-500">
                            Nguyễn Phi Học
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-base leading-relaxed text-gray-500">
                            Ngày tháng năm sinh
                        </p>
                        <p className="text-base leading-relaxed text-gray-500">
                            20/02/2004
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-base leading-relaxed text-gray-500">
                            Số điện thoại
                        </p>
                        <p className="text-base leading-relaxed text-gray-500">
                            0865562334
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-base leading-relaxed text-gray-500">
                            Giới tính       
                        </p>
                        <p className="text-base leading-relaxed text-gray-500">
                            Nam
                        </p>
                    </div>
                    <div className="">
                        <p className="text-base leading-relaxed text-gray-500">
                            Ghi chú   
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 p-4 border border-gray-600 rounded-md mt-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit unde in adipisci laboriosam asperiores natus, velit deleniti neque eos et quas animi quisquam atque. Doloribus totam adipisci eveniet rerum esse. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci officiis illo aliquid quasi, voluptates ad at perspiciatis laborum fugit, aspernatur tempore quidem itaque mollitia velit quia suscipit fugiat quam dolore.
                        </p>
                    </div>
                    <div className="">
                        <p className="text-base leading-relaxed text-gray-500">
                            Hình ảnh đính kèm 
                        </p>
                        <div className="flex">
                            <img className="w-[75px] h-[75px] rounded-md mr-2" src="https://img.lovepik.com/original_origin_pic/18/07/23/50e2fa6ad364d4ce4356c419446b54ae.png_wh860.png"/>
                            <img className="w-[75px] h-[75px] rounded-md mr-2" src="https://img.lovepik.com/original_origin_pic/18/07/23/50e2fa6ad364d4ce4356c419446b54ae.png_wh860.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </div>
    )
}
export default Modal