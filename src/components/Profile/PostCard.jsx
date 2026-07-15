import { useState } from "react";

import avatarDefault from "../../assets/images/Avatar.png";

import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostActions from "./PostActions";
import CommentInput from "./CommentInput";
import CommentsList from "./CommentsList";

const PostCard = ({
  avatar = avatarDefault,
  name,
  date,
  image,
  description,
  isVideo = false,
}) => {
  const [comments, setComments] = useState([
    {
      id: 1,
      avatar: avatarDefault,
      name: "Judith Black",
      time: "1 day ago",
      message:
        "Very interesting and informative article. I learned a lot of new and interesting things.",
      likes: 5,
      replies: [
        {
          id: 11,
          avatar: avatarDefault,
          name: "Nathan Fox",
          time: "5 min ago",
          message:
            "Hello! I agree, a very interesting article. Thank you very much!",
        },
      ],
    },

    {
      id: 2,
      avatar: avatarDefault,
      name: "Calvin Flores",
      time: "2 days ago",
      message:
        "Thanks for the good article. Looking forward to new ones.",
      likes: 3,
      replies: [],
    },
  ]);

  const handleAddComment = (text) => {
    setComments((prev) => [
      {
        id: Date.now(),
        avatar: avatarDefault,
        name: "You",
        time: "Just now",
        message: text,
        likes: 0,
        replies: [],
      },
      ...prev,
    ]);
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

      <PostHeader
        avatar={avatar}
        name={name}
        date={date}
      />

      <PostContent
        image={image}
        description={description}
        isVideo={isVideo}
      />

      <PostActions
        initialLikes={50}
        comments={comments.length}
      />

      <CommentInput
        onAddComment={handleAddComment}
      />

      <CommentsList
        comments={comments}
      />

    </div>
  );
};

export default PostCard;