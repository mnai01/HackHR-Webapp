import React, { useState } from "react";
// import {render} from 'react-dom';
import ReactMapGL from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { ScatterplotLayer, GeoJsonLayer } from "@deck.gl/layers";
import classes from "./PlaceGeoFenceMap.module.scss";
import Geocoder from "react-map-gl-geocoder";
import { Button } from "reactstrap";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibW5haSIsImEiOiJjazk1ZjhoNDIwOGl3M2VtZ3czMTBobHNhIn0.1OWA8oisc6ZoxSydY2_I4w"; // Set your mapbox token here
let mapRef = React.createRef();

const Map = (props) => {
  const [viewport, setViewport] = useState({
    container: "map",
    latitude: 30.83329635273188,
    longitude: -44.68585719149834,
    zoom: 2,
    maxZoom: 21,
    bearing: 0,
    pitch: 0,
  });

  const [data, setData] = useState(props.data);
  const [searchResultLayer, setSearchResultLayer] = useState({ Layer: null });
  const [Layers, setLayers] = useState([]);
  const [clickLatLng, setClick] = useState(null);
  // const [Radius, setRadius] = useState({
  //   rad: 1000,
  // });

  // const handlersetRadius = (e) => {
  //   setRadius({ rad: parseInt(e.target.value) });
  // };

  const onClick = (event) => {
    console.log(event);
    setClick(event.lngLat);
  };

  const DATA_URL =
    "https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/scatterplot/manhattan.json"; // eslint-disable-line

  // let layer = [
  //   new ScatterplotLayer({
  //     id: "scatterplot-layer",
  //     data: props.data,
  //     pickable: true,
  //     opacity: 0.15,
  //     stroked: true,
  //     filled: true,
  //     radiusScale: 6,
  //     radiusMinPixels: 10,
  //     radiusMaxPixels: 100,
  //     lineWidthMinPixels: 1,
  //     getPosition: (d) => [d.Longitude, d.Latitude],
  //     getRadius: (d) => d.Radius,
  //     getFillColor: (d) => [255, 140, 0],
  //     getLineColor: (d) => [0, 0, 0],
  //   }),
  //   new ScatterplotLayer({
  //     id: "scatterplot-layer",
  //     data: props.user,
  //     pickable: true,
  //     opacity: 0.8,
  //     stroked: true,
  //     filled: true,
  //     radiusScale: 1,
  //     radiusMinPixels: 4,
  //     radiusMaxPixels: 5,
  //     lineWidthMinPixels: 1,
  //     getPosition: (d) => [d.Lng, d.Lat],
  //     getRadius: 0.25,
  //     getFillColor: (d) => [0, 140, 0],
  //     getLineColor: (d) => [0, 0, 0],
  //   }),
  //   Layer1.Layer,
  //   searchResultLayer.Layer,
  // ];
  const handleOnResult = (event) => {
    console.log(event.result);
    setSearchResultLayer({
      searchResultLayer: new GeoJsonLayer({
        id: "search-result",
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10,
      }),
    });
  };

  const handleGeocoderViewportChange = (viewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 1 }; //DOESNT DO ANYTHING
    setViewport(viewport, geocoderDefaultOverrides);
  };

  const addGeofrence = () => {
    setLayers([
      new ScatterplotLayer({
        id: "place-scatterplot-layer",
        data: props.radius,
        pickable: true,
        opacity: 0.1,
        stroked: true,
        filled: true,
        radiusScale: 1,
        radiusMinPixels: 4,
        radiusMaxPixels: 9000,
        lineWidthMinPixels: 1,
        getPosition: [viewport.longitude, viewport.latitude],
        getRadius: props.radius.rad,
        getFillColor: [props.color.rgb.r, props.color.rgb.g, props.color.rgb.b],
        getLineColor: [0, 0, 0],
      }),
    ]);
  };

  const mapSatStyle = "mapbox://styles/mapbox/satellite-v9";
  const mapStrStyle = "mapbox://styles/mapbox/streets-v9";
  return (
    <div className={classes.map}>
      <ReactMapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        mapStyle={mapSatStyle}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport(viewport);
          console.log(viewport.longitude, " ", viewport.latitude);
        }}
        // onClick={onClick}
      >
        <Geocoder
          mapRef={mapRef}
          onResult={handleOnResult}
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
        />
        <DeckGL
          width="100%"
          height="100%"
          initialViewState={viewport}
          layers={[Layers]}
          controller={true}
        />
        <div className={classes.arrow}>+</div>
      </ReactMapGL>
      <Button onClick={addGeofrence} className={classes.button}>
        Test geofence size
      </Button>
    </div>
  );
};
export default Map;

// import * as React from "react";
// import { Component } from "react";
// import { render } from "react-dom";
// import MapGL, { Source, Layer } from "react-map-gl";

// const MAPBOX_TOKEN =
//   "pk.eyJ1IjoibW5haSIsImEiOiJjazk1ZjhoNDIwOGl3M2VtZ3czMTBobHNhIn0.1OWA8oisc6ZoxSydY2_I4w"; // Set your mapbox token here // Set your mapbox token here
// const Map = () => {
//   const [viewport, setviewport] = React.useState({
//     viewport: {
//       latitude: 40.67,
//       longitude: -103.59,
//       zoom: 3,
//       bearing: 0,
//       pitch: 0,
//     },
//   });

//   return (
//     <MapGL
//       {...viewport}
//       width="100%"
//       height="100%"
//       mapStyle="mapbox://styles/mapbox/dark-v9"
//       mapboxApiAccessToken={MAPBOX_TOKEN}
//     ></MapGL>
//   );
// };

// export default Map;
