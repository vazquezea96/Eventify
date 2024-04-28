import { useState, useEffect } from "react";
import { postComment, getComments } from "../../../utils/backend";
import Comment from "../Comment";

export default function commentSection({ eventId }) {
  // Save comments queried from the database in state
  const [comments, setComments] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [createFormData, setCreateFormData] = useState({
    name: "",
    content: "",
  });

  // TODO Query the database for all comments that pertain to this artwork on component mount
  useEffect(() => {
    getComments(eventId).then((comments) => setComments(comments));
  }, []);

  // Update the form fields as the user types
  function handleInputChange(event) {
    setCreateFormData({
      ...createFormData,
      [event.target.name]: event.target.value,
    });
  }

  // Render a form that allows a user to create a comment on submit
  function toggleCreateForm() {
    setShowCreateForm(!showCreateForm);
  }

  // Update the comments in the comment section after a database transaction
  function refreshComments() {
    getComments(eventId).then((newCommentData) => setComments(newCommentData));
  }

  // Execute form submission logic
  function handleSubmit(event) {
    // prevent the page from reloading
    event.preventDefault();
    // clear the form
    setCreateFormData({
      name: "",
      content: "",
    });
    // close the form
    setShowCreateForm(false);
    // create the comment in the backend
    postComment({ ...createFormData, eventId: eventId }).then(() =>
      refreshComments(),
    );
  }

  // conditionally render comments
  let commentElements = [
    <p key="0" className="text-center text-white">
      No comments yet. Be the first to comment!
    </p>,
  ];
  if (comments.length > 0) {
    commentElements = comments.map((comment) => {
      return (
        <Comment
          key={comment._id}
          data={comment}
          refreshComments={refreshComments}
        />
      );
    });
  }

  // conditionally display the text of the create form button
  let btnText = "Create";
  if (showCreateForm) {
    btnText = "Close";
  }

  return (
    <div className="comment-section bg-gray-950 rounded-t-lg p-4 pb-10 mt-4 mx-10 space-y-4 relative">
      <h1 className="text-white text-xl font-bold">Event Feedback</h1>
      <button
        onClick={toggleCreateForm}
        className="top-0 right-5 absolute text-white hover:bg-green-800 font-bold py-2 px-4 bg-green-900 rounded cursor-pointer mr-2"
      >
        {btnText}
      </button>

      {/* Conditionally render the create form */}
      {showCreateForm && (
        <form
          onSubmit={handleSubmit}
          className="rounded-lg p-4 my-4 mx-auto text-right"
        >
          <input
            name="name"
            className="px-2 py-1 w-full"
            placeholder="Your name"
            value={createFormData.name}
            onChange={handleInputChange}
          />
          <br />
          <textarea
            name="content"
            className="p-2 my-2 h-[100px] w-full"
            placeholder="Share your thoughts!"
            value={createFormData.content}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="text-white hover:bg-gray-800 font-bold py-2 px-4 bg-gray-700 rounded cursor-pointer mr-2"
          >
            Post
          </button>
        </form>
      )}

      {/* Display the value of the commentElements variable */}
      {commentElements}
    </div>
  );
}
