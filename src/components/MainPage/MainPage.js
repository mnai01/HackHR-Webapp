import React from "react";
import Results from "../Results/Results";
import Map from "../Map/Map";
import classes from "./MainPage.module.css";

const MainPage = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.mapContainer}>
        <Map user={props.People} data={props.Geofence} />
      </div>
      <div className={classes.ResultsWrapper}>
        <Results className={classes.results} data={props.Geofence} />
      </div>
    </div>
  );
};

export default MainPage;
