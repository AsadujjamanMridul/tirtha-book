import React, { useContext, useEffect, useState } from 'react';
import { Popover, message } from 'antd';
import { SidebarInnerContent } from '../../../App'
import Chapters from '../Novels/Chapters/Chapters';
import { Modal } from '@mantine/core'

const DashboardArtworks = () => {

    let count = 1;
    const [innerContent, setInnerContent] = useContext(SidebarInnerContent);
    const [artworkList, setArtworkList] = useState([])
    const [lightboxIsOpen, setLightBoxIsOpen] = useState(false)
    const [singleArtwork, setSingleArtwork] = useState(null)
    const [searchItem, setSearchItem] = useState("")

    useEffect(() => {
        fetch('https://radiant-spire-58573.herokuapp.com/api/artworks')
            .then(res => res.json())
            .then(data => {
                setArtworkList(data);
            });
    }, [])

    const deleteNovel = (id) => {
        const url = `https://radiant-spire-58573.herokuapp.com/api/artworks/${id}`

        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    fetch('https://radiant-spire-58573.herokuapp.com/api/artworks')
                        .then(res => res.json())
                        .then(data => {
                            setArtworkList(data);
                            message.success({
                                content: 'Artwork has been removed successfully!',
                                className: 'message'
                            });
                        });
                }
            })
    }

    return (
        <div>
            {singleArtwork && <Modal
                opened={lightboxIsOpen}
                onClose={() => setLightBoxIsOpen(false)}
                title={singleArtwork.title}
                centered
            >
                <h5 className='artwork-subheader'>{singleArtwork.subheader}</h5>
                <img className='img-fluid' src={`https://radiant-spire-58573.herokuapp.com/api/images/${singleArtwork.imagename}`} alt="PreviewImage" />
            </Modal>}

            <div className='artwork-container-div bordered'>
                <table className="table">
                    <tbody>
                        <tr className='table-header roboto-16-500 txt-dark px-2'>
                            <th className='text-center'>#</th>
                            <th>Title</th>
                            <th>Views</th>
                            <th>Artist</th>
                            <th className='text-center'>Preview Option</th>
                            <th className='text-center'>Actions</th>
                        </tr>
                        {
                            artworkList.slice(Math.max(artworkList.length-3, 1)).map(artwork => {

                                return (
                                    <tr className='table-data'>
                                        <td className='text-center'>{count++}</td>
                                        <td>
                                            <a href="#">{artwork.title}</a>
                                        </td>
                                        <td>{artwork.views}</td>
                                        <td>{artwork.artist}</td>
                                        <td className='preview-text text-center' onClick={() => {
                                            setLightBoxIsOpen(true)
                                            setSingleArtwork(artwork)
                                        }}>Preview</td>
                                        <td className='text-center'>
                                            <Popover placement="bottomRight" className='cursor-pointer' content={
                                                <div className='popOverContent'>
                                                    <p className='my-1 popOverOption' onClick={() => deleteNovel(artwork._id)}>Delete</p>
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

export default DashboardArtworks;