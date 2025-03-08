import React from "react";
import PregnancyCard from "./PregnancyCard";
import {pregnancyInfo} from "./pregnancyInfo";
//import "bootstrap/dist/css/bootstrap.min.css";

const Pregnancy = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Pregnancy & Drug Safety</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pregnancyInfo.map((item, index) => (
          <PregnancyCard key={index} title={item.title} description={item.description} examples={item.examples} />
        ))}
      </div>
    </div>
  );
};

export default Pregnancy;
