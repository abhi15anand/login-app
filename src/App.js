import "./App.scss";
import { useState } from "react";
import Login from "./LoginComponent/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Contacts from "./Dashboard/ContactsComponent/ContactsComponent";
import Dashboard from "./Dashboard/Dashboard";
import DashboardContext from "./Contexts/DashboardContext";

function App() {
  // const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();

  const onChangeHandler = (event, fieldType) => {
    const { value } = event.target;
    const userDetailsTemp = { ...userDetails }; // unpacking the object since there is only one level of nesting of the properties
    userDetailsTemp[fieldType] = {
      value,
      error: "",
    };

    setUserDetails(userDetailsTemp);
  };

  const onTabOutHandler = (event, fieldType) => {
    const { value } = event.target;
    let userDetailsTemp = { ...userDetails }; // unpacking the object since there is only one level of nesting of the properties

    if (!value) {
      userDetailsTemp[fieldType].error = "*Required";
    }

    setUserDetails(userDetailsTemp);
  };

  const signInClickHandler = () => {
    let userDetailsTemp = { ...userDetails }; // unpacking the object since there is only one level of nesting of the properties
    if (!userDetailsTemp) {
      return;
    }

    for (let key in userDetailsTemp) {
      if (userDetailsTemp[key].error) {
        return;
      }
    }

    navigate("/dashboard");
  };

  const logoutClickHandler= () => {
    navigate("/login");
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Login
              onChangeHandler={onChangeHandler}
              onTabOutHandler={onTabOutHandler}
              signInClickHandler={signInClickHandler}
              userDetails={userDetails}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              onChangeHandler={onChangeHandler}
              onTabOutHandler={onTabOutHandler}
              signInClickHandler={signInClickHandler}
              userDetails={userDetails}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <DashboardContext.Provider
              value={{
                logoutClickHandler: logoutClickHandler,
                name: userDetails?.name?.value,
                emailId: userDetails?.email?.value,
              }}
            >
              <Dashboard />
            </DashboardContext.Provider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
