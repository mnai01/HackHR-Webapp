import React from "react";
import PlaceGeoFenceMap from "../PlaceGeoFenceMap/PlaceGeoFenceMap";
import classes from "./AddGeofencePage.module.css";
import map from "../Map/Map";

const AddGeofencePage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.mapContainer}>
        <PlaceGeoFenceMap />
      </div>
      <div className={classes.ResultsWrapper}>
        <h1>
          Customize and place a geofence, Once you're ready send it to the
          database!
        </h1>
      </div>
    </div>
  );
};

export default AddGeofencePage;
