import React, { useEffect, useState } from 'react';
import { Modal } from '@mantine/core'
import './StoredContent.scss'

const StoredContent = () => {

    const [allContents, setAllContents] = useState({})
    const [lightboxIsOpen, setLightBoxIsOpen] = useState(false)
    const [lightboxImageName, setLightBoxImageName] = useState("")
    const [updated, setUpdated] = useState(false)
    const [btnDisable, setBtnDisable] = useState(false)

    useEffect(() => {
        fetch('https://radiant-spire-58573.herokuapp.com/api/storedContent')
            .then(res => res.json())
            .then(data => {
                setAllContents(data[0]);
            });
    }, [updated])

    const handleImageUpload = (content, image) => {
        const formData = new FormData()
        formData.append(content, image)

        setBtnDisable(true)

        fetch(`https://radiant-spire-58573.herokuapp.com/api/storedContent/${content}/${allContents._id}`, {
            method: 'PATCH',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setUpdated(!updated)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            {lightboxImageName.length > 0 && <Modal
                opened={lightboxIsOpen}
                onClose={() => setLightBoxIsOpen(false)}
                centered
            >
                <img className='img-fluid' src={`https://radiant-spire-58573.herokuapp.com/api/images/${lightboxImageName}`} alt="PreviewImage" />
            </Modal>}

            <div className='min-vh-100 stored-content-container'>
                <h3 className='stored-content-title'>Stored Contents</h3>

                <div>
                    <h5 className='hero-slider-title'>Hero Slider</h5>

                    <div className="input-group mb-3">
                        <div type="text" className="form-control input-hero-slider" onClick={() => {
                            setLightBoxIsOpen(true)
                            setLightBoxImageName(allContents.heroSlider1)
                        }}>
                            <p className='stored-content-imagename'>Hero Slider 1 - Preview</p>
                        </div>
                        <input className="btn" type="file" id="browse-btn1" onChange={(e) => handleImageUpload("heroSlider1", e.target.files[0])} hidden />
                        <label className='btn-stored-content center' htmlFor="browse-btn1">Browse</label>
                    </div>

                    <div className="input-group mb-3">
                        <div type="text" className="form-control input-hero-slider" onClick={() => {
                            setLightBoxIsOpen(true)
                            setLightBoxImageName(allContents.heroSlider2)
                        }}>
                            <p className='stored-content-imagename'>Hero Slider 2 - Preview</p>
                        </div>
                        <input className="btn" type="file" id="browse-btn2" onChange={(e) => handleImageUpload("heroSlider2", e.target.files[0])} hidden />
                        <label className='btn-stored-content center' htmlFor="browse-btn2">Browse</label>
                    </div>

                    <div className="input-group mb-3">
                        <div type="text" className="form-control input-hero-slider" onClick={() => {
                            setLightBoxIsOpen(true)
                            setLightBoxImageName(allContents.heroSlider3)
                        }}>
                            <p className='stored-content-imagename'>Hero Slider 3 - Preview</p>
                        </div>
                        <input className="btn" type="file" id="browse-btn3" onChange={(e) => handleImageUpload("heroSlider3", e.target.files[0])} hidden />
                        <label className='btn-stored-content center' htmlFor="browse-btn3">Browse</label>
                    </div>
                </div>

                <div>
                    <h5 className='novel-thumbnail-title'>Novel Thumbnail</h5>
                    <div className="input-group mb-3">
                        <div type="text" className="form-control input-hero-slider" onClick={() => {
                            setLightBoxIsOpen(true)
                            setLightBoxImageName(allContents.novelThumbnail)
                        }}>
                            <p className='stored-content-imagename'>Choose from desktop</p>
                        </div>
                        <input className="btn" type="file" id="browse-btn4" onChange={(e) => handleImageUpload("artworkThumbnail", e.target.files[0])} hidden />
                        <label className='btn-stored-content center' htmlFor="browse-btn4">Browse</label>
                    </div>
                </div>

                <div>
                    <h5 className='artwork-thumbnail-title'>Artwork Thumbnail</h5>
                    <div className="input-group mb-3">
                        <div type="text" className="form-control input-hero-slider" onClick={() => {
                            setLightBoxIsOpen(true)
                            setLightBoxImageName(allContents.artworkThumbnail)
                        }}>
                            <p className='stored-content-imagename'>Choose from desktop</p>
                        </div>
                        <input className="btn" type="file" id="browse-btn5" onChange={(e) => handleImageUpload("novelThumbnail", e.target.files[0])} hidden />
                        <label className='btn-stored-content center' htmlFor="browse-btn5">Browse</label>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StoredContent;