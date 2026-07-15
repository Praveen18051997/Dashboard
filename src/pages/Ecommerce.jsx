import { useEffect, useState } from "react";

import Layout from "../components/Layout";

import ProductHeader from "../components/Ecommerce/ProductHeader";
import ProductTabs from "../components/Ecommerce/ProductTabs";
import ProductSearch from "../components/Ecommerce/ProductSearch";
import ProductTable from "../components/Ecommerce/ProductTable";
import AddProductModal from "../components/Ecommerce/AddProductModal";

import { defaultProducts } from "../components/Ecommerce/ProductData";

const Ecommerce = () => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts
      ? JSON.parse(savedProducts)
      : defaultProducts;
  });

  const [activeTab, setActiveTab] = useState("All");

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All Categories");

  const [status, setStatus] = useState("All Status");

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );
  }, [products]);

  // Add Product
  const addProduct = (product) => {
    setProducts((prev) => [
      ...prev,
      {
        ...product,
        id: Date.now(),
      },
    ]);
  };

  // Delete Product
  const deleteProduct = (id) => {
    setProducts((prev) =>
      prev.filter(
        (product) => product.id !== id
      )
    );
  };

  // Edit Product
  const editProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      )
    );
  };

  // Toggle Checkbox
  const toggleChecked = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
              ...product,
              checked: !product.checked,
            }
          : product
      )
    );
  };

  // Counts
  const allCount = products.length;

  const availableCount = products.filter(
    (product) =>
      product.status === "Available"
  ).length;

  const disabledCount = products.filter(
    (product) =>
      product.status === "Disabled"
  ).length;

  // Filter Products
  const filteredProducts = products.filter(
    (product) => {
      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All Categories" ||
        product.category === category;

      const matchesStatus =
        status === "All Status" ||
        product.status === status;

      const matchesTab =
        activeTab === "All" ||
        product.status === activeTab;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus &&
        matchesTab
      );
    }
  );

  return (
    <Layout>

      <ProductHeader
        onAdd={() => setShowModal(true)}
      />

      <ProductTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        allCount={allCount}
        availableCount={availableCount}
        disabledCount={disabledCount}
      />

      <ProductSearch
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        status={status}
        setStatus={setStatus}
      />

      <ProductTable
        products={filteredProducts}
        toggleChecked={toggleChecked}
        deleteProduct={deleteProduct}
        editProduct={editProduct}
      />

      <AddProductModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onAddProduct={addProduct}
      />

    </Layout>
  );
};

export default Ecommerce;