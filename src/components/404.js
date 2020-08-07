import React, { Fragment } from "react";

const NotFound = () => {
  return (
    <Fragment>
      <div style={notF}>
        <div style={userFound} className="text-center display-4">
          Page Not Found!!!
        </div>
      </div>
    </Fragment>
  );
};
const notF = {
  backgroundColor: "lightblue",
  height: "100vh",
};
const userFound = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "140px",
  marginTop: "140px",
};

export default NotFound;
