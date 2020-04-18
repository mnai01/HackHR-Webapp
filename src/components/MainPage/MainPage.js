import React from "react";
import Results from "../Results/Results";
import Map from "../Map/Map";
import classes from "./MainPage.module.scss";

const MainPage = (props) => {
  return (
    <div className={classes.main_container}>
      <div className={classes.map_container}>
        <Map user={props.People} data={props.Geofence} />
      </div>
      <div className={classes.results_container}>
        <Results data={props.Geofence} />
      </div>
    </div>
  );
};

export default MainPage;
