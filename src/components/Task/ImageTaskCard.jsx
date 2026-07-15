// import {
//   FiCalendar,
//   FiPaperclip,
//   FiMessageSquare,
// } from "react-icons/fi";

// import avatar from "../../assets/images/Avatar.png";

// import headerImage from "../../assets/images/header-image.png";
// import backgroundImage from "../../assets/images/background-image.png";

// import slider1 from "../../assets/images/slider1.png";
// import slider2 from "../../assets/images/slider2.png";
// import slider3 from "../../assets/images/slider3.png";

// const taskData = {
//   header: {
//     title: "New Header Image",
//     date: "Jun 17",
//     attachments: 1,
//     comments: 3,
//     avatars: 1,
//     image: headerImage,
//     accentBars: 1,
//   },

//   slider: {
//     title: "Refresh Photo Slider",
//     date: "Jun 17",
//     attachments: 3,
//     comments: 2,
//     avatars: 2,
//     accentBars: 2,
//   },

//   background: {
//     title: "New Background",
//     date: "Jun 17",
//     attachments: 1,
//     comments: 2,
//     avatars: 1,
//     image: backgroundImage,
//     accentBars: 1,
//   },
// };

// const ImageTaskCard = ({ variant }) => {
//   const task = taskData[variant];

//   return (
//     <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition-all duration-300">

//       {/* Accent Bars */}
//       <div className="flex gap-2 mb-5">

//         <div className="w-8 h-1 rounded-full bg-[#40D9C6]" />

//         {task.accentBars === 2 && (
//           <div className="w-8 h-1 rounded-full bg-[#40D9C6]" />
//         )}

//       </div>

//       {/* Header */}
//       <div className="flex justify-between items-center mb-5">

//         <h3 className="text-xl font-semibold text-gray-800">
//           {task.title}
//         </h3>

//         <div className="flex items-center gap-2 text-gray-400">

//           <FiCalendar />

//           <span className="text-sm">
//             {task.date}
//           </span>

//         </div>

//       </div>

//       {/* Images */}

//       {variant === "slider" ? (

//         <div className="grid grid-cols-3 gap-4 mb-6">

//           <img
//             src={slider1}
//             alt=""
//             className="w-full h-28 rounded-xl object-cover"
//           />

//           <img
//             src={slider2}
//             alt=""
//             className="w-full h-28 rounded-xl object-cover"
//           />

//           <img
//             src={slider3}
//             alt=""
//             className="w-full h-28 rounded-xl object-cover"
//           />

//         </div>

//       ) : (

//         <img
//           src={task.image}
//           alt={task.title}
//           className="w-full h-60 rounded-2xl object-cover mb-6"
//         />

//       )}

//       {/* Footer */}

//       <div className="flex justify-between items-center">

//         <div className="flex items-center gap-8 text-gray-500">

//           <div className="flex items-center gap-2">

//             <FiPaperclip />

//             {task.attachments}

//           </div>

//           <div className="flex items-center gap-2">

//             <FiMessageSquare />

//             {task.comments}

//           </div>

//         </div>

//         <div className="flex -space-x-3">

//           <img
//             src={avatar}
//             alt=""
//             className="w-10 h-10 rounded-full border-2 border-white"
//           />

//           {task.avatars === 2 && (

//             <img
//               src={avatar}
//               alt=""
//               className="w-10 h-10 rounded-full border-2 border-white"
//             />

//           )}

//         </div>

//       </div>

//     </div>
//   );
// };

// export default ImageTaskCard;

import {
  FiCalendar,
  FiPaperclip,
  FiMessageSquare,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

import avatar from "../../assets/images/Avatar.png";

import headerImage from "../../assets/images/header-image.png";
import backgroundImage from "../../assets/images/background-image.png";

import slider1 from "../../assets/images/slider1.png";
import slider2 from "../../assets/images/slider2.png";
import slider3 from "../../assets/images/slider3.png";

const ImageTaskCard = ({
  variant,
  task,
  deleteTask,
  editTask,
}) => {

  const getImage = () => {
    switch (variant) {
      case "header":
        return headerImage;

      case "background":
        return backgroundImage;

      default:
        return headerImage;
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition-all duration-300">

      {/* Top */}
      <div className="flex justify-between items-start mb-5">

        <div className="flex gap-2">
          <div className="w-8 h-1 rounded-full bg-[#40D9C6]" />
          <div className="w-8 h-1 rounded-full bg-[#40D9C6]" />
        </div>

        <div className="flex gap-3">

          <button
            onClick={() => editTask(task)}
            className="text-blue-500 hover:text-blue-700"
          >
            <FiEdit2 />
          </button>

          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500 hover:text-red-700"
          >
            <FiTrash2 />
          </button>

        </div>

      </div>

      {/* Header */}

      <div className="flex justify-between items-center mb-5">

        <h3 className="text-xl font-semibold text-gray-800">
          {task.title}
        </h3>

        <div className="flex items-center gap-2 text-gray-400">

          <FiCalendar />

          <span className="text-sm">
            {task.date || "Jun 17"}
          </span>

        </div>

      </div>

      {/* Images */}

      {variant === "slider" ? (

        <div className="grid grid-cols-3 gap-4 mb-6">

          <img
            src={slider1}
            alt=""
            className="rounded-xl h-28 w-full object-cover"
          />

          <img
            src={slider2}
            alt=""
            className="rounded-xl h-28 w-full object-cover"
          />

          <img
            src={slider3}
            alt=""
            className="rounded-xl h-28 w-full object-cover"
          />

        </div>

      ) : (

        <img
          src={getImage()}
          alt={task.title}
          className="rounded-2xl w-full h-60 object-cover mb-6"
        />

      )}

      {/* Footer */}

      <div className="flex justify-between items-center">

        <div className="flex gap-8 text-gray-500">

          <div className="flex items-center gap-2">
            <FiPaperclip />
            {task.attachments ?? 0}
          </div>

          <div className="flex items-center gap-2">
            <FiMessageSquare />
            {task.comments ?? 0}
          </div>

        </div>

        <div className="flex -space-x-3">

          <img
            src={avatar}
            alt=""
            className="w-10 h-10 rounded-full border-2 border-white"
          />

          <img
            src={avatar}
            alt=""
            className="w-10 h-10 rounded-full border-2 border-white"
          />

        </div>

      </div>

    </div>
  );
};

export default ImageTaskCard;