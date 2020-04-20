import React, { useEffect, useState } from "react";
import Results from "../Results/Results";
import Map from "../Map/Map";
import classes from "./MainPage.module.scss";
import axios from "axios";

const MainPage = (props) => {
  const [GeofenceAPI, setGeofence] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setInterval(function () {
      _getRequest();
    }, 50000);
  }, []);

  const _getRequest = () => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://hack-hr.herokuapp.com/api/get"
      )
      .then((res) => {
        setGeofence(res.data.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.main_container}>
      <div className={classes.map_container}>
        <Map user={props.People} data={GeofenceAPI} />
      </div>
      <div className={classes.results_container}>
        {loaded ? <Results data={GeofenceAPI} /> : <h1>loading...</h1>}
      </div>
    </div>
  );
};

export default MainPage;
