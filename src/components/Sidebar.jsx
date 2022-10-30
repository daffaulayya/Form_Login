import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import {DashboardOutlined, InfoCircleOutlined, FundOutlined, MenuOutlined, ProjectOutlined, PoweroffOutlined  } from "@ant-design/icons";


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Dashboard",
            name:"Dashboard",
            icon:<DashboardOutlined />
        },
        {
            path:"/About",
            name:"About",
            icon:<InfoCircleOutlined />
        },
        {
            path:"/Analytics",
            name:"Analytics",
            icon:<FundOutlined />
        },
        {
            path:"/Comment",
            name:"Project",
            icon: <ProjectOutlined />
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
               <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg" style={{display: isOpen ? "block" : "none"}} className="logo" />
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                   <MenuOutlined onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;