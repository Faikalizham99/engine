//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  SubMenu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FiLogOut, FiArrowLeftCircle, FiArrowRightCircle, FiUsers, FiDatabase, FiEdit, FiDownload } from "react-icons/fi"
import { FaTable, FaQuestionCircle, FaBuromobelexperte } from "react-icons/fa"



//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./SideBar.css"
import SideBarSubMenu from "./SideBarSubMenu";

function SideBar(){
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

  return (
      <div>
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <SideBarSubMenu />
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Dashboard</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
  )
}

export default SideBar;