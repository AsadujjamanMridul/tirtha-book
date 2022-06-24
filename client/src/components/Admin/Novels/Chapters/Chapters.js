import React, { useContext } from 'react';
import AddChapter from '../AddChapter/AddChapter';
import './Chapters.scss'
import { RightOutlined } from '@ant-design/icons';
import {SidebarInnerContent} from '../../../../App'

const Chapters = ({ novel }) => {

    const [innerContent, setInnerContent] = useContext(SidebarInnerContent);

    let counter = 1

    return (
        <div className='min-vh-100 w-100'>
            <div className='title-with-button'>
                <h3 className='addBook-title'>Chapters</h3>
                <div><button onClick={() => setInnerContent(<AddChapter id={novel._id}/>)} className="btn btn-primary">+Add Chapter</button>
                </div>
            </div>

            <div className='chapter-container-div'>
                <table class="table table-striped table-hover table-bordered">
                    <tbody>
                        {
                            novel.chapters.map(chapter => {
                                return (
                                    <tr>
                                        <td>
                                            <div className='w-100 d-flex justify-content-between align-items-center'>
                                                <h4 className='chapter-name'>{counter++}. {chapter.chapter_name}</h4>
                                                <h5 className='chapter-upload-date center'>Uploaded on - {chapter.last_update} <span className='right-icon'> <RightOutlined /> </span> </h5>
                                            </div>
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

export default Chapters;