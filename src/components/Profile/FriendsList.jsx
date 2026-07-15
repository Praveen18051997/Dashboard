import avatar from "../../assets/images/Avatar.png";

const friends = [
  {
    id: 1,
    name: "Ronald Robertson",
    role: "Product Designer",
  },
  {
    id: 2,
    name: "Regina Cooper",
    role: "Project Manager",
  },
  {
    id: 3,
    name: "Judith Black",
    role: "Creative Director",
  },
  {
    id: 4,
    name: "Dustin Williamson",
    role: "Web Developer",
  },
  {
    id: 5,
    name: "Nathan Fox",
    role: "Business Analyst",
  },
  {
    id: 6,
    name: "Calvin Flores",
    role: "Designer",
  },
  {
    id: 7,
    name: "Brandon Pena",
    role: "Product Designer",
  },
  {
    id: 8,
    name: "Courtney Nguyen",
    role: "Designer",
  },
  {
    id: 9,
    name: "Cody Lane",
    role: "Web Developer",
  },
];

const FriendsList = () => {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 mt-6">

      {/* Heading */}
      <h3 className="text-xs uppercase tracking-[3px] text-gray-400 font-semibold mb-6">
        FRIENDS
      </h3>

      {/* Friends */}
      <div className="space-y-5">
        {friends.map((friend) => (
          <div
            key={friend.id}
            className="flex items-center gap-4"
          >
            <img
              src={avatar}
              alt={friend.name}
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <h4 className="text-[15px] font-semibold text-gray-800">
                {friend.name}
              </h4>

              <p className="text-sm text-gray-400">
                {friend.role}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FriendsList;