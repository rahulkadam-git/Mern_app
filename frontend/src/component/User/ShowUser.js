import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsersActions } from "../../redux/actions/auth.actions";
import DisplayList from "./DisplayList";

export default function ShowUser() {
  const dispatch = useDispatch();

  let { userData, isLoading } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getAllUsersActions());
  }, [dispatch]);


  const rendeerData = (allUserdata) => {
    if (isLoading) {
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      );
    } else if (allUserdata === null || typeof allUserdata === "undefined") {
      return (
        <div>
          <h1>Null data</h1>
        </div>
      );
    } else if (allUserdata.length === 0) {
      return (
        <div>
          <h1>No record found</h1>
        </div>
      );
    } else {
      return <DisplayList userData={allUserdata} />;
    }
  };

  return <div>{rendeerData(userData)}</div>;
}
