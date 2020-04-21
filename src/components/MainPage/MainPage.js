import React, { useEffect, useState } from "react";
import Results from "../Results/Results";
import Map from "../Map/Map";
import classes from "./MainPage.module.scss";
import axios from "axios";

const MainPage = (props) => {
  const [mapGeofenceAPI, setMapGeofence] = useState({});
  const [ListGeofenceAPI, setListGeofence] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    _getRequest();
  }, []);

  const _getRequest = () => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://hack-hr.herokuapp.com/api/fences"
      )
      .then((res) => {
        console.log(res.data);
        setListGeofence(res.data);
        // setMapGeofence({
        //   fence: res.data.map((res) => ({
        //     latitude: res.latitude,
        //     longitude: res.longitude,
        //   })),
        // });
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // setTimeout(_getRequest, 5 * 1000);

  return (
    <div className={classes.main_container}>
      <div className={classes.map_container}>
        <Map user={props.People} data={ListGeofenceAPI} />

        {/* {loaded ? (
          <Map user={props.People} data={mapGeofenceAPI} />
        ) : (
          <h1>loading...</h1>
        )} */}
      </div>
      <div className={classes.results_container}>
        <Results data={ListGeofenceAPI} />

        {/* {loaded ? <Results data={ListGeofenceAPI} /> : <h1>loading...</h1>} */}
      </div>
    </div>
  );
};

export default MainPage;
