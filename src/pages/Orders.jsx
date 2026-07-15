import { useEffect, useState } from "react";

import Layout from "../components/Layout";

import OrdersHeader from "../components/Ecommerce/OrdersHeader";
import OrderTabs from "../components/Ecommerce/OrderTabs";
import OrderSearch from "../components/Ecommerce/OrderSearch";
import OrderTable from "../components/Ecommerce/OrderTable";
import AddOrderModal from "../components/Ecommerce/AddOrderModal";

import { defaultOrders } from "../components/Ecommerce/OrderData";

const Orders = () => {
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : defaultOrders;
  });

  const [activeTab, setActiveTab] = useState("All");

  const [search, setSearch] = useState("");
  const [payment, setPayment] = useState("All Payments");
  const [status, setStatus] = useState("All Status");

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (order) => {
    setOrders((prev) => [
      ...prev,
      {
        ...order,
        id: Date.now(),
      },
    ]);
  };

  const deleteOrder = (id) => {
    setOrders((prev) =>
      prev.filter((order) => order.id !== id)
    );
  };

  const editOrder = (updatedOrder) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === updatedOrder.id
          ? updatedOrder
          : order
      )
    );
  };

  // Toggle checkbox
  const toggleChecked = (id) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? {
              ...order,
              checked: !order.checked,
            }
          : order
      )
    );
  };

  // Counts
  const allCount = orders.length;

  const pendingCount = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  const processingCount = orders.filter(
    (order) => order.status === "Processing"
  ).length;

  const refundedCount = orders.filter(
    (order) => order.status === "Refunded"
  ).length;

  // Filter
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      order.orderNo
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesPayment =
      payment === "All Payments" ||
      order.payment === payment;

    const matchesStatus =
      status === "All Status" ||
      order.status === status;

    const matchesTab =
      activeTab === "All" ||
      order.status === activeTab;

    return (
      matchesSearch &&
      matchesPayment &&
      matchesStatus &&
      matchesTab
    );
  });

  return (
    <Layout>

      <OrdersHeader
        onAdd={() => setShowModal(true)}
      />

      <OrderTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        allCount={allCount}
        pendingCount={pendingCount}
        processingCount={processingCount}
        refundedCount={refundedCount}
      />

      <OrderSearch
        search={search}
        setSearch={setSearch}
        payment={payment}
        setPayment={setPayment}
        status={status}
        setStatus={setStatus}
      />

      <OrderTable
        orders={filteredOrders}
        deleteOrder={deleteOrder}
        editOrder={editOrder}
        toggleChecked={toggleChecked}
      />

      <AddOrderModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onAddOrder={addOrder}
      />

    </Layout>
  );
};

export default Orders;