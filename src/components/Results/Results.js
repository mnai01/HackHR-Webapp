import React, { useState } from "react";
import Result from "./Result/Result";
import classes from "./Results.module.css";

const Results = (props) => {
  return (
    <div className={classes.results}>
      <ul>
        {props.data.map((res) => (
          <Result result={res} />
        ))}
      </ul>
    </div>
  );
};

export default Results;
