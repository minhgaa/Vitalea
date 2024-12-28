import axios from 'axios';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IoArrowBackCircle } from "react-icons/io5";
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import Spinner from '../custom/spinner';
import NewsSelect from '../components/news-select';
import { TextField } from '@mui/material';
const BlogEditor = () => {
    const {authUser} = useAuthContext()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const modules = {
        toolbar: [
                  [{ 'font': [] }],
                  [{ 'size': ['small', false, 'large', 'huge'] }],
                  ['bold', 'italic', 'underline'],
                  [{'list': 'ordered'}, {'list': 'bullet'}],
                  [{ 'align': [] }],
                  [{ 'color': [] }, { 'background': [] }],
                  ['clean'], ['link', 'image']
                ]
    }
    const notifySuccess = () => {
        toast.success("Thêm bài viết mới thành công");
    };


    const formats = [
                'font',
                'size',
                'bold', 'italic', 'underline',
                'list', 'bullet',
                'align',
                'color', 'background', 'link', 'image'
          ];
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [files, setFiles] = useState('')
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const handleSubmit = async (e) => {
        notifySuccess()
        const data = new FormData()
        data.append('title', title)
        data.append('content', content)
        data.append('doctorId', authUser.id)
        data.append('category', category)
        data.append('subCategory', subCategory)
        data.append('file', files[0])
        e.preventDefault()
        setLoading(true)
        await axios({
            method: 'POST',
            url: 'http://localhost:3000/api/blog',
            data,
            headers: {'Content-Type': 'multipart/form-data'}
        })
        navigate('/blogs')
    }
    return (
        <>
            {loading ? <div className='h-screen w-screen fixed top-0 left-0'>
                <Spinner/>
            </div> : <div>
                <div className="w-[1200px] mx-auto p-4">
                <div className='flex items-center'>
                    <a href ='/mainpage' className='text-[36px] mr-4 opacity-50 hover:opacity-100 duration-150'><IoArrowBackCircle/></a>
                    <h1>Blog Editor</h1>
                </div>
                <form onSubmit={e => handleSubmit(e)}>
                    <div className='my-4 p-2 rounded-md border border-[#B3B3B3]'>
                        <NewsSelect category = {category} subCategory = {subCategory} setCategory = {setCategory} setSubCategory = {setSubCategory}/>
                    </div>
                    <div className='my-4 p-2 rounded-md border border-[#B3B3B3]'>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        variant="outlined"
                    />
                    </div>
                    <div className='my-4 p-2 rounded-md border border-[#B3B3B3]'>
                        <p>Thumbnail:</p>
                        <input className='mt-2 outline-none border-none' type='file' onChange={e => setFiles(e.target.files)}/>
                    </div>
                    <ReactQuill theme="snow" modules={modules}
                    formats={formats} value={content} onChange={setContent} />
                    <button className='mt-2 px-6 py-2 rounded-md bg-customBlue font-bold text-white' type='submit'>Submit</button>
                </form>
            </div>
            <ToastContainer position="top-right" /></div>}
        </>
    )
}
export default BlogEditor