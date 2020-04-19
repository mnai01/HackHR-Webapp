import React, { useState } from "react";
import classes from "./Result.module.scss";



const Result = (props) => {
  const red = props.result.RGB.r;
  const green = props.result.RGB.g;
  const blue = props.result.RGB.b;
  return (
    <li className={classes.result}>
      <span className={classes.amount}>{props.result.LiveCount} / {props.result.LimitRestriction}</span>
      <h3>{props.result.Name}<span className={classes.circle} style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></span></h3>
      <p>{props.result.Description}</p>
    </li>
  );
};

export default Result;
