const EmptyOrder = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 w-full">
      {/* Image */}
      <img
        src="/src/assets/no-appointment.png" // Use an actual image URL
        alt="Empty Cart"
        className="w-64 h-64 mb-4"
      />
      
      {/* Message */}
      <p className="text-xl font-semibold text-gray-700">Your order list is empty</p>
      <p className="text-gray-500">Looks like you havent added anything to your cart yet.</p>
    </div>
  );
}

export default EmptyOrder;
