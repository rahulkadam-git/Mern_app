import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import {Link} from "react-router-dom"

function Sidebar(props) {
  return (
    <div className="sidebar-outer">
      <div className="sidebar-inner">
        <div className="menu">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Appoinment</Accordion.Header>
              <Accordion.Body style={{padding:"0"}}>
                <div className="submenu">All Appoinments</div>
                <div className="submenu"><Link to="/appionments">Create appoinment</Link></div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>User</Accordion.Header>
              <Accordion.Body style={{padding:"0"}}>
                <div className="submenu">All Users</div>
                <div className="submenu">New User</div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Locations</Accordion.Header>
              <Accordion.Body style={{padding:"0"}}>
                <div className="submenu">All Locations</div>
                <div className="submenu"><Link to="/dashboard">Add location</Link></div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
