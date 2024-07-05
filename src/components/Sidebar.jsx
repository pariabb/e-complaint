
import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";
import { TfiMenuAlt } from "react-icons/tfi";
import { TbHandClick } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Yeni şikayət yarat",
            icon: <FaPlus />
        },
        {
            path: "/",
            name: "Şikayətlər",
            icon: <TfiMenuAlt />
        },
        {
            path: "/",
            name: "İstehlakçı təcrübəsi sorğusu",
            icon: <TbHandClick />
        }
    ]
    return (
        <div className="layout">
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="top_section">
                    <img className="logo" src="https://e-complaint.icta.az/assets/imgs/gradient_black.png" style={{ display: isOpen ? "block" : "none" }}></img>
                    <div className="bars" style={{ marginLeft: isOpen ? "25px" : "0px" ,marginBottom:isOpen ? '10px' :'0px'}}>
                        <FaBars style={{ display: isOpen ? "none" : "block" }} onClick={toggle} />
                        <HiBars3BottomRight style={{ display: isOpen ? "block" : "none" }} onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link mt-3" activeClassName="active">
                            <button className='link-btn d-flex flex-row ' style={{ width: isOpen ? "240px" : "50px" }}>
                            <div className="icon " style={{marginRight: isOpen ? '6px' :'0px',marginBottom: isOpen ? '2px' :'0px'}} >{item.icon}  </div>
                            <div className="link_text " style={{ display: isOpen ? "block" : "none" }}>{item.name}</div>
                            
                            </button>
                        </NavLink>
                        
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
