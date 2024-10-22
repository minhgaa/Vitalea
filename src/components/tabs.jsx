import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

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
    const [value, setValue] = React.useState(0);
    const [inputPlaceholder, setInputPlaceholder] = React.useState("")
    const inputPlaceholderList = ["Nhập tên thuốc cần tìm...", "Nhập tên dược liệu cần tìm...", "Nhập tên bệnh cần tìm...", "Nhập bộ phận trên cơ thể..."]
    const handleChange = (event, newValue) => {
        setInputPlaceholder(inputPlaceholderList[newValue])
        setValue(newValue);
    };

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
      <div className='border border-[#b3b3b3] rounded-md my-4 p-2'>
        <input className='border-none outline-none w-full' type='text' placeholder={inputPlaceholder} />
      </div>
      <CustomTabPanel value={value} index={0}>
        <div className='overflow-hidden overflow-x-scroll'>
            <div className='w-[2000px] flex justify-between gap-4 pb-4'>
                <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
                </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className='overflow-hidden overflow-x-scroll'>
            <div className='w-[2000px] flex justify-between gap-4 pb-4'>
                <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
                </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className='overflow-hidden overflow-x-scroll'>
            <div className='w-[2000px] flex justify-between gap-4 pb-4'>
                <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
                </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div className='overflow-hidden overflow-x-scroll'>
            <div className='w-[2000px] flex justify-between gap-4 pb-4'>
                <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
                </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            <div className="w-[calc(25%-16px)] rounded-md border border-[#B3B3B3]">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 w-[100%] object-cover" src="https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2021/02/LayoutYMNew-15-1.jpg"/>
                    </div>
                    <div className="">
                        <div className="p-4 ">
                            <p className="font-bold text-customBlue">TỬ CUNG</p>
                            <p className="text-[18px] font-bold">HPV Virus là gì? Có bao nhiêu chủng virus HPV</p>
                        </div>
                        <div className="flex p-4 items-center justify-between mt-auto h-[100px]">
                            <p className="text-[14px] font-bold">Bác sĩ: Nguyễn Đoàn Trọng Nhân</p>
                            <p className="text-[12px]">Ngày đăng: 09 tháng 10 2024</p>
                        </div>
                    </div>
            </div>
            </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}