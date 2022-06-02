import React from "react";

const DashboardContext = React.createContext({
  logoutClickHandler: () => {},
  name: "",
  emailId: ""
});

export default DashboardContext;