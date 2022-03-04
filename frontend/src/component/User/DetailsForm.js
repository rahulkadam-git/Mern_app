import React from "react";

export default function DetailsForm(props) {
  const { name, userType, eCode, surname } = props.userDetails;

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Name</label>
          <input
            className="form-control"
            id="formGroupExampleInput"
            type="text"
            placeholder={name}
            disabled
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Surname</label>
          <input
            className="form-control"
            id="formGroupExampleInput2"
            type="text"
            placeholder={surname}
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
