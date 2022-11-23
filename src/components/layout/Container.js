import React from "react";

function Container({ children }) {
  return (
    <div className="flex max-w-7xl min-h-screen mx-auto border">{children}</div>
  );
}

export default Container;