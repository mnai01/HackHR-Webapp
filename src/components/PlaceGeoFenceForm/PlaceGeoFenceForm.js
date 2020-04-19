import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import classes from "./PlaceGeoFenceForm.module.css";
import { HuePicker } from "react-color";

const PlaceGeoFenceForm = (props) => {
  return (
    <div>
      <Form className={classes.addFenceForm}>
        <h2>Add new Fence</h2>
        <p>Customize and place a geofence, Once you're ready send it to the database!</p>
        <FormGroup>
          <Label>Name of Fence</Label>
          <Input type="text" placeholder="Enter here" onKeyUp={props.setName} />
        </FormGroup>
        <FormGroup>
          <Label>Select Radius (meters)</Label>
          <Input
            type="number"
            placeholder="Enter here"
            onKeyUp={props.setRadius}
          />
        </FormGroup>
        <FormGroup>
          <Label>Pick a color</Label>
          <HuePicker />
        </FormGroup>
        <FormGroup>
          <Label>Enter Capacity Limit</Label>
          <Input type="number" placeholder="Enter here"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Add a Description</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Button>Save to database</Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default PlaceGeoFenceForm;
