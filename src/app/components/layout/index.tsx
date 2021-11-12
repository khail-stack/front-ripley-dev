import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import DetailsUser from '../detailUser/DetailUser'
import './styles.sass'

const Layout = () => {
    
    const [showSide, setShowSide] = useState<boolean>(false)

    return (
        <div className="container_dashboard">
            <div className="hambImg">
                <i className="fas fa-bars" onClick={() => setShowSide(true)} />
                <img src="/images/logoRipley.png" alt="perfilPhoto" />
            </div>
            <div className={`sidebar_container${showSide ? ' show' : ''}`} id="sidebarPrimary">
                <div className="closeSide">
                    <i className="fas fa-times" onClick={() => setShowSide(false)} />
                </div>
                <div className="logo_sidebar">
                    <div className="logo_sidebar_content">
                        <img src="/images/logoRipley.png" alt="pdeplaytec" />
                    </div>
                </div>
                <div className="container_choose_role">
                    <div className="content_choose">
                        <div className="image_text_choose">
                            <div className="image_role">
                                <span>A</span>
                            </div>
                            <div className="text_role">
                                <span>Admin</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container_nav">
                    <ul className="list_nav">
                        <li className="list_nav_item">
                            <NavLink to="/" className="link_sidebar">
                                <i className="fas fa-chart-bar" /><span>Dashboard</span>
                            </NavLink>
                            <NavLink to="/customers" className="link_sidebar">
                                <i className="fas fa-users" /><span>Clientes</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content_dashboard">
                <DetailsUser />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
