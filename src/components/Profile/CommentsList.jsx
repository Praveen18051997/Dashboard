import CommentItem from "./CommentItem";

const CommentsList = ({ comments = [] }) => {
  if (comments.length === 0) {
    return (
      <div className="px-6 py-6 text-center text-gray-400">
        No comments yet.
      </div>
    );
  }

  return (
    <div className="px-6 py-6 space-y-6">
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
        />
      ))}
    </div>
  );
};

export default CommentsList;