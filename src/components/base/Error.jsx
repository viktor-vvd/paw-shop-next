import React from "react";

const Error = ({ error }) => {
  return (
    <div className="container-horisontal page-container error">
        <span className="title">
        {error.status}
      </span><span className="title">
        |
      </span>
      <span className="subtitle">
        {error.data.message}
      </span>
    </div>
  );
};

export default Error;
