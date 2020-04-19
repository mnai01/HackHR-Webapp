import React, { useState } from "react";
import PlaceGeoFenceMap from "../PlaceGeoFenceMap/PlaceGeoFenceMap";
import PlaceGeoFenceForm from "../PlaceGeoFenceForm/PlaceGeoFenceForm";

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

const AddGeofencePage = () => {
  const [Name, setName] = useState(null);
  const [Limit, setLimit] = useState(0);
  const [Description, setDescription] = useState("");
  const [Radius, setRadius] = useState({ rad: 1000 });

  const handlersetName = (e) => {
    setName(e.target.value);
  };

  const handlersetLimit = (e) => {
    setLimit(e.target.value);
  };

  const handlersetDescription = (e) => {
    setDescription(e.target.value);
  };

  const handlersetRadius = (e) => {
    setRadius({ rad: parseInt(e.target.value) });
  };

  return (
    <div className={classes.container}>
      <div className={classes.mapContainer}>
        <PlaceGeoFenceMap radius={Radius} />
      </div>
      <div className={classes.ResultsWrapper}>
        <PlaceGeoFenceForm
          setRadius={handlersetRadius}
          setName={handlersetName}
        />
      </div>
    </div>
  );
};

export default AddGeofencePage;
