import { DEAD } from "../constants/Story";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Dead = () => {

  const [pushedTryAgain, setPushTryAgain] = useState(false);

  return (
    <React.Fragment>
      <div className="landingWrapper">
        <h2 className="deadText">
          {DEAD[Math.floor(Math.random() * DEAD.length)]}
        </h2>
        <h1 className="areDeadText">ARE DEAD!</h1>
        <h1
          className="buttonText"
          onClick={() => setPushTryAgain(true)}
        >
          Try Again
        </h1>
        {pushedTryAgain && (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default Dead;
