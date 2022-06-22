import React, { useEffect, useState } from 'react';
import './Artworks.scss'
import AddBook from '../Novels/AddBook/AddBook';
import { message, Collapse} from 'antd';
import { Button, Popover } from 'antd';
import AddChapter from '../Novels/AddChapter/AddChapter';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";

const Artworks = ({ handleInnerContent }) => {

    const [novelList, setNovelList] = useState([])
    let count = 1;

    useEffect(() => {
        fetch('http://localhost:5000/api/novels')
            .then(res => res.json())
            .then(data => {
                setNovelList(data);
                console.log(data);
            });
    }, [])

    const deleteNovel = (id) => {
        const url = `http://localhost:5000/api/novels/${id}`

        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    fetch('http://localhost:5000/api/novels')
                        .then(res => res.json())
                        .then(data => {
                            setNovelList(data);
                            message.success({
                                content: 'Book has been removed successfully!',
                                className: 'message'
                            });
                        });
                }
            })
    }

    return (
        <div>
            <div style={{
                padding: '24px 40px',
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <button onClick={() => handleInnerContent('Add Artworks', <AddBook handleInnerContent={handleInnerContent} />)} className="btn btn-primary">+Add Artworks</button>
            </div>

            <div className='artwork-container-div bordered'>
            <table className="table">
                    <tbody>
                        <tr>
                            <td colSpan="6">
                                <div className='d-flex justify-content-between mx-2 mt-2'>
                                    <h2 className='table-title'>Artworks</h2>
                                    <input className='search' placeholder='Search' type={'text'}></input>
                                </div>
                            </td>
                        </tr>
                        <tr className='table-header roboto-16-500 txt-dark px-2'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Views</th>
                            <th>Artist</th>
                            <th>Preview Option</th>
                            <th>Actions</th>
                        </tr>
                        {
                            novelList.map(novel => {
                                return (
                                    <tr className='table-data'>
                                        <td>{count++}</td>
                                        <td>
                                            <a href="#">{novel.Name}</a>
                                        </td>
                                        <td>{novel.Chapters.length}</td>
                                        <td>{novel.Author}</td>
                                        <td className='preview-text'>Preview</td>
                                        <td>
                                            <Popover placement="bottomRight" content={
                                                <div className='popOverContent'>
                                                    <p className='popOverOption' onClick={() => { handleInnerContent() }}>Edit</p>
                                                    <p className='popOverOption' onClick={() => { handleInnerContent('Chapters', <AddChapter novel={novel} handleInnerContent={handleInnerContent} />) }}>Chapters</p>
                                                    <p className='mb-2 popOverOption' onClick={() => deleteNovel(novel._id)}>Delete</p>
                                                </div>
                                            } trigger="click">
                                                <img className='px-1' src={require('../../../assets/svg/Action_Button.svg').default} alt="Actions" />
                                            </Popover>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Artworks;