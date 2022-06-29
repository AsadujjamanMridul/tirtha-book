import React, { useContext } from 'react';
import { Menu } from 'antd';
import NovelList from '../Novels/NovelList/NovelList';
import Users from '../Users/Users';
import Dashboard from '../Dashboard/Dashboard';
import ArtworkList from '../Artworks/ArtworkList/ArtworkList';
import Forums from '../Forums/Forums';
import { SidebarInnerContent } from '../../../App'
import StoredContent from '../StoredContent/StoredContent';
import Donation from '../Donation/Donation';

const Sidebar = () => {

    const [innerContent, setInnerContent] = useContext(SidebarInnerContent);

    return (
        <Menu className='sticky-top' theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item
                key="1"
                className='center justify-content-start p-3 menu-item'
                title="Dashboard"
                icon={
                    <svg className='mx-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 12H17.4L14.7 20L9.3 4L6.6 12H3" stroke="#4F4F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                }
                onClick={() => setInnerContent(<Dashboard key={"Dashboard"} />)}> Dashboard </Menu.Item>

            <Menu.Item
                key="2"
                className='center justify-content-start p-3 menu-item'
                title="Users"
                icon={
                    <svg className='mx-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12C14.525 12 16.5714 9.98555 16.5714 7.5C16.5714 5.01445 14.525 3 12 3C9.475 3 7.42857 5.01445 7.42857 7.5C7.42857 9.98555 9.475 12 12 12ZM15.4214 13.1461L13.7143 19.875L12.5714 15.0938L13.7143 13.125H10.2857L11.4286 15.0938L10.2857 19.875L8.57857 13.1461C6.03214 13.2656 4 15.3152 4 17.85V19.3125C4 20.2441 4.76786 21 5.71429 21H18.2857C19.2321 21 20 20.2441 20 19.3125V17.85C20 15.3152 17.9679 13.2656 15.4214 13.1461Z" fill="#4f4f4f" />
                    </svg>
                }
                onClick={() => setInnerContent(<Users key={"Users"} />)}> Users </Menu.Item>

            <Menu.Item
                key="3"
                className='center justify-content-start p-3 menu-item'
                title="Novels"
                icon={
                    <svg className='mx-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.2405 7.46416C20.4327 7.46416 20.625 7.46416 20.8173 7.52825C21.0096 10.4122 21.0737 13.617 21.2018 16.5652C17.8051 15.6038 15.5619 16.1165 13.6393 17.4625C15.7543 15.6038 17.7412 15.2192 20.6251 15.9242L20.2405 7.46416Z" fill="#4f4f4f" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.96139 7.46416C3.76911 7.46416 3.57684 7.46416 3.38455 7.52825C3.25637 10.4122 3.12818 13.617 3 16.5652C6.39671 15.6038 8.70417 16.1165 10.5626 17.4625C8.44752 15.6038 6.46067 15.2192 3.57674 15.9242L3.96139 7.46416Z" fill="#4f4f4f" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.0369 8.23331C10.3064 6.43873 7.67858 5.79792 4.34611 6.05418C4.15383 8.93811 4.02565 11.8865 3.89746 14.8347C7.74297 13.8733 10.0502 15.6038 12.037 17.7829V8.23344L12.0369 8.23331Z" fill="#4f4f4f" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.1648 8.23331C12.3571 8.04103 12.6134 7.84876 12.8698 7.65647V13.5528C13.1262 13.0401 13.1262 12.6555 13.1903 12.4632C13.3184 12.7196 13.3184 12.7837 13.6389 13.1041V7.07963C15.2412 6.18234 17.4202 5.86188 19.9198 6.05414C20.048 8.93808 20.1762 11.8865 20.3044 14.8347C16.4588 13.8733 14.1516 15.6038 12.1648 17.7828V8.23341V8.23331Z" fill="#4f4f4f" />
                    </svg>

                }
                onClick={() => setInnerContent(<NovelList key={"NovelList"} />)}>  Novels </Menu.Item>

            <Menu.Item
                key="4"
                className='center justify-content-start p-3 menu-item'
                title="Artworks"
                icon={
                    <svg className='mx-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.48219 16.4284C7.55191 16.4284 7.62216 16.4017 7.67532 16.3479L10.1836 13.8397L11.2556 14.9116C11.363 15.0186 11.5363 15.0186 11.6429 14.9116L14.7325 11.8218L16.2494 13.3381C16.3564 13.4453 16.5295 13.4453 16.6365 13.3381C16.7432 13.2311 16.7432 13.0582 16.6365 12.9513L14.9258 11.2413C14.8192 11.1343 14.6459 11.1343 14.5392 11.2413L11.4496 14.3315L10.3773 13.2592C10.2701 13.1525 10.097 13.1525 9.99013 13.2592L7.28815 15.9615C7.18113 16.0685 7.18113 16.2411 7.28815 16.3481C7.34219 16.4018 7.41191 16.4285 7.48216 16.4285L7.48219 16.4284Z" fill="#4f4f4f" />
                        <path d="M8.81607 12.9398C9.55146 12.9398 10.1497 12.3414 10.1497 11.6058C10.1497 10.8704 9.55133 10.2718 8.81607 10.2718C8.08082 10.2718 7.48242 10.8701 7.48242 11.6058C7.48242 12.3412 8.08064 12.9398 8.81607 12.9398ZM8.81607 10.8191C9.24993 10.8191 9.60291 11.1719 9.60291 11.6058C9.60291 12.0397 9.24976 12.3925 8.81607 12.3925C8.38222 12.3925 8.02941 12.0397 8.02941 11.6058C8.02941 11.1721 8.38221 10.8191 8.81607 10.8191Z" fill="#4f4f4f" />
                        <path d="M19.6781 7.11153H4.24612C4.11016 7.11153 4 7.2217 4 7.35766V19.3421C4 19.4782 4.11017 19.5886 4.24612 19.5886H19.6781C19.8143 19.5886 19.9246 19.4784 19.9246 19.3421V7.35766C19.9248 7.22204 19.8143 7.11153 19.6781 7.11153ZM19.2279 7.60431L18.7696 8.06259C18.7574 8.06102 18.7466 8.05561 18.7344 8.05561H5.31221L4.86112 7.60434L19.2279 7.60431ZM18.488 8.54818V18.1524H5.5236V8.54818H18.488ZM4.4928 7.93166L5.03158 8.47044V18.2706L4.4928 18.8088V7.93166ZM4.90208 19.0968L5.35407 18.6448H18.7343C18.7348 18.6448 18.7348 18.6443 18.7354 18.6443L19.1874 19.0968L4.90208 19.0968ZM19.4323 18.6448L18.9805 18.1937V8.548L19.4323 8.09672V18.6448Z" fill="#4f4f4f" />
                        <path d="M11.0421 6.81346L12.2609 5.59453L13.4798 6.81346C13.576 6.90967 13.7317 6.90967 13.8284 6.81346C13.9246 6.71724 13.9246 6.56123 13.8284 6.46519L12.4353 5.0721C12.3391 4.97605 12.1835 4.97588 12.0871 5.0721L10.694 6.46519C10.5979 6.5614 10.5983 6.71741 10.694 6.81346C10.79 6.90967 10.9457 6.90967 11.0421 6.81346H11.0421Z" fill="black" />
                    </svg>
                }
                onClick={() => setInnerContent(<ArtworkList key={"ArtworkList"} />)}> Artworks </Menu.Item>

            <Menu.Item
                key="5"
                className='center justify-content-start p-3 menu-item'
                title="Forums"
                icon={
                    <svg className='ms-1' width="28" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.3399 7.86079H13.9149V7.17802C13.9149 6.3395 13.2327 5.65714 12.394 5.65714L4.66017 5.65728C3.82164 5.65728 3.13953 6.33963 3.13953 7.17816V12.3244C3.13953 13.163 3.82174 13.8451 4.66017 13.8451H5.57584L5.47566 15.6411C5.46467 15.835 5.57182 16.0162 5.747 16.1006C5.81329 16.1324 5.88427 16.148 5.95499 16.148C6.0707 16.148 6.18535 16.1061 6.27521 16.0254L8.71111 13.8451H10.0859V14.5278C10.0859 15.3664 10.7681 16.0487 11.6068 16.0487H15.2904L17.7255 18.2289C17.8154 18.3096 17.93 18.3515 18.0457 18.3515H18.0496C18.3148 18.3515 18.5296 18.1367 18.5296 17.8715C18.5296 17.8415 18.5269 17.8122 18.5216 17.7838L18.4246 16.0487H19.3403C20.1788 16.0487 20.8609 15.3664 20.8609 14.5279L20.8608 9.38157C20.8608 8.54304 20.1787 7.86069 19.3401 7.86069L19.3399 7.86079ZM8.52688 12.885C8.40875 12.885 8.29478 12.9285 8.20679 13.0076L6.4984 14.5369L6.56228 13.3919C6.56978 13.26 6.52237 13.1311 6.4317 13.0354C6.34103 12.9396 6.21487 12.8853 6.08309 12.8853H4.65995C4.35085 12.8853 4.09931 12.6337 4.09931 12.3246V7.178C4.09931 6.86889 4.35083 6.61712 4.65995 6.61712H12.3938C12.7029 6.61712 12.9547 6.86877 12.9547 7.178V7.86076H11.6059C10.7672 7.86076 10.085 8.54312 10.085 9.38164V12.885L8.52688 12.885ZM19.9005 14.5278C19.9005 14.8369 19.649 15.0887 19.3398 15.0887H17.9167C17.7848 15.0887 17.6586 15.143 17.5681 15.2388C17.4774 15.3346 17.4303 15.4637 17.4375 15.5953L17.5014 16.7403L15.793 15.211C15.705 15.1321 15.591 15.0884 15.4729 15.0884H11.6058C11.2967 15.0884 11.0449 14.8368 11.0449 14.5275L11.0451 9.38159C11.0451 9.07248 11.2967 8.82071 11.606 8.82071H19.3398C19.6489 8.82071 19.9004 9.07236 19.9004 9.38159L19.9005 14.5278Z" fill="#4f4f4f" />
                    </svg>

                }
                onClick={() => setInnerContent(<Forums key={"Forums"} />)}> Forums </Menu.Item>

            <Menu.Item
                key="6"
                className='center justify-content-start p-3 menu-item'
                title="Stored Content"
                icon={
                    <svg className='mx-1' width="24" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8C16.4183 8 20 6.88071 20 5.5C20 4.11929 16.4183 3 12 3C7.58172 3 4 4.11929 4 5.5C4 6.88071 7.58172 8 12 8Z" stroke="#4f4f4f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 12C20 13.66 16.4444 15 12 15C7.55556 15 4 13.66 4 12" stroke="#4f4f4f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 6V18.3529C4 19.8176 7.55556 21 12 21C16.4444 21 20 19.8176 20 18.3529V6" stroke="#4f4f4f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                }
                onClick={() => setInnerContent(<StoredContent key={"StoredContent"} />)}> Stored Content </Menu.Item>

            <Menu.Item
                key="7"
                className='center justify-content-start p-3 menu-item'
                title="Donation"
                icon={
                    <svg className='mx-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0287 13.0587L9.67665 11.9291L10.6715 16.1179L17.0287 13.0587ZM17.3268 12.7157L11.5461 4.96612L9.65788 11.5574L17.3268 12.7157ZM9.29984 11.4674L3.24234 4L11.175 4.91482L9.29984 11.4674ZM6.36099 8.37242L3 5.31464H3.88337L6.36099 8.37242ZM19.1316 8.95078L17.7094 12.6739L15.4027 9.59703L19.1316 8.95078ZM11.5685 16.0666L17.1502 13.9041L17.3868 13.2176L11.5685 16.0666ZM6.91291 20L9.30453 11.9019L10.5168 17.1721L6.91291 20ZM19.4725 8.97894L18.8846 10.5159L21 10.4807L19.4725 8.97894Z" fill="#4f4f4f" />
                    </svg>

                }
                onClick={() => setInnerContent(<Donation key={"Donation"} />)}> Donation </Menu.Item>

            <Menu.Item
                key="8"
                className='center justify-content-start p-3 menu-item'
                title="Logout"
                icon={
                    <svg className='mx-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.016 7.3895V6.4565C15.016 4.4215 13.366 2.7715 11.331 2.7715H6.45597C4.42197 2.7715 2.77197 4.4215 2.77197 6.4565V17.5865C2.77197 19.6215 4.42197 21.2715 6.45597 21.2715H11.341C13.37 21.2715 15.016 19.6265 15.016 17.5975V16.6545" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.8095 12.0214H9.76849" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.8812 9.10631L21.8092 12.0213L18.8812 14.9373" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                }
                onClick={() => setInnerContent(<Dashboard key={"Dashboard"} />)}> Logout </Menu.Item>
        </Menu>
    );
};

export default Sidebar;