import React from "react";

const Error = ({ message }) => {
    return <div className="error-container">
        <span>{message}</span>
    </div>
};

export default Error;