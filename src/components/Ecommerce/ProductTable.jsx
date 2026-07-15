import ProductRow from "./ProductRow";
import ProductPagination from "./ProductPagination";

const ProductTable = ({
  products,
  toggleChecked,
  deleteProduct,
  editProduct,
}) => {
  return (
    <div className="mt-6 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          {/* Header */}
          <thead className="border-b border-gray-100 bg-white">

            <tr className="text-left text-xs font-semibold uppercase tracking-wide text-gray-500">

              <th className="w-16"></th>

              <th className="px-6 py-5">Product Name</th>

              <th className="px-6 py-5">Product No.</th>

              <th className="px-6 py-5">Category</th>

              <th className="px-6 py-5">Date</th>

              <th className="px-6 py-5">Price</th>

              <th className="px-6 py-5">Status</th>

              <th className="px-6 py-5 text-center">
                Action
              </th>

            </tr>

          </thead>

          {/* Body */}
          <tbody>

            {products.length > 0 ? (
              products.map((product) => (
                <ProductRow
                  key={product.id}
                  product={product}
                  toggleChecked={toggleChecked}
                  deleteProduct={deleteProduct}
                  editProduct={editProduct}
                />
              ))
            ) : (
              <tr>

                <td
                  colSpan={8}
                  className="py-16 text-center text-gray-400"
                >
                  No products found.
                </td>

              </tr>
            )}

          </tbody>

        </table>

      </div>

      <ProductPagination />

    </div>
  );
};

export default ProductTable;