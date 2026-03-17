import React, { useState } from "react";
import { Table, Card, Input, Button, Select, Tag, message } from "antd";
import { usePermissions } from "../../hooks/usePermissions";

const { Option } = Select;

function Invoices() {
  const { isOrgAdmin, isClient } = usePermissions();

  // =========================
  // STATE
  // =========================
  const [invoices, setInvoices] = useState([
    {
      id: "INV001",
      client: "Company A",
      amount: 2000,
      status: "Paid",
    },
    {
      id: "INV002",
      client: "Company B",
      amount: 1500,
      status: "Pending",
    },
  ]);

  const [client, setClient] = useState("");
  const [amount, setAmount] = useState("");

  // =========================
  // CREATE INVOICE
  // =========================
  const createInvoice = () => {
    if (!client || !amount) {
      message.warning("Fill all fields");
      return;
    }

    const newInvoice = {
      id: `INV${Date.now()}`,
      client,
      amount,
      status: "Pending",
    };

    setInvoices([...invoices, newInvoice]);

    setClient("");
    setAmount("");

    message.success("Invoice created");
  };

  // =========================
  // MARK AS PAID
  // =========================
  const markPaid = (id) => {
    const updated = invoices.map((inv) =>
      inv.id === id ? { ...inv, status: "Paid" } : inv
    );

    setInvoices(updated);
    message.success("Payment received");
  };

  // =========================
  // TABLE COLUMNS
  // =========================
  const columns = [
    {
      title: "Invoice ID",
      dataIndex: "id",
    },
    {
      title: "Client",
      dataIndex: "client",
    },
    {
      title: "Amount ($)",
      dataIndex: "amount",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <Tag
          color={
            status === "Paid"
              ? "green"
              : status === "Pending"
              ? "orange"
              : "red"
          }
        >
          {status}
        </Tag>
      ),
    },
  ];

  // Add action column for Admin
  if (isOrgAdmin) {
    columns.push({
      title: "Action",
      render: (_, record) =>
        record.status === "Pending" && (
          <Button onClick={() => markPaid(record.id)}>
            Mark Paid
          </Button>
        ),
    });
  }

  return (
    <div style={{ padding: "10px" }}>
      <h2>Billing & Invoices 💰</h2>

      {/* ========================= */}
      {/* CREATE INVOICE (ADMIN ONLY) */}
      {/* ========================= */}
      {isOrgAdmin && (
        <Card style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <Input
              placeholder="Client Name"
              value={client}
              onChange={(e) => setClient(e.target.value)}
            />

            <Input
              placeholder="Amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <Button type="primary" onClick={createInvoice}>
              Create Invoice
            </Button>
          </div>
        </Card>
      )}

      {/* ========================= */}
      {/* INVOICE TABLE */}
      {/* ========================= */}
      <Card title="Invoices List">
        <Table
          dataSource={invoices}
          columns={columns}
          rowKey="id"
        />
      </Card>
    </div>
  );
}

export default Invoices;