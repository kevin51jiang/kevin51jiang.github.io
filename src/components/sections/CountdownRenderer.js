import React from "react";

import Button from "../elements/Button";
const countdownRender = ({ formatted, completed }) => {
  if (completed) {
    // Render a completed state

    return (
      <Button
        tag="a"
        color="white"
        wideMobile
        href="https://vote.wusa.ca/ballot/274"
      >
        Time to vote! 🎉
      </Button>
    );
  } else {
    // Render a countdown
    return (
      <Button color="dark" wideMobile disabled>
        🔒 {formatted.hours}:{formatted.minutes}:{formatted.seconds}
      </Button>
    );
  }
};

export default countdownRender;
