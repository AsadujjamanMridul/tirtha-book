import React, { useState } from 'react';
import NovelList from '../NovelList/NovelList';
import './AddBook.scss'

const AddBook = ({ handleInnerContent }) => {
    const [bookThumbnail, setBookThumbnail] = useState(null)
    const [bookTitle, setBookTitle] = useState('')
    const [bookSynopsis, setBookSynopsis] = useState('')
    const [bookGenre, setBookGenre] = useState('')
    const [bookTags, setBookTags] = useState([])

    const handleSubmit = () => {
        const newBookData = {
            bookTitle: bookTitle,
            bookThumbnail: bookThumbnail,
            bookSynopsis: bookSynopsis,
            bookGenre: bookGenre,
            bookTags: bookTags
        }

        console.log(newBookData);
    }

    return (
        <div className='min-vh-100 w-100'>
            <h3 className='addBook-title'>Add a Book</h3>

            <h4 className='input-title'>Image</h4>
            <input className='input-book-cover form-control' type={'file'} onChange={(e) => setBookThumbnail(e.target.files[0])} />

            <h4 className='input-title'>Title</h4>
            <input className='input-book-title form-control' placeholder='Add a Title' onChange={(e) => { setBookTitle(e.target.value) }} />

            <h4 className='input-title'>Synopsis</h4>
            <textarea className='input-book-synopsis form-control' placeholder='Add a Synopsis' onChange={(e) => { setBookSynopsis(e.target.value) }} />

            <h4 className='input-title'>Genre</h4>
            <h5 className='add-book-subheading'>Please select the genre which best describes your story. Your options are limited to your current genres you selected from above.</h5>
            <input className='input-book-title form-control' placeholder='Type a Genre' onChange={(e) => { setBookGenre(e.target.value) }} />

            <h4 className='input-title'>Tags</h4>
            <h5 className='add-book-subheading'>Each novel is limited to 25 tags. You can search for tags using the search bar below.</h5>
            <input className='input-book-title form-control' placeholder='Add Tags' onChange={(e) => { setBookTags(e.target.value) }} />

            <button onClick={() => handleSubmit()} style={{ margin: '54px 32px' }} type="submit" className='btn btn-primary'>Add Book</button>

            <button onClick={() => handleInnerContent('Add Book', <NovelList  handleInnerContent={handleInnerContent} />)} style={{ margin: '54px 0' }} className='btn btn-light'>Cancel</button>
        </div>
    );
};

export default AddBook;