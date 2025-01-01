import { useCallback, useEffect, useState } from 'react';
import Header from '../components/header';
import Nav from '../components/Nav/nav';
import axiosInstance from "../config/api";
import { useAuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import Spinner from '../custom/spinner';

const UserMessages = () => {
    const [allConversations, setAllConversations] = useState([])
    const {authUser} = useAuthContext()
    const [loading, setLoading] = useState(false)
    const getConversations = useCallback(async () => {
      setLoading(true)
      try {
        const response = await axiosInstance.get(`/conversation/${authUser.id}`)
        setAllConversations(response.data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }, [authUser.id])

    useEffect(() => {
      getConversations()
    }, [getConversations])

    const item = [
        { label: 'Lịch khám', icon: "../src/assets/app.svg", link: "/user/order" },
        { label: 'Lịch sử thanh toán', icon: "../src/assets/app.svg", link: "/user/profile" },
        { label: 'Hồ sơ', icon: "../src/assets/app.svg", link: "/user/profile" },
        { label: 'Tin nhắn', icon: "../src/assets/app.svg", active: true, link: "/user/messages" },
        { label: 'Tài khoản', icon: "../src/assets/app.svg", link: "/user/settings" },
        { label: 'Đăng xuất', icon: "../src/assets/app.svg", link: "/mainpage" },
    ]




  return (
    <div className="w-screen h-screen">
      {/* Header */}
      {loading ? <div className='h-screen w-screen fixed top-0 left-0'>
        <Spinner/>
      </div> : <><div className="w-full h-[7.5%] flex items-center border-b border-gray-300">
        <Header />
      </div>
      <div className="grid grid-cols-6 h-[92.5%]">
        <div className="border-r border-gray-300 col-span-1 flex justify-center items-start">
          <Nav items={item} />
        </div>
        <div className="col-span-5 grid grid-cols-4 p-4 bg-customBg">
        
          <div className="col-span-1 bg-white rounded">
            <div className="flex justify-between p-4 border-b border-gray-300">
              <p className="font-semibold">Messages</p>
              <button>
                <img
                  src="../src/assets/search.svg"
                  className="mr-2 ml-3 w-4 h-4"></img>
              </button>
            </div>
             <div className="overflow-y-auto h-[calc(100vh-154px)] py-2 pl-2 pr-3">
              {allConversations?.map((conversation, index) => (
                              <Link to={`/user/conversation/${conversation.id}`} key={index}>
                                <div
                                  className="flex items-center gap-3 p-3 rounded hover:bg-gray-200 hover:cursor-pointer w-full">
                                  <img
                                    className="rounded-full w-10 h-10"
                                    src="https://placehold.co/40/add8e6/000"
                                    alt=""
                                  />
                                  <div className="flex-grow min-w-0">
                                    <p className="text-xs font-semibold truncate">
                                      {conversation?.doctor?.firstName} {conversation?.doctor?.lastName}
                                    </p>
                                    <p className="text-xs text-gray-600 truncate w-full">
                                    {conversation.lastMessage.split(":")[0] === authUser.accountId1 ? `Bạn: ${conversation?.lastMessage.split(":")[1]}` : `${conversation?.doctor?.firstName} ${conversation?.doctor?.lastName}: ${conversation?.lastMessage.split(":")[1]} `}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            ))}
            </div>
          </div>
        </div>
      </div></>}
    </div>
  );
}

export default UserMessages