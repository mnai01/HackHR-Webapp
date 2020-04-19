import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Navbar";
import MainPage from "../MainPage/MainPage";
import AddGeofencePage from "../AddGeofencePage/AddGeofencePage";
import Footer from "../Footer";
import MainLogReg from "../Auth/main";
import Cookies from "js-cookie";

// import Map from '../Map/Map.js';
// import List from '../List/List.js';

import "./App.scss";

function App() {
  const [Geofence, setGeofence] = useState([
    {
      Radius: 50,
      Latitude: 40.750496,
      Longitude: -73.429717,
      LimitRestriction: 17,
      LiveCount: 2,
      FenceID: 1,
      CompanyID: 1,
      Name: "Rossevelt Hall",
      Description:
        "Normal operation hours 9am-5pm. Social distancing restrictions placed due to covid-19",
      RGB: { r: 0, g: 70, b: 204 },
    },
    {
      Radius: 50,
      Latitude: 40.753483,
      Longitude: -73.427421,
      LimitRestriction: 20,
      LiveCount: 2,
      FenceID: 1,
      CompanyID: 1,
      Name: "Thompson Hall",
      Description:
        "Monitoring manufacturing to help follow restrictions placed due to covid-19",
      RGB: { r: 239, g: 20, b: 50 },
    },
    {
      Radius: 50,
      Latitude: 40.7515,
      Longitude: -73.42844,
      LimitRestriction: 15,
      LiveCount: 1,
      FenceID: 1,
      CompanyID: 1,
      Name: "Knapp Hall",
      Description: "Monitoring main building",
      RGB: { r: 56, g: 200, b: 97 },
    },
    {
      Radius: 50,
      Latitude: 40.752487,
      Longitude: -73.427876,
      LimitRestriction: 10,
      LiveCount: 2,
      FenceID: 1,
      CompanyID: 1,
      Name: "Whitman Hall",
      Description: "This building should be empty for most of the day ",
      RGB: { r: 59, g: 100, b: 17 },
    },
  ]);
  const [People, setPeople] = useState([
    {
      UserId: "Ian",
      CompanyID: 1,
      FenceID: 1,
      Latitude: 40.752369,
      Longitude: -73.427972,
    },
    {
      UserId: "Bob",
      CompanyID: 1,
      FenceID: 1,
      Latitude: 40.752369,
      Longitude: -73.427872,
    },
    {
      UserId: "julian",
      CompanyID: 1,
      FenceID: 1,
      Latitude: 40.7516,
      Longitude: -73.42874,
    },
    {
      UserId: "Madeline",
      CompanyID: 1,
      FenceID: 1,
      Latitude: 40.750665,
      Longitude: -73.429761,
    },
    {
      UserId: "John",
      CompanyID: 1,
      FenceID: 1,
      Latitude: 40.750565,
      Longitude: -73.429461,
    },
    {
      UserId: "Tommy",
      CompanyID: 1,
      FenceID: 1,
      Latitude: 40.753483,
      Longitude: -73.427421,
    },
    {
      UserId: "Charles",
      CompanyID: 1,
      FenceID: 1,
      Latitude: 40.753483,
      Longitude: -73.427421,
    },
    {
      UserId: "Jerry",
      CompanyID: 1,
      FenceID: 1,
      Latitude: 40.753483,
      Longitude: -73.427621,
    },
  ]);
  Cookies.set("Company", Cookies.get("Company"));
  return (
    <div>
      {Cookies.get("Company") == "undefined" && Cookies.set("Company", "")}
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {Cookies.get("Company") != "" ? (
              <MainPage People={People} Geofence={Geofence} />
            ) : (
              <MainLogReg />
            )}
          </Route>
          <Route path="/newfence">
            <AddGeofencePage />
          </Route>
          <Route path="/Login">
            <MainLogReg />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
