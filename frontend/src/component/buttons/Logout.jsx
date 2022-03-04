import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/actions/auth.actions";

export default function Logout() {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutAction());
  };
  return (
    <div className="logout">
      <Link to="/" onClick={onLogout}>
        Logout
      </Link>
    </div>
  );
}


