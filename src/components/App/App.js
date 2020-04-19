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
      Radius: 28,
      Latitude: 36.7783,
      Longitude: -119.4179,
      LimitRestriction: 10,
      LiveCount: 4,
      FenceID: 1,
      CompanyID: 1,
      Name: "Fence1",
      Description: "It is realted to the near back building for security",
    },
    {
      Radius: 124,
      Latitude: 36.7783,
      Longitude: -119.6179,
      LimitRestriction: 10,
      LiveCount: 2,
      FenceID: 1,
      CompanyID: 1,
      Name: "Fence2",
      Description:
        "This fence is for the parking lot, it is big and has to cover alot555555555555555",
    },
    {
      Radius: 150,
      Latitude: 36.7783,
      Longitude: -119.5179,
      LimitRestriction: 10,
      LiveCount: 0,
      FenceID: 1,
      CompanyID: 1,
      Name: "Fence31111111111111111111111",
      Description: "This fence is for the parking lot",
    },
  ]);
  const [People, setPeople] = useState([
    {
      UserId: "Mnai",
      CompanyID: 1,
      FenceID: 1,
      Lat: 36.7783,
      Lng: -119.5289,
    },
    {
      UserId: "Bob",
      CompanyID: 1,
      FenceID: 1,
      Lat: 36.7783,
      Lng: -119.5159,
    },
    {
      UserId: "Poop",
      CompanyID: 1,
      FenceID: 1,
      Lat: 36.7583,
      Lng: -119.5129,
    },
  ]);
  return (
    <div>
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
