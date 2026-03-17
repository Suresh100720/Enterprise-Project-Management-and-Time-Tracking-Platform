import React, { useEffect, useState } from "react";

import DataTable from "../../components/tables/DataTable";
import apiClient from "../../config/apiConfig";

function Payments() {

  const [paymentRecords, setPaymentRecords] = useState([]);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {

    try {

      const apiResponse = await apiClient.get("/payments");

      setPaymentRecords(apiResponse.data);

    } catch (error) {
      console.error(error);
    }
  };

  const columns = [
    { title: "Invoice", dataIndex: "invoiceId" },
    { title: "Client", dataIndex: "client" },
    { title: "Amount", dataIndex: "amount" },
    { title: "Date", dataIndex: "date" }
  ];

  return (
    <div>

      <h2>Payments</h2>

      <DataTable columns={columns} data={paymentRecords} />

    </div>
  );
}

export default Payments;