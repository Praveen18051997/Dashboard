const PostContent = ({
  image,
  description,
  isVideo = false,
}) => {
  return (
    <div>

      {/* Image */}

      <div className="relative px-6">

        <img
          src={image}
          alt="Post"
          className="w-full h-[420px] object-cover rounded-2xl"
        />

        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">

            <button
              className="
                w-24
                h-24
                rounded-full
                bg-white
                shadow-xl
                flex
                items-center
                justify-center
                hover:scale-110
                transition
              "
            >
              <svg
                width="34"
                height="34"
                fill="#21943A"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>

            </button>

          </div>
        )}

      </div>

      {/* Description */}

      <div className="px-6 pt-6">

        <p className="text-gray-600 leading-8 text-[16px]">
          {description}
        </p>

      </div>

    </div>
  );
};

export default PostContent;