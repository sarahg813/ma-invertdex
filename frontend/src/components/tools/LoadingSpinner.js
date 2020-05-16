import React from "react";
import { Spinner } from "reactstrap";

const LoadingSpinner = () => {
  return (
    <>
      <Spinner size="sm" color="secondary" />{" "}
      <Spinner size="sm" color="secondary" />
      <Spinner size="sm" color="secondary" />{" "}
    </>
  );
};

export default LoadingSpinner;
