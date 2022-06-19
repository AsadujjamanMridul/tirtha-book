import React, { useState, useContext } from 'react';
import './AdminPanel.scss'
import "antd/dist/antd.css";

import { Layout } from 'antd';
import { Avatar } from 'antd';
import { Col, Divider, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import NovelList from '../Novels/NovelList/NovelList';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const { Header, Footer, Sider, Content } = Layout;

const AdminPanel = () => {

    const [headerTitle, setHeaderTitle] = useState('Timeline of Genorisity');
    const [innerContent, setInnerContent] = useState(<NovelList />);

    const handleMenu = (title, component) => {
        setHeaderTitle(title);
        setInnerContent(component);
    }

    return (
        <Layout style={{
            minHeight: '100vh'
        }}>
            <Header>
                <Row>
                    <Col flex="256px">
                        <div className='d-flex justify-content-center align-items-center' style={{ height: "80px" }}>
                            <div style={{
                                height: '44px',
                                width: '115px',
                                borderRadius: '5px',
                                backgroundColor: "#C4C4C4",
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: '#333333'
                            }}>
                                Logo
                            </div>
                        </div>
                    </Col>
                    <Col flex="auto" style={{
                        padding: '0px 36px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <button className='btn btn-primary'> Visit Website </button>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Avatar className='' size={48}></Avatar>
                            <div className='py-2 px-3'>
                                <h4 className='m-0 p-0' style={{
                                    fontFamily: 'Roboto',
                                    fontWeight: '500',
                                    fontSize: '20px',
                                    color: '#333333'
                                }}>Tirtha</h4>
                                <h6 className='m-0 p-0' style={{
                                    fontFamily: 'Roboto',
                                    fontWeight: '400',
                                    fontSize: '16px',
                                    color: '#666666'
                                }}>Admin</h6>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Header>

            <Layout>
                <Sider
                    breakpoint="lg"
                    width={256}
                    collapsedWidth="0"
                    className='shadow-sm'
                    onBreakpoint={broken => {
                        // console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        // console.log(collapsed, type);
                    }}
                    style={{
                        backgroundColor: "#fff"
                    }}
                >
                    <Link to='/'>
                        <div className="d-flex justify-content-center align-items-center"
                            style={{
                                height: "100px",
                                backgroundColor: "#ffffff",
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <div style={{
                                height: '44px',
                                width: '115px',
                                borderRadius: '5px',
                                backgroundColor: "#C4C4C4",
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: '#333333'
                            }}>
                                Logo
                            </div>
                        </div>
                        <Divider style={{
                            borderWidth: ".5px",
                            marginTop: "0px",
                            marginBottom: "24px",
                            paddingLeft: "13px",
                        }} />
                    </Link>

                    <Sidebar handleMenu={handleMenu} />

                </Sider>
                <Content>
                    <div className="bg-white min-vh-100">
                        {innerContent}
                    </div>
                </Content>
            </Layout>

        </Layout>
    );
};

export default AdminPanel;