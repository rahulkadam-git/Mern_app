import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import DashboardForm from "../../component/common/DashboardForm";
import Navbar from "../../component/Navbar/Navbar";
import { locationAction } from "../../redux/actions/location.actions";
import { toast } from "react-toastify";

export default function Dashboard() {
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");

  const { user = {} } = useSelector((state) => state.auth);
  const { locations } = useSelector((state) => state.location);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user, history]);

  useEffect(() => {
    if (locations) {
      history.push("/gates");
      toast.success("Location Added", {
        position: "top-right",
      });
    }
  }, [locations, history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLocation = {
      companyName,
      location,
    };

    dispatch(locationAction(newLocation));
  };

  const locationState = {
    setCompanyName,
    setLocation,
    handleSubmit,
  };

  return (
    <div>
      <Navbar />
      <DashboardForm
        userDetails={user ? user : {}}
        locationState={locationState}
      />
    </div>
  );
}
