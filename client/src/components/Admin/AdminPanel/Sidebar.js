import React from 'react';
import { Badge, Layout, Menu } from 'antd';
import { EditOutlined, TeamOutlined, UserSwitchOutlined, ExclamationCircleOutlined, DatabaseOutlined, SmileOutlined, PictureOutlined } from '@ant-design/icons';
// import Dashboard from '../../../assets/svg/Dashboard.svg'
import NovelList from '../Novels/NovelList/NovelList';
import Users from '../Users/Users';
import Dashboard from '../Dashboard/Dashboard';
import Artworks from '../Artworks/Artworks';
import Forums from '../Forums/Forums';

const Sidebar = ({ handleInnerContent }) => {
    return (
        <Menu className='sticky-top' theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item
                key="1"
                className='center justify-content-start p-3 menu-item'
                title="Dashboard"
                icon={<img className='px-1' src={require('../../../assets/svg/Dashboard.svg').default} alt="Dashboard" />}
                onClick={() => handleInnerContent('Dashboard', <Dashboard />)}> Dashboard </Menu.Item>

            <Menu.Item
                key="2"
                className='center justify-content-start p-3 menu-item'
                title="Users"
                icon={<img className='px-1' src={require('../../../assets/svg/User.svg').default} alt="Users" />}
                onClick={() => handleInnerContent('Users', <Users />)}> Users </Menu.Item>

            <Menu.Item
                key="3"
                className='center justify-content-start p-3 menu-item'
                title="Novels"
                icon={<img className='px-1' src={require('../../../assets/svg/noun-novel-2226043.svg').default} alt="Users" />}
                onClick={() => handleInnerContent('Novels', <NovelList handleInnerContent={handleInnerContent}/>)}>  Novels </Menu.Item>

            <Menu.Item
                key="4"
                className='center justify-content-start p-3 menu-item'
                title="Artworks"
                icon={<img className='px-1' src={require('../../../assets/svg/noun-artwork-88128 1.svg').default} alt="Users" />}
                onClick={() => handleInnerContent('Artworks', <Artworks />)}> Artworks </Menu.Item>

            <Menu.Item
                key="5"
                className='center justify-content-start p-3 menu-item'
                title="Forums"
                icon={<img className='px-1' src={require('../../../assets/svg/noun-forum-3485014 (1).svg').default} alt="Users" />}
                onClick={() => handleInnerContent('Forums', <Forums />)}> Forums </Menu.Item>

            <Menu.Item
                key="6"
                className='center justify-content-start p-3 menu-item'
                title="Stored Content"
                icon={<img className='px-1' src={require('../../../assets/svg/Store.svg').default} alt="Users" />}
                onClick={() => handleInnerContent('Stored Content', <NovelList />)}> Stored Content </Menu.Item>

            <Menu.Item
                key="7"
                className='center justify-content-start p-3 menu-item'
                title="Donation"
                icon={<img className='px-1' src={require('../../../assets/svg/bKash.svg').default} alt="Users" />}
                onClick={() => handleInnerContent('Donation', <NovelList />)}> Donation </Menu.Item>

            <Menu.Item
                key="8"
                className='center justify-content-start p-3 menu-item'
                title="Logout"
                icon={<img className='px-1' src={require('../../../assets/svg/Logout.svg').default} alt="Users" />}
                onClick={() => handleInnerContent('Logout', <NovelList />)}> Logout </Menu.Item>
        </Menu>
    );
};

export default Sidebar;