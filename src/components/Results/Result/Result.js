import React, { useState } from "react";
import classes from "./Result.module.css";

const Result = (props) => {
  return (
    <div className={classes.Result_Wrapper}>
      <div className={classes.result}>
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
    </div>
  );
};

export default Result;
