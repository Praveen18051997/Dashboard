import photo1 from "../../assets/images/photo1.png";
import photo2 from "../../assets/images/photo2.png";
import photo3 from "../../assets/images/photo3.png";
import photo4 from "../../assets/images/photo4.png";
import photo5 from "../../assets/images/photo5.png";
import photo6 from "../../assets/images/photo6.png";
import photo7 from "../../assets/images/photo7.png";
import photo8 from "../../assets/images/photo8.png";
import photo9 from "../../assets/images/photo9.png";

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
];

const PhotosGrid = () => {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 mt-6">

      {/* Heading */}
      <h3 className="text-xs uppercase tracking-[3px] text-gray-400 font-semibold mb-6">
        PHOTOS
      </h3>

      {/* Photos */}
      <div className="grid grid-cols-3 gap-3">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className="w-full h-24 rounded-xl object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>

    </div>
  );
};

export default PhotosGrid;