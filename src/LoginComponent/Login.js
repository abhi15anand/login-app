import React from "react";
import Button from "../Common/Button/Button";
import { literals } from "../Common/constants";
import Error from "../Common/ErrorComponent/Error";
import Input from "../Common/Input/Input";

const Login = ({ onChangeHandler, onTabOutHandler, signInClickHandler, userDetails }) => {
  return (
    <div className="login-page">
      <div className="login-page_container">
        <div className="login-page_container_inner">
          <h3>Contacts</h3>
          <Input
            placeholder="Name"
            value={userDetails[literals.NAME]?.value}
            onChange={(event) => onChangeHandler(event, literals.NAME)}
            onBlur={(event) => onTabOutHandler(event, literals.NAME)}
          />
          <Error message={userDetails[literals.NAME]?.error} />
          <Input
            placeholder="Email"
            value={userDetails[literals.EMAIL]?.value}
            onChange={(event) => onChangeHandler(event, literals.EMAIL)}
            onBlur={(event) => onTabOutHandler(event, literals.EMAIL)}
          />
          <Error message={userDetails[literals.EMAIL]?.error} />
          <Input
            password
            placeholder="Password"
            value={userDetails[literals.PASSWORD]?.value}
            onChange={(event) => onChangeHandler(event, literals.PASSWORD)}
            onBlur={(event) => onTabOutHandler(event, literals.PASSWORD)}
          />
          <Error message={userDetails[literals.PASSWORD]?.error} />
          <Button text="Sign in" onClick={signInClickHandler} />
        </div>
      </div>
    </div>
  );
};

export default Login;
