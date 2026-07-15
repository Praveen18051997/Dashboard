import CustomerRow from "./CustomerRow";
import CustomerPagination from "./CustomerPagination";

const CustomerTable = ({
  customers,
  deleteCustomer,
  editCustomer,
  toggleChecked,
}) => {
  return (
    <div className="mt-6 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          {/* Table Header */}

          <thead className="border-b border-gray-100 bg-white">

            <tr className="text-left text-xs font-semibold uppercase tracking-wide text-gray-500">

              <th className="w-16"></th>

              <th className="px-6 py-5">
                Customer
              </th>

              <th className="px-6 py-5">
                Email
              </th>

              <th className="px-6 py-5">
                Location
              </th>

              <th className="px-6 py-5">
                Phone
              </th>

              <th className="px-6 py-5">
                Date
              </th>

              <th className="px-6 py-5">
                Status
              </th>

              <th className="px-6 py-5 text-center">
                Action
              </th>

            </tr>

          </thead>

          {/* Table Body */}

          <tbody>

            {customers.length > 0 ? (

              customers.map((customer) => (

                <CustomerRow
                  key={customer.id}
                  customer={customer}
                  deleteCustomer={deleteCustomer}
                  editCustomer={editCustomer}
                  toggleChecked={toggleChecked}
                />

              ))

            ) : (

              <tr>

                <td
                  colSpan="8"
                  className="py-16 text-center text-gray-400"
                >
                  No customers found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

      <CustomerPagination />

    </div>
  );
};

export default CustomerTable;