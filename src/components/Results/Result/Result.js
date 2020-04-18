import React, { useState } from "react";
import classes from "./Result.module.scss";



const Result = (props) => {
  return (
    <li className={classes.result}>
      <span className={classes.amount}>{props.result.LiveCount} / {props.result.LimitRestriction}</span>
      <h3>{props.result.Name}</h3>
      <p>{props.result.Description}</p>
    </li>
  );
};

export default Result;
