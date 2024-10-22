import axios from 'axios';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const BlogEditor = () => {
    const modules = {
        toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
        ],
    }
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [files, setFiles] = useState('')
    const handleSubmit = async (e) => {
        const data = new FormData()
        data.append('title', title)
        data.append('content', content)
        data.append('doctorId', 2)
        data.append('file', files[0])
        e.preventDefault()
        console.log(title, files, content)
        const response = await axios({
            method: 'POST',
            url: 'http://localhost:3000/api/blog',
            data,
            headers: {'Content-Type': 'multipart/form-data'}
        })
        console.log(response)
    }
    return (
        <>
            <div className="w-[1200px] mx-auto p-4">
                <h1>Blog Editor</h1>
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
                <div dangerouslySetInnerHTML={{ __html: content }}/>
            </div>
        </>
    )
}
export default BlogEditor