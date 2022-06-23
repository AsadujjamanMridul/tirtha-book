import React, { useState, useRef, useContext } from 'react';
import './AddChapter.scss'
import axios from 'axios';
import { RichTextEditor, Editor } from '@mantine/rte';
import Chapters from '../Chapters/Chapters';
import NovelList from '../NovelList/NovelList';
import {SidebarInnerContent} from '../../../../App'

const AddChapter = () => {

    const [innerContent, setInnerContent] = useContext(SidebarInnerContent);

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

    const [value, rteChange] = useState(initialValue);

    const handleSubmit = () => {
        console.log(value);
    }

    return (
        <div className='min-vh-100 w-100'>
            <h3 className='addBook-title w-100'>Add a Chapter</h3>

            <h4 className='input-title'>Title</h4>
            <input className='input-book-title form-control' placeholder='Add a Title' />

            <h4 className='input-title'>Chapter</h4>
            <RichTextEditor className='rte' value={value} onChange={rteChange} onImageUpload={handleImageUpload}/>

            <button onClick={() => handleSubmit()} style={{ margin: '54px 32px' }} type="submit" className='btn btn-primary'>Publish</button>

            <button onClick={() => setInnerContent(<NovelList/>)} style={{ margin: '54px 0' }} className='btn btn-light'>Cancel</button>
        </div>
    );
};

export default AddChapter;