import React, { useState } from "react";
import PlaceGeoFenceMap from "../PlaceGeoFenceMap/PlaceGeoFenceMap";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
} from "reactstrap";
import classes from "./AddGeofencePage.module.css";
import map from "../Map/Map";

const AddGeofencePage = () => {
  const [Name, setName] = useState(null);
  const [Limit, setLimit] = useState(0);
  const [Description, setDescription] = useState("");
  const [Radius, setRadius] = useState({ rad: 1000 });

  const handlersetRadius = (e) => {
    setRadius({ rad: parseInt(e.target.value) });
  };

  const handlersetName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.mapContainer}>
        <PlaceGeoFenceMap radius={Radius} />
      </div>
      <div className={classes.ResultsWrapper}>
        <Form className={classes.addFenceForm}>
          <h1>
            Customize and place a geofence, Once you're ready send it to the
            database!
          </h1>
          <FormGroup>
            <Label>Name of Fence</Label>
            <Input
              type="text"
              placeholder="Enter here"
              onKeyUp={handlersetName}
            />
          </FormGroup>
          <FormGroup>
            <Label>Select Radius (meters)</Label>
            <Input
              type="number"
              placeholder="Enter here"
              onKeyUp={handlersetRadius}
            />
          </FormGroup>
          <FormGroup>
            <Label>Enter Capacity Limit</Label>
            <Input type="number" placeholder="Enter here"></Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default AddGeofencePage;
