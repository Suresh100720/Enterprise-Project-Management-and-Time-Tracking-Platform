import React from "react";

import BudgetChart from "../../../components/charts/BudgetChart";

function BudgetTracking() {

  const data = [
    { project: "Website", budget: 10000, actual: 8500 },
    { project: "Mobile App", budget: 20000, actual: 22000 }
  ];

  return (
    <div>

      <h2>Budget Tracking</h2>

      <BudgetChart data={data} />

    </div>
  );
}

export default BudgetTracking;