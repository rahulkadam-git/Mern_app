import React from "react";
import { Form, Button } from "react-bootstrap";

export default function DashboardForm(props) {
  let { setCompanyName, setLocation, handleSubmit } = props.locationState;

  return (
    <div className="userDetails-form">
      <div className="heading">
        <h1>Add your location</h1>
      </div>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Company name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter company"
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter your location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
