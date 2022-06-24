import React, { useContext, useEffect, useState } from 'react';
import { message, Popover } from 'antd';
import { SidebarInnerContent } from '../../../../App'
import { Modal } from '@mantine/core'
import AddArtwork from '../AddArtwork/AddArtwork';

import './ArtworkList.scss'


const Artworks = () => {

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


            <div style={{
                padding: '24px 40px',
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <button onClick={() => setInnerContent(<AddArtwork />)} className="btn btn-primary">+Add Artworks</button>
            </div>

            <div className='artwork-container-div bordered'>
                <table className="table">
                    <tbody>
                        <tr>
                            <td colSpan="6">
                                <div className='d-flex justify-content-between mx-2 mt-2'>
                                    <h2 className='table-title'>Artworks</h2>
                                    <input className='search' placeholder='Search' type='text' onChange={event => setSearchItem(event.target.value)}></input>
                                </div>
                            </td>
                        </tr>
                        <tr className='table-header roboto-16-500 txt-dark px-2'>
                            <th>#</th>
                            <th>Title</th>
                            <th>Views</th>
                            <th>Artist</th>
                            <th>Preview Option</th>
                            <th>Actions</th>
                        </tr>
                        {
                            artworkList.filter(artwork => {
                                if (searchItem === "") {
                                    return artwork
                                }
                                else if (artwork.title?.toLowerCase().includes(searchItem.toLowerCase())) {
                                    return artwork
                                }
                            }).map(artwork => {

                                return (
                                    <tr className='table-data'>
                                        <td>{count++}</td>
                                        <td>
                                            <a href="#">{artwork.title}</a>
                                        </td>
                                        <td>{artwork.views}</td>
                                        <td>{artwork.artist}</td>
                                        <td className='preview-text' onClick={() => {
                                            setLightBoxIsOpen(true)
                                            setSingleArtwork(artwork)
                                        }}>Preview</td>
                                        <td>
                                            <Popover placement="bottomRight" className='cursor-pointer' content={
                                                <div className='popOverContent'>
                                                    <p className='my-1 popOverOption' onClick={() => deleteNovel(artwork._id)}>Delete</p>
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

export default Artworks;