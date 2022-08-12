import React from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function GateFrom(props) {
  const { setDescription, setGate, handleSubmit } = props.gateData;

  return (
    <div className="gate">
      <Form onSubmit={handleSubmit} className="gates-form-inner">
        <div className="closebtn">
          <FontAwesomeIcon icon={faXmark} />
        </div>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Gate</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Gate number"
            onChange={(e) => setGate(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default GateFrom;
