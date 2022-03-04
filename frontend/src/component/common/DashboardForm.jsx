import React from "react";

export default function DashboardForm(props) {
  let {
    Name = "",
    eCode = "",
    Surname = "",
    userType = "",
  } = props?.userDetails;
  return (
    <div className="userDetails-form">
      <div className="heading">
        <h1>User details</h1>
      </div>

      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Name</label>
          <input
            className="form-control"
            id="formGroupExampleInput"
            type="text"
            placeholder={Name}
            disabled
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Surname</label>
          <input
            className="form-control"
            id="formGroupExampleInput2"
            type="text"
            placeholder={Surname}
            disabled
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput3">Ecode</label>
          <input
            className="form-control"
            id="formGroupExampleInput3"
            type="text"
            placeholder={eCode}
            disabled
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput4">Usertype</label>
          <input
            className="form-control"
            id="formGroupExampleInput4"
            type="text"
            placeholder={userType}
            disabled
          ></input>
        </div>
      </form>
    </div>
  );
}
