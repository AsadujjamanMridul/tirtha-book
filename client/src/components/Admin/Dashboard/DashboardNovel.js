import React, { useContext, useEffect, useState } from 'react';
import { Popover, message } from 'antd';
import { Badge } from '@mantine/core';
import { SidebarInnerContent } from '../../../App'
import Chapters from '../Novels/Chapters/Chapters';

const DashboardNovel = () => {

    const [innerContent, setInnerContent] = useContext(SidebarInnerContent);

    const [novelList, setNovelList] = useState([])
    const [searchItem, setSearchItem] = useState("")
    let count = 1;

    useEffect(() => {
        fetch('https://radiant-spire-58573.herokuapp.com/api/novels')
            .then(res => res.json())
            .then(data => {
                setNovelList(data);
            });
    }, [])

    const deleteNovel = (id) => {
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
            <div className='chapter-container-div'>
                <table className="table">
                    <tbody>
                        <tr className='table-header roboto-16-500 txt-dark'>
                            <th scope="col" className='text-center'>#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Chapters</th>
                            <th scope="col">Author</th>
                            <th scope="col">Genre</th>
                            <th scope="col" className='text-center'>Actions</th>
                        </tr>
                        {
                            novelList.slice(Math.max(novelList.length-3, 0)).map(novel => {
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
                                                    <p className='popOverOption' onClick={() => { setInnerContent(<Chapters novel={novel} />) }}>Chapters</p>
                                                    <p className='mb-2 popOverOption' onClick={() => deleteNovel(novel._id)}>Delete</p>
                                                </div>
                                            } trigger="click">
                                                <svg className='px-1' width="30" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export default DashboardNovel;