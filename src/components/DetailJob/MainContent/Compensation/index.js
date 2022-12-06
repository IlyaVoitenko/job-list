import React from "react";

const Compensation = ({ listCompensation }) => {
  const filteredList = listCompensation.filter((item) => item !== "\n\n");
  return (
    <div>
      <ul className="w-1/2 list-square">
        {filteredList.map((text, index) => {
          return (
            <li
              key={index}
              className="font-robot not-italic text-regal-blue font-normal"
            >
              {text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Compensation;
