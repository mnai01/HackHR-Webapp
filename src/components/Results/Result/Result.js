import React, { useState } from "react";
import classes from "./Result.module.css";



const Result = (props) => {
  return (
    <li className={classes.result}>
      <h3>{props.result.Name}</h3>
      <span>{props.result.LiveCount} / {props.result.LimitRestriction}</span>
      <p>{props.result.Description}</p>
    </li>
  );
};



const Result0 = (props) => {
  return (
    <li className={classes.result}>
      <div>
        <h3>{props.result.Name}</h3>
        <div className={classes.comment}>
          <p>{props.result.Description}</p>
        </div>
      </div>
      <div className={classes.amount}>
        <p>
          {props.result.LiveCount} / {props.result.LimitRestriction}
        </p>
      </div>
    </li>
  );
};

export default Result;
