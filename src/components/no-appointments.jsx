const NoAppointment = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 w-full h-full mt-12">
      <img 
        src="https://cdni.iconscout.com/illustration/premium/thumb/schedule-appointment-illustration-download-in-svg-png-gif-file-formats--meeting-agenda-planner-employment-pack-business-illustrations-3757143.png" 
        alt="No Appointment" 
        className="w-32 h-32 mb-8"
      />
      <h1 className="text-3xl font-bold text-gray-700">KHÔNG CÓ LỊCH</h1>
      <p className="mt-4 text-gray-500">Hôm nay bạn hoàn toàn rảnh rỗi.</p>
    </div>
  );
}

export default NoAppointment;
