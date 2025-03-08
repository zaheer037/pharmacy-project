import React from "react";
import commonIllnessInfo from "./commonData";
import CommonCard from "./CommonCard";

const commonIllness = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Common Health Conditions</h2>
      <div className="d-flex flex-column align-items-center">
        {commonIllnessInfo.map((item, index) => (
          <div key={index} className="w-100 mb-3">
            <CommonCard
              title={item.title}
              nonPharma={item.nonPharmacological}
              pharma={item.pharmacological}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default commonIllness;
