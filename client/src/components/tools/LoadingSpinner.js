import React from "react";
import { Spinner } from "reactstrap";

const LoadingSpinner = () => {
  return (
    <div>
      <Spinner size="sm" color="secondary" />{" "}
      <Spinner size="sm" color="secondary" />{" "}
      <Spinner size="sm" color="secondary" />
    </div>
  );
};

export default LoadingSpinner;
