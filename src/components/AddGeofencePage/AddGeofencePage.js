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
import classes from "./AddGeofencePage.module.scss";

const AddGeofencePage = () => {
  const [Radius, setRadius] = useState({ rad: 0 });
  const [Color, setColor] = useState({ rgb: { r: 250, g: 250, b: 250 } });
  const [coords, setCoords] = useState([0, 0]);

  const handleChangeCoords = (coords) => {
    setCoords(coords);
  };

  const handleChangeColor = (e) => {
    setColor(e);
  };

  const handlersetRadius = (e) => {
    setRadius({ rad: parseInt(e.target.value) });
  };

  return (
    <div className={classes.main_container}>
      <div className={classes.map_container}>
        <PlaceGeoFenceMap
          handleCoords={handleChangeCoords}
          color={Color}
          radius={Radius}
        />
      </div>
      <div className={classes.form_wrapper}>
        <PlaceGeoFenceForm
          color={Color}
          radius={Radius}
          coords={coords}
          colorChange={handleChangeColor}
          setRadius={handlersetRadius}
        />
      </div>
    </div>
  );
};

export default AddGeofencePage;
