import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import DashboardForm from "../../component/common/DashboardForm";
import Navbar from "../../component/Navbar/Navbar";

export default function Dashboard() {
  const { user = {} } = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <div>
      <Navbar />
      <DashboardForm userDetails={user ? user : {}} />
    </div>
  );
}
