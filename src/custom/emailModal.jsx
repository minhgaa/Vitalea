import { FaTimesCircle } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const EmailModal = ({setVerification, email}) => {
    return (
        <div className="bg-white rounded-md flex flex-col w-[500px] p-4">
            <div className="flex justify-end px-4">
                <FaTimesCircle onClick={() => setVerification(prevState => !prevState)} className="text-[20px] cursor-pointer"/>
            </div>
            <div className="w-full h-1/2 flex justify-center">
                <img className="w-3/4 h-full object-cover" src="https://img.freepik.com/free-vector/email-campaign-concept-illustration_114360-1633.jpg?t=st=1733301404~exp=1733305004~hmac=9113ccd78195ca22544fb5a281d5255f2deccbd66841e6e7b13c4d2b5957fbca&w=996" />
            </div>
            <div className="h-1/2 text-center mt-4">
                <p>Chúng tôi đã gửi đường link liên kết đến email <strong>{email}</strong> của bạn, vui lòng nhấp vào liên kết để xác thực.</p>
            </div>
        </div>
    )
}

export default EmailModal