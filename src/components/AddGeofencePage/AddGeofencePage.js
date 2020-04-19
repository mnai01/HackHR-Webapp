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
  const [Radius, setRadius] = useState({ rad: 0 });
  const [color, setColor] = useState({ rgb: { r: 250, g: 250, b: 250 } });

  const handleChangeColor = (e) => {
    setColor(e);
    console.log(e.rgb.r);
  };

  const handlersetRadius = (e) => {
    setRadius({ rad: parseInt(e.target.value) });
  };

  return (
    <div className={classes.container}>
      <div className={classes.mapContainer}>
        <PlaceGeoFenceMap color={color} radius={Radius} />
      </div>
      <div className={classes.ResultsWrapper}>
        <PlaceGeoFenceForm
          color={color}
          radius={Radius}
          colorChange={handleChangeColor}
          setRadius={handlersetRadius}
        />
      </div>
    </div>
  );
};

export default AddGeofencePage;
