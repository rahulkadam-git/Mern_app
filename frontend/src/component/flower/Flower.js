import React, { useState } from "react";
import { getFlowerDataActions } from "../../redux/actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import FlowerList from "./FlowerList";

export default function Flower() {
  const [selectedDate, setSelectedDate] = useState("");

  const dispatch = useDispatch();
  let { flowerData, isLoading } = useSelector((state) => state.auth);

  const handleSelect = (date) => {
    setSelectedDate(date);
  };

  const onSubmit = () => {
    const inputDate = moment(selectedDate).format("YYYY-MM-DD");
    dispatch(getFlowerDataActions(inputDate));
  };

  return (
    <div className="Flower">
      <div className="calender-select">
        <label id="label" htmlFor="date">
          Select date
        </label>
        <div className="calender">
          <DatePicker
            selected={selectedDate}
            onChange={handleSelect}
            dateFormat="dd-MM-yyyy"
            placeholderText="Please select date"
          />
        </div>
        <button className="btn btn-primary submit-btn" onClick={onSubmit}>
          {isLoading ? (
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            <h6>submit</h6>
          )}
        </button>
      </div>
      {!flowerData || flowerData.length === 0 ? (
        <div className="Record-not-found">No record found</div>
      ) : (
        <FlowerList flowerData={flowerData} />
      )}
    </div>
  );
}
