import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";
import { TfiMenuAlt } from "react-icons/tfi";
import { TbHandClick } from "react-icons/tb";
import { NavLink, Link } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/newcomplaint",
            name: "Yeni şikayət yarat",
            icon: <FaPlus />
        },
        {
            path: "/",
            name: "Şikayətlər",
            icon: <TfiMenuAlt />
        },
        {
            path: "/about",
            name: "İstehlakçı təcrübəsi sorğusu",
            icon: <TbHandClick />
        }
    ];
    return (
        <div className="layout">
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="top_section">
                    <img className="logo" src="https://e-complaint.icta.az/assets/imgs/gradient_black.png" style={{ display: isOpen ? "block" : "none" }} alt="Logo"></img>
                    <div className="bars mb-4" style={{ marginLeft: isOpen ? "25px" : "0px", marginBottom: isOpen ? '10px' : '0px' }}>
                        <FaBars style={{ display: isOpen ? "none" : "block" }} onClick={toggle} />
                        <HiBars3BottomRight style={{ display: isOpen ? "block" : "none" }} onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink 
                            to={item.path} 
                            key={index} 
                            className="link mt-3" 
                            activeclassname="active" >
                            <div className='link-btn d-flex flex-row'>
                                <div className="icon" style={{ width: isOpen ? "40px" : "50px" }}>
                                    <span>{item.icon}</span>
                                </div>
                                <div className="link_text" style={{ display: isOpen ? "block" : "none" }}>{item.name}</div>
                                <span className="tooltiptext" style={{ display: isOpen ? "none" : "block" }}>{item.name}</span>
                            </div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
