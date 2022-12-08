import React, { useState, useEffect } from "react";
import MainContent from "../MainContent";
import GeolocMap from "../GeolocMap";
import { useSelector } from "react-redux";
import { selectorSelectedJob } from "./selectors";
import ContactTitle from "../GeolocMap/ContactTitle";
import { getSizeWindow, getWindowSize } from "../MainContent/helper";

const PostDetail = () => {
  const selectedJob = useSelector(selectorSelectedJob);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => getSizeWindow(setWindowSize), []);
  const { innerWidth } = windowSize;

  return (
    <div className="flex flex-row justify-center  sm:flex-col ">
      <MainContent data={selectedJob} />
      <div className="sm:mt-5  sm:bg-black ">
        {innerWidth < 1024 ? <ContactTitle /> : null}
        <GeolocMap
          email={selectedJob.email}
          address={selectedJob.address}
          phone={selectedJob.phone}
        />
      </div>
    </div>
  );
};

export default PostDetail;
