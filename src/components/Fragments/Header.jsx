import { Link } from "react-router-dom";
import Button from "../Elements/Button/Button";
import { useState } from "react";

const Header = (props) => {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      <div className="flex justify-end p-4 bg-blue-500 text-white">
        <Link to={`/profile/${props.id}`}>
          <b className="mr-4">{props.username}</b>
        </Link>
        {/* <span className="px-4">11</span> */}
        {/* <Counter /> */}
        <Button
          type="button"
          onClick={handleLogout}
          className="text-white"
          name="Logout"
        />
      </div>
    </>
  );
};

export default Header;
