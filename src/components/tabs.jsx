import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import axiosInstance from '../config/api';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function NewsTabs() {
    const [drugBlogs, setDrugBlogs] = React.useState([])
    const [medicineBlogs, setMedicineBlogs] = React.useState([])
    const [sickBlogs, setSickBlogs] = React.useState([])
    const [bodyBlogs, setBodyBlogs] = React.useState([])
    const [value, setValue] = React.useState(0);
    const [inputSearch, setInputSearch] = React.useState('')
    const [category, setCategory] = React.useState('')
    const navigate = useNavigate()
    const [inputPlaceholder, setInputPlaceholder] = React.useState("Nhập tên thuốc cần tìm...")
    const inputPlaceholderList = ["Nhập tên thuốc cần tìm...", "Nhập tên dược liệu cần tìm...", "Nhập tên bệnh cần tìm...", "Nhập bộ phận trên cơ thể..."]
    const handleChange = (event, newValue) => {
        setInputPlaceholder(inputPlaceholderList[newValue])
        setValue(newValue);
    };

    const getDrugBlogs = React.useCallback(async () => {
        const response = await axiosInstance.get(`/blog/category/Thuốc`)
        setDrugBlogs(response.data)
    }, [])

    const getMedinceBlogs = React.useCallback(async () => {
        const response = await axiosInstance.get(`/blog/category/Dược Liệu`)
        setMedicineBlogs(response.data)
    }, [])

    const getSickBlogs = React.useCallback(async () => {
        const response = await axiosInstance.get(`/blog/category/Bệnh`)
        setSickBlogs(response.data)
    }, [])

    const getBodyBlogs = React.useCallback(async () => {
        const response = await axiosInstance.get(`/blog/category/Cơ thể`)
        setBodyBlogs(response.data)
    }, [])

    React.useEffect(() => {
        getDrugBlogs()
        getMedinceBlogs()
        getSickBlogs()
        getBodyBlogs()
    }, [getDrugBlogs, getMedinceBlogs, getSickBlogs, getBodyBlogs])

    const handleSearch = async (e) => {
        e.preventDefault()
        let category = ''
        switch(value) {
            case 0: 
            {
                category = 'Thuốc'
                break 
            }
            case 1: 
            {
                category = 'Dược liệu'
                break 
            }
            case 2: 
            {
                category = 'Bệnh'
                break 
            }
            case 3:
            {
                category = 'Cơ thể'
                break 
            }
            default: {
                break
            }
        }
        setCategory(category)
        navigate(`/news-search/${category}?search=${inputSearch}`)
        window.location.reload()
    }
  return (
    <Box sx={{ width: '100%' }}>
      <div className=''>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs className='' value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Thuốc" {...a11yProps(0)} />
            <Tab label="Dược liệu" {...a11yProps(1)} />
            <Tab label="Bệnh" {...a11yProps(2)} />
            <Tab label="Cơ thể" {...a11yProps(2)} />
            </Tabs>
        </Box>
      </div>
      <form onSubmit={handleSearch} className='border border-[#b3b3b3] rounded-md my-4 p-2'>
        <input value={inputSearch} onChange={e => setInputSearch(e.target.value)} className='border-none outline-none w-full' type='text' placeholder={inputPlaceholder} />
      </form>
      <CustomTabPanel value={value} index={0}>
        <div className='overflow-hidden overflow-x-scroll w-[1400px]'>
            <div className='w-[2000px] flex justify-between gap-4 pb-4'>
                {drugBlogs.length > 0 && drugBlogs.slice(0,7).map((item ,index) => {
                    return (
                        <div key={index} className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                            <div className="overflow-hidden">
                                <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                            </div>
                            <div className="">
                                <div className="p-4 ">
                                    <p className="font-bold text-customBlue">{item?.subCategory}</p>
                                    <p className="text-[18px] font-bold">{item?.title}</p>
                                </div>
                                <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                                    <p className="text-[14px] font-bold">Bác sĩ: {item?.doctor?.firstName} {item?.doctor?.lastName}</p>
                                    <time className="text-[12px]">Ngày đăng: {format(new Date(item?.date), "dd/MM/yyyy HH:MM:SS")}</time>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className='overflow-hidden overflow-x-scroll w-[1400px]'>
            <div className='w-[2000px] flex justify-between gap-4 pb-4'>
                {medicineBlogs.length > 0 && medicineBlogs.slice(0,7).map((item ,index) => {
                    return (
                        <div key={index} className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                            <div className="overflow-hidden">
                                <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                            </div>
                            <div className="">
                                <div className="p-4 ">
                                    <p className="font-bold text-customBlue">{item?.subCategory}</p>
                                    <p className="text-[18px] font-bold">{item?.title}</p>
                                </div>
                                <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                                    <p className="text-[14px] font-bold">Bác sĩ: {item?.doctor?.firstName} {item?.doctor?.lastName}</p>
                                    <time className="text-[12px]">Ngày đăng: {format(new Date(item?.date), "dd/MM/yyyy HH:MM:SS")}</time>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className='overflow-hidden overflow-x-scroll w-[1400px]'>
            <div className='w-[2000px] flex justify-between gap-4 pb-4'>
                {sickBlogs.length > 0 && sickBlogs.slice(0,7).map((item ,index) => {
                    return (
                        <div key={index} className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                            <div className="overflow-hidden">
                                <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                            </div>
                            <div className="">
                                <div className="p-4 ">
                                    <p className="font-bold text-customBlue">{item?.subCategory}</p>
                                    <p className="text-[18px] font-bold">{item?.title}</p>
                                </div>
                                <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                                    <p className="text-[14px] font-bold">Bác sĩ: {item?.doctor?.firstName} {item?.doctor?.lastName}</p>
                                    <time className="text-[12px]">Ngày đăng: {format(new Date(item?.date), "dd/MM/yyyy HH:MM:SS")}</time>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div className='overflow-hidden overflow-x-scroll w-[1400px]'>
            <div className='w-[2000px] flex justify-between gap-4 pb-4'>
                {bodyBlogs.length > 0 && bodyBlogs.slice(0,7).map((item ,index) => {
                    return (
                        <div key={index} className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                            <div className="overflow-hidden">
                                <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                            </div>
                            <div className="">
                                <div className="p-4 ">
                                    <p className="font-bold text-customBlue">{item?.subCategory}</p>
                                    <p className="text-[18px] font-bold">{item?.title}</p>
                                </div>
                                <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                                    <p className="text-[14px] font-bold">Bác sĩ: {item?.doctor?.firstName} {item?.doctor?.lastName}</p>
                                    <time className="text-[12px]">Ngày đăng: {format(new Date(item?.date), "dd/MM/yyyy HH:MM:SS")}</time>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}