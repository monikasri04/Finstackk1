import LoadingButton from "@mui/lab/LoadingButton";
import { useEffect, useState } from "react";

type Comment = {
  id: number;
  name: string;
  email: string;
  body: string;
};

function Comments() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [comments, setComments] = useState<Comment | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  async function apiCalls() {

    setLoading(true);

    const getData = await fetch(
      `https://jsonplaceholder.typicode.com/comments/${currentIndex}`
    );

    const data = await getData.json();

    setComments(data);

    setLoading(false);
  }

  apiCalls();

}, [currentIndex]);


  const nextCard = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="comment-container">
      <div className="comment">
        <h3>Comments:</h3>

        <p>Name: {comments?.name}</p>
        <p>Email: {comments?.email}</p>
        <p>Comment: {comments?.body}</p>

        <LoadingButton
          loading={loading}
          variant="contained"
          onClick={nextCard}
        >
          Next
        </LoadingButton>
      </div>
    </div>
  );
}

export default Comments;
