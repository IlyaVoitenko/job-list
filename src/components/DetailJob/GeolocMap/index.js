import React from "react";
import Email from "./Email";
import NumberPhone from "./NumberPhone";
import Department from "./Department";
import Address from "./Address";

const GeolocMap = ({ address, email, phone }) => {
  return (
    <div className="flex h-[430px] w-[402px] flex-col bg-bgGeolocMap items-center mt-5 rounded-md  bg-bgImageMap">
      <Department />
      <Address address={address} />
      <NumberPhone phone={phone} />
      <Email email={email} />
    </div>
  );
};

export default GeolocMap;
