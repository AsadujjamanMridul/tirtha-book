import React, { useState, useRef, useContext } from 'react';
import './AddChapter.scss'
import axios from 'axios';
import { RichTextEditor, Editor } from '@mantine/rte';
import Chapters from '../Chapters/Chapters';
import NovelList from '../NovelList/NovelList';
import { SidebarInnerContent } from '../../../../App'
import { useForm } from "react-hook-form";

const AddChapter = ({ id }) => {

    const [innerContent, setInnerContent] = useContext(SidebarInnerContent);
    const [submitBtnDisable, setSubmitBtnDisable] = useState(false)

    const handleImageUpload = (file) =>
        new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append('image', file);

            fetch('https://api.imgbb.com/1/upload?key=d91d00e850c6752ba23118e0bcc8d162', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((result) => resolve(result.data.url))
                .catch(() => reject(new Error('Upload failed')));
        });

    const initialValue =
        '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';

    const [chapter_text, setChapterText] = useState(initialValue);

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.chapter_text = chapter_text

        const formData = new FormData()
        formData.append('chapter_name', data.chapter_name)
        formData.append('chapter_text', data.chapter_text)

        setSubmitBtnDisable(true)

        fetch(`https://radiant-spire-58573.herokuapp.com/api/novels/${id}`, {
            method: 'PATCH',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setInnerContent(<NovelList/>)
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div className='min-vh-100 w-100'>
            <h3 className='addBook-title w-100'>Add a Chapter</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h4 className='input-title'>Title</h4>
                <input className='input-book-title form-control' placeholder='Add a Title' {...register("chapter_name", { required: true })} />

                <h4 className='input-title'>Chapter</h4>
                <RichTextEditor className='rte' value={chapter_text} onChange={setChapterText} onImageUpload={handleImageUpload} />

                <button style={{ margin: '54px 32px' }} type="submit" className='btn btn-primary' disabled={submitBtnDisable}>Publish</button>

                <button onClick={(e) => {
                    e.preventDefault()
                    reset()
                    setInnerContent(<NovelList />)
                }} style={{ margin: '54px 0' }} className='btn btn-light'>Cancel</button>
            </form>
        </div>
    );
};

export default AddChapter;