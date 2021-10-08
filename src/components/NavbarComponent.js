import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav>
        <div className="container">
          <div>
            <span>
            <Link to="/queue">
              <i className="fa-th-list fa-lg" /> {props.queueList.length ? props.queueList.length : 0}
            </Link>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
