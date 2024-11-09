import axios from 'axios';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IoArrowBackCircle } from "react-icons/io5";
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const BlogEditor = () => {
    const {authUser} = useAuthContext()
    const navigate = useNavigate()
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
    const handleSubmit = async (e) => {
        const data = new FormData()
        data.append('title', title)
        data.append('content', content)
        data.append('doctorId', authUser.id)
        data.append('file', files[0])
        e.preventDefault()
        console.log(title, files, content)
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
            <div className="w-[1200px] mx-auto p-4">
                <div className='flex items-center'>
                    <a href ='/mainpage' className='text-[36px] mr-4 opacity-50 hover:opacity-100 duration-150'><IoArrowBackCircle/></a>
                    <h1>Blog Editor</h1>
                </div>
                <form onSubmit={e => handleSubmit(e)}>
                    <div className='my-4 p-2 rounded-md border border-[#B3B3B3]'>
                        <input className='w-full outline-none border-none' type='text' value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' />
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
        </>
    )
}
export default BlogEditor