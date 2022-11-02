import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { LoadingOverlay } from '@mantine/core';
import { SidebarInnerContent } from '../../../../App'
import NovelList from '../../Novels/NovelList/NovelList';
import Artworks from '../ArtworkList/ArtworkList';
import './AddArtwork.scss'

const AddArtwork = () => {

    const [innerContent, setInnerContent] = useContext(SidebarInnerContent);
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const [image, setImage] = useState(null)
    const [submitBtnDisable, setSubmitBtnDisable] = useState(false)
    const [loaderVisible, setLoaderVisible] = useState(false);


    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', image)
        formData.append('title', data.title)
        formData.append('artist', data.artist)
        formData.append('subheader', data.subheader)

        setSubmitBtnDisable(true)
        setLoaderVisible(true)

        fetch('https://radiant-spire-58573.herokuapp.com/api/artworks', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setLoaderVisible(false)
                setInnerContent(<Artworks />)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className='min-vh-100 w-100'>
            <LoadingOverlay visible={loaderVisible} loaderProps={{ variant: 'bars' }} />
            <h3 className='addBook-title w-100'>Add a Artwork</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h4 className='input-title'>Image</h4>
                <input className='input-book-cover form-control' type={'file'} onChange={(e) => setImage(e.target.files[0])} />

                <h4 className='input-title'>Title</h4>
                <input className='input-book-title form-control' placeholder='Add a Title' {...register("title", { required: true })} />

                <h4 className='input-title'>Subheader</h4>
                <textarea className='input-book-synopsis form-control' placeholder='Add a Subheader' {...register("subheader", { required: true })} />

                <h4 className='input-title'>Artist</h4>
                <input className='input-book-title form-control' placeholder="Add Artist's Name" {...register("artist", { required: true })} />

                <button style={{ margin: '54px 32px' }} type="submit" className='btn btn-primary' disabled={submitBtnDisable}>Add Artwork</button>

                <button onClick={(e) => {
                    e.preventDefault()
                    reset()
                    setInnerContent(<NovelList />)
                }} style={{ margin: '54px 0' }} className='btn btn-light'>Cancel</button>

            </form>
        </div>
    );
};

export default AddArtwork;