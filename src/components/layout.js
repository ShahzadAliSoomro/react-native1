import React from "react";

function Layout({ children }) {
  return (
    <div>
      {children}
      <div className="container-fluid text-center bg-white border mt-2">
        <div className="p-5">
          <p>&copy;Copyright - 2021</p>
          <a
            href="https://github.com/mohsinalisoomro"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>
        </div>
      </div>
    </div>
  );
}

export default Layout;
