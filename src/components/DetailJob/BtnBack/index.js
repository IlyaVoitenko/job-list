import React from "react";
import { Link } from "react-router-dom";

const BtnBack = () => {
  return (
    <div className="mt-2">
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
      >
        <button>Go back</button>
      </Link>
    </div>
  );
};

export default BtnBack;
