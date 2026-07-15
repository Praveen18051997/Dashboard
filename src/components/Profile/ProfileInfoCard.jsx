import avatar from "../../assets/images/Avatar.png";

const currentUser = JSON.parse(
  localStorage.getItem("currentUser")
);

const ProfileInfoCard = () => {
  const user = {
    fullname: currentUser?.fullname || "Jane Wilson",
    email: currentUser?.email || "black@example.com",
    role: "Creative Director",
    phone: "+1 (070) 123-8459",
    birthday: "17 March 1995",
    location: "New York, NY",
    image: avatar,
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

      {/* Profile */}

      <div className="flex flex-col items-center p-8">

        <div className="relative">

          <img
            src={user.image}
            alt={user.fullname}
            className="w-36 h-36 rounded-full object-cover"
          />

          <span className="absolute bottom-3 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>

        </div>

        <h2 className="mt-6 text-[30px] font-semibold text-gray-800">
          {user.fullname}
        </h2>

        <p className="text-gray-400 text-lg">
          {user.role}
        </p>

      </div>

      <hr />

      {/* Info */}

      <div className="p-8 space-y-7">

        <div>

          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
            Email
          </p>

          <p className="text-gray-700 font-medium">
            {user.email}
          </p>

        </div>

        <div>

          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
            Phone
          </p>

          <p className="text-gray-700 font-medium">
            {user.phone}
          </p>

        </div>

        <div>

          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
            Birthday
          </p>

          <p className="text-gray-700 font-medium">
            {user.birthday}
          </p>

        </div>

        <div>

          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
            Location
          </p>

          <p className="text-gray-700 font-medium">
            {user.location}
          </p>

        </div>

      </div>

    </div>
  );
};

export default ProfileInfoCard;