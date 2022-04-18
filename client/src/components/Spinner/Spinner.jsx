/** @format */

import React from "react";
import { Watch } from "react-loader-spinner";

const Spinner = () => {
  return (
    <>
      <container className="flex justify-center my-80">
        <Watch color="#FF9800" ariaLabel="loading" />
      </container>
    </>
  );
};

export default Spinner;
