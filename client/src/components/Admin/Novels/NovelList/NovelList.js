import React from 'react';
import './NovelList.scss'

const NovelList = () => {
    return (
        <div>
            <div style={{
                padding: '24px 40px',
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <button className="btn btn-primary">+Add Novel</button>
            </div>

            <div className='' style={{
                padding: '0 36px'
            }}>
                <table className="table">
                    <tbody>
                        <tr>
                            <td colspan="6">
                                <div className='d-flex justify-content-between'>
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
                        <tr className='table-data'>
                            <td>1</td>
                            <td>
                                <a href="#">Stupore E Tremori</a>
                            </td>
                            <td>83</td>
                            <td>Tirtho Chowdhury</td>
                            <td>Adventure, Comedy</td>
                            <td>
                                <img className='px-1' src={require('../../../../assets/svg/Action_Button.svg').default} alt="Actions" />
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NovelList;