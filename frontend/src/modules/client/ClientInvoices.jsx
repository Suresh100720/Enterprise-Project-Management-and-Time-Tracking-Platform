import React, { useEffect, useState } from "react";
import { Button } from "antd";

import DataTable from "../../components/tables/DataTable";
import apiClient from "../../config/apiConfig";

function ClientInvoices() {

  const [invoiceRecords, setInvoiceRecords] = useState([]);

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {

    try {

      const apiResponse = await apiClient.get("/client/invoices");

      setInvoiceRecords(apiResponse.data);

    } catch (errorObject) {
      console.error(errorObject);
    }
  };

  const downloadInvoice = (invoiceId) => {

    window.open(
      `http://localhost:5000/api/invoices/${invoiceId}/download`,
      "_blank"
    );
  };

  const columns = [
    { title: "Invoice ID", dataIndex: "_id" },
    { title: "Project", dataIndex: "project" },
    { title: "Amount", dataIndex: "amount" },
    {
      title: "Download",
      render: (_, record) => (
        <Button
          type="primary"
          onClick={() => downloadInvoice(record._id)}
        >
          Download
        </Button>
      )
    }
  ];

  return (
    <div>

      <h2>Invoices</h2>

      <DataTable
        columns={columns}
        data={invoiceRecords}
      />

    </div>
  );
}

export default ClientInvoices;