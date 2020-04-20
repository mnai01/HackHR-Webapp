import React, { useState } from "react";
import classes from "./Result.module.scss";
import hexRgb from "hex-rgb";

const Result = (props) => {
  const rgb = hexRgb(props.result.color);
  return (
    <li className={classes.result}>
      <span className={classes.amount}>
        {props.result.live_count} / {props.result.capacity}
      </span>
      <h3>
        {props.result.fence_name}
        <span
          className={classes.circle}
          style={{
            backgroundColor: `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`,
          }}
        ></span>
      </h3>
      <p>{props.result.description}</p>
    </li>
  );
};

export default Result;
