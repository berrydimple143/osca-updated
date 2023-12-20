import React, { useState, useEffect } from 'react';
import { Space, Dropdown, Menu } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    DashboardOutlined,
    UsergroupAddOutlined,
    UserOutlined,
    LogoutOutlined,
    SmileOutlined,
    DownOutlined,
    UserSwitchOutlined,
    SolutionOutlined,
    IdcardOutlined,
    ReadOutlined,
    WomanOutlined,
    ShopOutlined,
    MedicineBoxOutlined,
    ApartmentOutlined,
    BarChartOutlined } from '@ant-design/icons';

const rootURL = process.env.NEXT_PUBLIC_URL;

const Sidebar = ({
    isDashboard,
    isMember,
    isUser,
    isReport,
    role
}) =>
{
    const [open, setOpen] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    const menu = (
        <Menu
          items={[
            {
              label: (
                <a href={`${rootURL}/admin/reports`}>
                    <Space><UserSwitchOutlined />Member Status</Space>
                    <hr className='divider' />
                </a>
              ),
            },
            {
              label: (
                <a href={`${rootURL}/admin/reports/employment`}>
                    <Space><SolutionOutlined />Employment Status</Space>
                    <hr className='divider' />
                </a>
              ),
            },
            {
              label: (
                <a href={`${rootURL}/admin/reports/education`}>
                    <Space><ReadOutlined />Educational Attainment</Space>
                    <hr className='divider' />
                </a>
              ),
            },
            {
              label: (
                <a href={`${rootURL}/admin/reports/civil-status`}>
                    <Space><IdcardOutlined />Civil Status</Space>
                    <hr className='divider' />
                </a>
              ),
            },
            {
              label: (
                <a href={`${rootURL}/admin/reports/gender`}>
                    <Space><WomanOutlined />Gender</Space>
                    <hr className='divider' />
                </a>
              ),
            },
            {
              label: (
                <a href={`${rootURL}/admin/reports/religion`}>
                    <Space><ShopOutlined />Religion</Space>
                    <hr className='divider' />
                </a>
              ),
            },

            {
              label: (
                <a href={`${rootURL}/admin/reports/classification`}>
                    <Space><ApartmentOutlined />Classification</Space>
                    <hr className='divider' />
                </a>
              ),
            },
            {
              label: (
                <a href={`${rootURL}/admin/reports/common-illness`}>
                    <Space><MedicineBoxOutlined />Common Illness</Space>
                    <hr className='divider' />
                </a>
              ),
            },
          ]}
        />
    );
    useEffect(() => {
        if(role == "admin"){
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, []);
    return (
        <div className={`bg-fourth min-h-screen ${ open ? 'w-64' : 'w-16'} duration-500 text-gray-100 px-4`}>

            <div className="py-3 flex justify-between">
                { open && (
                    <>
                    <h2 className="text-md text-white font-bold">OSCA Admin Panel</h2>
                    <MenuFoldOutlined
                        style={{ fontSize: '20px' }}
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                     />
                     </>
                )}
                { !open && (
                    <MenuUnfoldOutlined
                        style={{ fontSize: '20px' }}
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                     />
                )}
            </div>
            <div className="mt-4 flex flex-col gap-4 relative">

                <a href={`${rootURL}/admin`} className={`group flex ${ isDashboard && 'bg-yellow-600' } items-center text-sm gap-3.5 font-medium p-2 hover:bg-yellow-600 rounded-none`}>
                    <h2><DashboardOutlined style={{ fontSize:'18px', color: '#fff'}} /></h2>
                    <h2
                    style={{ transitionDelay: '300ms' }}
                    className={`text-white whitespace-pre duration-500 ${ !open && 'opacity-0 translate-x-28 overflow-hidden'}`}>Dashboard</h2>
                    <h2
                        className={`${open && "hidden"} absolute left-48 bg-yellow-600 font-semibold whitespace-pre text-white rounded-none z-20 drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-1 group-hover:py-1 group-hover:left-12 group-hover:duration-300 group-hover:w-fit`}
                    >Dashboard</h2>
                </a>

                { isAdmin && (
                    <a href={`${rootURL}/admin/users`} className={`group flex ${ isUser && 'bg-yellow-600' } items-center text-sm gap-3.5 font-medium p-2 hover:bg-yellow-600 rounded-none`}>
                        <h2><UserOutlined style={{ fontSize:'18px', color: '#fff'}} /></h2>
                        <h2
                        style={{ transitionDelay: '300ms' }}
                        className={`text-white whitespace-pre duration-500 ${ !open && 'opacity-0 translate-x-28 overflow-hidden'}`}>Users</h2>
                        <h2
                            className={`${open && "hidden"} absolute left-48 bg-yellow-600 font-semibold whitespace-pre text-white rounded-none z-20 drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-1 group-hover:py-1 group-hover:left-12 group-hover:duration-300 group-hover:w-fit`}
                        >Users</h2>
                    </a>
                )}

                <a href={`${rootURL}/admin/members`} className={`group flex ${ isMember && 'bg-yellow-600' } items-center text-sm gap-3.5 font-medium p-2 hover:bg-yellow-600 rounded-none`}>
                    <h2><UsergroupAddOutlined style={{ fontSize:'18px', color: '#fff'}} /></h2>
                    <h2
                    style={{ transitionDelay: '300ms' }}
                    className={`text-white whitespace-pre duration-500 ${ !open && 'opacity-0 translate-x-28 overflow-hidden'}`}>Members</h2>
                    <h2
                        className={`${open && "hidden"} absolute left-48 bg-yellow-600 font-semibold whitespace-pre text-white rounded-none z-20 drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-1 group-hover:py-1 group-hover:left-12 group-hover:duration-300 group-hover:w-fit`}
                    >Members</h2>
                </a>

                <a href={`${rootURL}/admin/reports`} className={`group flex ${ isReport && 'bg-yellow-600' } items-center text-sm gap-3.5 font-medium p-2 hover:bg-yellow-600 rounded-none`}>
                    <h2><BarChartOutlined style={{ fontSize:'18px', color: '#fff'}} /></h2>
                    <Dropdown
                        style={{ transitionDelay: '300ms' }}
                        overlayClassName={`text-white whitespace-pre duration-500 ${ !open && 'opacity-0 translate-x-28 overflow-hidden'}`}
                        overlay={menu}>
                          <div
                            style={{ transitionDelay: '300ms' }}
                            className={`text-white whitespace-pre duration-500 ${ !open && 'opacity-0 translate-x-28 overflow-hidden'}`}>
                            <Space>
                                Reports
                                <DownOutlined />
                            </Space>
                          </div>
                    </Dropdown>
                    <Dropdown
                        style={{ transitionDelay: '300ms' }}
                        overlayClassName={`${open && "hidden"} absolute left-48 bg-yellow-600 font-semibold whitespace-pre text-white rounded-none z-20 drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-1 group-hover:py-1 group-hover:left-12 group-hover:duration-300 group-hover:w-fit`}
                        overlay={menu}>
                          <div
                            style={{ transitionDelay: '300ms' }}
                            className={`${open && "hidden"} absolute left-48 bg-yellow-600 font-semibold whitespace-pre text-white rounded-none z-20 drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-1 group-hover:py-1 group-hover:left-12 group-hover:duration-300 group-hover:w-fit`}>
                            <Space>
                                Reports
                                <DownOutlined />
                            </Space>
                          </div>
                    </Dropdown>
                </a>
            </div>
        </div>
    )
}

export default Sidebar;

