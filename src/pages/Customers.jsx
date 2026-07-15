import { useEffect, useState } from "react";

import Layout from "../components/Layout";

import CustomersHeader from "../components/Ecommerce/CustomersHeader";
import CustomerTabs from "../components/Ecommerce/CustomerTabs";
import CustomerSearch from "../components/Ecommerce/CustomerSearch";
import CustomerTable from "../components/Ecommerce/CustomerTable";
import AddCustomerModal from "../components/Ecommerce/AddCustomerModal";

import { defaultCustomers } from "../components/Ecommerce/CustomerData";

const Customers = () => {
  const [customers, setCustomers] = useState(() => {
    const saved = localStorage.getItem("customers");
    return saved ? JSON.parse(saved) : defaultCustomers;
  });

  const [activeTab, setActiveTab] = useState("All");

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      "customers",
      JSON.stringify(customers)
    );
  }, [customers]);

  const addCustomer = (customer) => {
    setCustomers((prev) => [
      ...prev,
      {
        ...customer,
        id: Date.now(),
      },
    ]);
  };

  const deleteCustomer = (id) => {
    setCustomers((prev) =>
      prev.filter((customer) => customer.id !== id)
    );
  };

  const editCustomer = (updatedCustomer) => {
    setCustomers((prev) =>
      prev.map((customer) =>
        customer.id === updatedCustomer.id
          ? updatedCustomer
          : customer
      )
    );
  };

  const toggleChecked = (id) => {
    setCustomers((prev) =>
      prev.map((customer) =>
        customer.id === id
          ? {
              ...customer,
              checked: !customer.checked,
            }
          : customer
      )
    );
  };

  // Counts
  const allCount = customers.length;

  const activeCount = customers.filter(
    (customer) => customer.status === "Active"
  ).length;

  const blockedCount = customers.filter(
    (customer) => customer.status === "Blocked"
  ).length;

  // Filter
  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      customer.email
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      status === "All Status" ||
      customer.status === status;

    const matchesTab =
      activeTab === "All" ||
      customer.status === activeTab;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesTab
    );
  });

  return (
    <Layout>

      <CustomersHeader
        onAdd={() => setShowModal(true)}
      />

      <CustomerTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        allCount={allCount}
        activeCount={activeCount}
        blockedCount={blockedCount}
      />

      <CustomerSearch
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      <CustomerTable
        customers={filteredCustomers}
        deleteCustomer={deleteCustomer}
        editCustomer={editCustomer}
        toggleChecked={toggleChecked}
      />

      <AddCustomerModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onAddCustomer={addCustomer}
      />

    </Layout>
  );
};

export default Customers;