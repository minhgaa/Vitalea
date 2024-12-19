import { useCallback, useEffect } from "react"
import axiosInstance from "../config/api"
import { Link, useSearchParams } from "react-router-dom"

const Verification = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token')
    const getVerification = useCallback(async () => {
        await axiosInstance.get(`/auth/new-verification?token=${token}`)
    }, [token])
    useEffect(() => {
        getVerification()
    }, [getVerification])
    return (
        <div className="flex items-center justify-center h-screen flex-col">
            <div className="w-[300px] h-[300px]">
                <img src='https://img.freepik.com/premium-vector/opened-envelope-document-with-green-check-mark-line-icon-official-confirmation-message-mail-sent-successfully-email-delivery-verification-email-flat-design-vector_662353-720.jpg'/>
            </div>
            <div className="w-1/3">
                <p className="font-bold text-[16px]">Xin chào,</p>
                <p className="my-4">Chúc mừng bạn đã xác thực email thành công, mong bạn có những trải nghiệm tốt nhất về dịch vụ của chúng tôi</p>
                <div className="flex justify-center"><button className="px-4 py-2 bg-green-500 font-bold text-white rounded-md"><Link to='/login'>Quay về trang đăng nhập</Link></button></div>
            </div>
        </div>
    )
}
export default Verification