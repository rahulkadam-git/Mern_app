import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import GateFrom from "../../component/common/GateFrom";
import { gateAction } from "../../redux/actions/location.actions";
import { toast } from "react-toastify";

function Gates(props) {
  const { locations, newGate } = useSelector((state) => state.location);
  const [description, setDescription] = useState("");
  const [gate, setGate] = useState("");

  const [gateForm, setGateForm] = useState([{ gates: "" }]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const gateDetails = {
      gate,
      location: locations._id,
      description,
    };

    dispatch(gateAction(gateDetails));

    setGateForm([...gateForm, { gates: "" }]);
  };

  useEffect((newGate) => {
    if (newGate) {
      toast.success("Location Added", {
        position: "top-right",
      });
    }
  },[newGate]);

  const gateData = {
    setDescription,
    setGate,
    handleSubmit,
  };
  console.log(newGate);
  return (
    <div>
      <Navbar />
      <div className="gates">
        <div className="company-name">
          <h2>{locations?.companyName}</h2>
          <h6>{locations?.location}</h6>
        </div>
        <div className="gateform">
          {gateForm.map((index) => (
            <div key={index}>
              <GateFrom gateData={gateData} name="gates" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gates;
