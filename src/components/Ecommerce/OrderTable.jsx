import OrderRow from "./OrderRow";
import OrderPagination from "./OrderPagination";

const OrderTable = ({
  orders,
  deleteOrder,
  editOrder,
  toggleChecked,
}) => {
  return (
    <div className="mt-6 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          {/* Header */}
          <thead className="border-b border-gray-100 bg-white">

            <tr className="text-left text-xs font-semibold uppercase tracking-wide text-gray-500">

              <th className="w-16"></th>

              <th className="px-6 py-5">
                Order No.
              </th>

              <th className="px-6 py-5">
                Customer
              </th>

              <th className="px-6 py-5">
                Date
              </th>

              <th className="px-6 py-5">
                Total
              </th>

              <th className="px-6 py-5">
                Payment
              </th>

              <th className="px-6 py-5">
                Status
              </th>

              <th className="px-6 py-5 text-center">
                Action
              </th>

            </tr>

          </thead>

          {/* Body */}
          <tbody>

            {orders.length > 0 ? (

              orders.map((order) => (

                <OrderRow
                  key={order.id}
                  order={order}
                  deleteOrder={deleteOrder}
                  editOrder={editOrder}
                  toggleChecked={toggleChecked}
                />

              ))

            ) : (

              <tr>

                <td
                  colSpan={8}
                  className="py-16 text-center text-gray-400"
                >
                  No orders found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

      <OrderPagination />

    </div>
  );
};

export default OrderTable;