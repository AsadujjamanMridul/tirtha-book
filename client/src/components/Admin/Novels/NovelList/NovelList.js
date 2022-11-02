import React, { useContext, useEffect, useState } from 'react';
import { Popover, message } from 'antd';
import { Badge, LoadingOverlay } from '@mantine/core';
import AddNovel from '../AddNovel/AddNovel';
import Chapters from '../Chapters/Chapters';
import { SidebarInnerContent } from '../../../../App'
import './NovelList.scss'


const NovelList = () => {

    const [innerContent, setInnerContent] = useContext(SidebarInnerContent);

    const [novelList, setNovelList] = useState([])
    const [searchItem, setSearchItem] = useState("")
    const [loaderVisible, setLoaderVisible] = useState(false);

    let count = 1;

    useEffect(() => {
        setLoaderVisible(true)
        fetch('https://radiant-spire-58573.herokuapp.com/api/novels')
            .then(res => res.json())
            .then(data => {
                setNovelList(data);
                setLoaderVisible(false)
            });
    }, [])

    const deleteNovel = (id) => {
        setLoaderVisible(true)
        const url = `https://radiant-spire-58573.herokuapp.com/api/novels/${id}`

        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    fetch('https://radiant-spire-58573.herokuapp.com/api/novels')
                        .then(res => res.json())
                        .then(data => {
                            setNovelList(data);
                            setLoaderVisible(false)
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
            <LoadingOverlay visible={loaderVisible} loaderProps={{ variant: 'bars' }} />
            <div style={{
                padding: '24px 40px',
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <button onClick={() => setInnerContent(<AddNovel />)} className="btn btn-primary">+Add Novel</button>
            </div>

            <div className='chapter-container-div'>
                <table className="table">
                    <tbody>
                        <tr>
                            <td colSpan="6">
                                <div className='d-flex justify-content-between mx-2 mt-2'>
                                    <h2 className='table-title'>Novel List</h2>
                                    <input className='search' placeholder='Search' type='text' onChange={event => setSearchItem(event.target.value)}></input>
                                </div>
                            </td>
                        </tr>
                        <tr className='table-header roboto-16-500 txt-dark'>
                            <th scope="col" className='text-center'>#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Chapters</th>
                            <th scope="col">Author</th>
                            <th scope="col">Genre</th>
                            <th scope="col" className='text-center'>Actions</th>
                        </tr>
                        {
                            novelList.filter(novel => {
                                if (searchItem === "") {
                                    return novel
                                }
                                else if (novel.name?.toLowerCase().includes(searchItem.toLowerCase())) {
                                    return novel
                                }
                            }).map(novel => {
                                return (
                                    <tr className='table-data'>
                                        <td className='text-center'>{count++}</td>
                                        <td>
                                            <a href="#">{novel.name}</a>
                                        </td>
                                        <td>{novel.chapters.length}</td>
                                        <td>{novel.author}</td>
                                        <td>{novel.genre.map(gen => {
                                            return <Badge className='me-2' size="lg" color="gray">{gen}</Badge>
                                        })}</td>
                                        <td className='text-center'>
                                            <Popover placement="bottomRight" className='cursor-pointer' content={
                                                <div className='popOverContent'>
                                                    <p className='popOverOption' onClick={() => { setInnerContent() }}>Edit</p>
                                                    <p className='popOverOption' onClick={() => { setInnerContent(<Chapters novel={novel} />) }}>Chapters</p>
                                                    <p className='mb-2 popOverOption' onClick={() => deleteNovel(novel._id)}>Delete</p>
                                                </div>
                                            } trigger="click">
                                                <svg className='px-1' width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="12" fill="#625A99" fillOpacity="0.12" />
                                                    <circle cx="11.9999" cy="7.19998" r="1.6" fill="#625A99" />
                                                    <circle cx="11.9999" cy="12" r="1.6" fill="#625A99" />
                                                    <circle cx="11.9999" cy="16.8" r="1.6" fill="#625A99" />
                                                </svg>

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