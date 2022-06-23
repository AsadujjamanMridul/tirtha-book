import React, { useContext, useEffect, useState } from 'react';
import AddBook from '../AddBook/AddBook';
import AddChapter from '../AddChapter/AddChapter';
import Chapters from '../Chapters/Chapters';
import './NovelList.scss'
import { Button, Popover } from 'antd';
import { message, Collapse, Modal } from 'antd';
import {SidebarInnerContent} from '../../../../App'
import { Badge } from '@mantine/core';

const NovelList = () => {

    const [innerContent, setInnerContent] = useContext(SidebarInnerContent);

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
                <button onClick={() => setInnerContent(<AddBook/>)} className="btn btn-primary">+Add Novel</button>
            </div>

            <div className='chapter-container-div'>
                <table className="table">
                    <tbody>
                        <tr>
                            <td colSpan="6">
                                <div className='d-flex justify-content-between mx-2 mt-2'>
                                    <h2 className='table-title'>Novel List</h2>
                                    <input className='search' placeholder='Search' type={'text'}></input>
                                </div>
                            </td>
                        </tr>
                        <tr className='table-header roboto-16-500 txt-dark'>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Chapters</th>
                            <th scope="col">Author</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Actions</th>
                        </tr>
                        {
                            novelList.map(novel => {
                                return (
                                    <tr className='table-data'>
                                        <td>{count++}</td>
                                        <td>
                                            <a href="#">{novel.name}</a>
                                        </td>
                                        <td>{novel.chapters.length}</td>
                                        <td>{novel.author}</td>
                                        <td>{novel.genre.map(gen=> {
                                           return <Badge className='me-2' size="lg" color="gray">{gen}</Badge>
                                        })}</td>
                                        <td>
                                            <Popover placement="bottomRight" content={
                                                <div className='popOverContent'>
                                                    <p className='popOverOption' onClick={() => { setInnerContent() }}>Edit</p>
                                                    <p className='popOverOption' onClick={() => { setInnerContent(<Chapters/>) }}>Chapters</p>
                                                    <p className='mb-2 popOverOption' onClick={() => deleteNovel(novel._id)}>Delete</p>
                                                </div>
                                            } trigger="click">
                                                <img className='px-1' src={require('../../../../assets/svg/Action_Button.svg').default} alt="Actions" />
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

export default NovelList;