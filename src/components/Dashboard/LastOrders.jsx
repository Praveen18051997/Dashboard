import {
  FiCalendar,
  FiChevronDown,
} from "react-icons/fi";

import { BsThreeDotsVertical } from "react-icons/bs";

import Avatar from "../../assets/images/Avatar.png";

const orders = [
  {
    id: 1,
    customer: "Regina Cooper",
    order: "#790841",
    amount: "$2.500",
    payment: "Credit Card",
    date: "12.09.2019",
  },
  {
    id: 2,
    customer: "Robert Edwards",
    order: "#799894",
    amount: "$1.500",
    payment: "PayPal",
    date: "12.09.2019",
  },
  {
    id: 3,
    customer: "Gloria Mckinney",
    order: "#790857",
    amount: "$5.600",
    payment: "Credit Card",
    date: "12.09.2019",
  },
  {
    id: 4,
    customer: "Randall Fisher",
    order: "#790687",
    amount: "$2.850",
    payment: "PayPal",
    date: "12.09.2019",
  },
];

const LastOrders = () => {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-8 h-[600px] shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <h2 className="text-[34px] font-semibold text-gray-800">
          Last Orders
        </h2>

        <button className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-gray-200 hover:bg-gray-50 transition">

          <FiCalendar className="text-xl text-gray-500" />

          <span className="text-lg font-medium text-gray-700">
            19 Aug - 25 Aug
          </span>

          <FiChevronDown className="text-gray-500" />

        </button>

      </div>

      {/* Table Heading */}

      <div className="grid grid-cols-[2.3fr_1fr_1fr_1.3fr_1fr_40px] gap-4 px-4 mb-5 text-[16px] text-gray-400 font-medium">

        <div className="col-span-2">
          Customer Name
        </div>

        <div>
          Order No.
        </div>

        <div>
          Amount
        </div>

        <div>
          Payment Type
        </div>

        <div>
          Date
        </div>

      </div>

      {/* Orders */}

      <div className="space-y-4">

        {orders.map((item) => (

          <div
            key={item.id}
            className="grid grid-cols-6 items-center bg-gray-50 rounded-3xl px-5 py-4 hover:shadow-md transition"
          >

            {/* Customer */}

            <div className="col-span-2 flex items-center gap-4">

              <img
                src={Avatar}
                alt="avatar"
                className="w-14 h-14 rounded-full object-cover"
              />

              <span className="text-xl font-medium text-gray-800">
                {item.customer}
              </span>

            </div>

            {/* Order */}

            <div className="text-lg text-gray-600">
              {item.order}
            </div>

            {/* Amount */}

            <div className="text-lg font-semibold text-gray-800">
              {item.amount}
            </div>

            {/* Payment */}

            <div className="text-lg text-gray-600">
              {item.payment}
            </div>

            {/* Date */}

            <div className="flex items-center justify-between">

              <span className="text-lg text-gray-600">
                {item.date}
              </span>

              <button className="text-gray-400 hover:text-gray-700">

                <BsThreeDotsVertical className="text-xl" />

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default LastOrders;