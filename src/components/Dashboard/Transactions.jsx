import { BsThreeDots } from "react-icons/bs";
import Avatar from "../../assets/images/Avatar.png";

const transactions = [
  {
    id: 1,
    name: "Devon Williamson",
    time: "08:00 AM",
    date: "19 August",
    amount: "+$1.400",
    type: "Payment",
    positive: true,
  },
  {
    id: 2,
    name: "Debra Wilson",
    time: "09:45 AM",
    date: "19 August",
    amount: "-$850",
    type: "Refund",
    positive: false,
  },
  {
    id: 3,
    name: "Judith Black",
    time: "10:15 AM",
    date: "20 August",
    amount: "+$2.050",
    type: "Payment",
    positive: true,
  },
  {
    id: 4,
    name: "Philip Henry",
    time: "10:50 AM",
    date: "23 August",
    amount: "+$650",
    type: "Payment",
    positive: true,
  },
  {
    id: 5,
    name: "Mitchell Cooper",
    time: "12:45 AM",
    date: "25 August",
    amount: "+$900",
    type: "Payment",
    positive: true,
  },
];

const Transactions = () => {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-8 h-[600px]">

      {/* Header */}
      <div className="flex items-center justify-between mb-16">
        <h2 className="text-3xl font-semibold text-gray-800">
          Transactions
        </h2>

        <button className="text-gray-400 hover:text-gray-700">
          <BsThreeDots className="text-3xl" />
        </button>
      </div>

      {/* List */}
      <div className="space-y-7">
        {transactions.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between"
          >
            {/* Left */}
            <div className="flex items-center gap-4">

              <img
                src={Avatar}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h4 className="text-lg font-medium text-gray-800">
                  {item.name}
                </h4>

                <p className="text-sm text-gray-400">
                  {item.time}
                  <span className="mx-2">—</span>
                  {item.date}
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="text-right">
              <p
                className={`text-2xl font-semibold ${
                  item.positive
                    ? "text-green-500"
                    : "text-red-400"
                }`}
              >
                {item.amount}
              </p>

              <p className="text-lg text-gray-400">
                {item.type}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Transactions;