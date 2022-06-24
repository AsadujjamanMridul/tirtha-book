import React, { useContext, useState } from 'react';
import { SidebarInnerContent } from '../../../../App'
import { MultiSelect } from '@mantine/core';
import { useForm } from "react-hook-form";
import NovelList from '../NovelList/NovelList';
import './AddNovel.scss'

const AddNovel = () => {

    const [innerContent, setInnerContent] = useContext(SidebarInnerContent);

    const [image, setImage] = useState(null)
    const [genre, setGenre] = useState([])
    const [tags, setTags] = useState([])
    const [submitBtnDisable, setSubmitBtnDisable] = useState(false)

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', image)
        formData.append('name', data.name)
        formData.append('author', data.author)
        formData.append('synopsis', data.synopsis)

        for (let i = 0; i < genre.length; i++) {
            formData.append('genre', genre[i]);
        }

        for (let i = 0; i < tags.length; i++) {
            formData.append('tags', tags[i]);
        }

        setSubmitBtnDisable(true)

        fetch('https://radiant-spire-58573.herokuapp.com/api/novels', {
            method: 'POST',
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
            <h3 className='addBook-title'>Add a Book</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h4 className='input-title'>Image</h4>
                <input className='input-book-cover form-control' type={'file'} onChange={(e) => setImage(e.target.files[0])} required />

                <h4 className='input-title'>Title</h4>
                <input className='input-book-title form-control' placeholder='Add a Title' {...register("name", { required: true })} />

                <h4 className='input-title'>Author</h4>
                <input className='input-book-title form-control' placeholder="Add Author's Name" {...register("author", { required: true })} />

                <h4 className='input-title'>Synopsis</h4>
                <textarea className='input-book-synopsis form-control' placeholder='Add a Synopsis' {...register("synopsis", { required: true })} />

                <h4 className='input-title'>Genre</h4>
                <h5 className='add-book-subheading'>Please select the genre which best describes your story. Your options are limited to your current genres you selected from above.</h5>
                <MultiSelect
                    data={['Action', 'Thriller', 'Detective', 'Romance']}
                    className="custom-multiselect"
                    placeholder="Type a Genre"
                    creatable
                    searchable
                    maxSelectedValues={3}
                    getCreateLabel={(query) => `+ Create ${query}`}
                    onCreate={(query) => setGenre((current) => [...current, query])}
                    onChange={setGenre}
                    required
                />

                <h4 className='input-title'>Tags</h4>
                <h5 className='add-book-subheading'>Each novel is limited to 25 tags. You can search for tags using the search bar below.</h5>
                <MultiSelect
                    data={['Suspense', 'Thriller', 'Fiction']}
                    className="custom-multiselect"
                    placeholder="Add Tags"
                    searchable
                    creatable
                    maxSelectedValues={5}
                    getCreateLabel={(query) => `+ Create ${query}`}
                    onCreate={(query) => setTags((current) => [...current, query])}
                    onChange={setTags}
                    required
                />

                <button onClick={handleSubmit} style={{ margin: '54px 32px' }} type="submit" className='btn btn-primary' disabled={submitBtnDisable}>Add Book</button>

                <button onClick={(e) => {
                    e.preventDefault()
                    reset()
                    setInnerContent(<NovelList />)
                }} className='btn btn-light'>Cancel</button>
            </form>
        </div>
    );
};

export default AddNovel;