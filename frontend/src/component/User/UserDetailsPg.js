import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailsActions } from "../../redux/actions/auth.actions";
import DetailsForm from "./DetailsForm";
import isEmpty from "./isEmpty";

export default function UserDetailsPg() {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { userDetails, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUserDetailsActions(_id));
  }, [dispatch, _id]);

  const renderUserData = (userData) => {
    if (isLoading) {
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      );
    } else if (userData === null || typeof userData === "undefined") {
      return (
        <div>
          <h1>Null data</h1>
        </div>
      );
    } else if (isEmpty(userData)) {
      return (
        <div>
          <h1>No record found</h1>
        </div>
      );
    } else {
      return <DetailsForm userDetails={userDetails} />;
    }
  };

  return (
    <div>
      {renderUserData(userDetails)}
      <Link to={`/showuser`}>Back</Link>
    </div>
  );
}
