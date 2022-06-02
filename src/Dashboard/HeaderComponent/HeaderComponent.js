import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import DashboardContext from "../../Contexts/DashboardContext";

const Header = () => {
  const { logoutClickHandler, name, emailId } =
    useContext(DashboardContext);
  return (
    <div className="header-container">
      <div className="header-container_user-section">
        <FaUserCircle size="2.5em" className="hover-cursor-pointer" />
        <div className="user-and-email">
          <span className="user-and-email_name">{name}</span>
          <span className="user-and-email_email">{emailId}</span>
        </div>
      </div>
      <div className="header-container_logout">
        <AiOutlineLogout size="1.7em" onClick={logoutClickHandler} className="hover-cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
