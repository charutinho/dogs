import React, { useContext, useEffect, useRef, useState } from "react";

import { UserContext } from "../../UserContext";

import PhotoCommentsForm from "./PhotoCommentsForm";

import styles from "./PhotoComments.module.css";

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const commentsSetion = useRef(null);

  const { login } = useContext(UserContext);

  useEffect(() => {
    commentsSetion.current.scrollTop = commentsSetion.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSetion}
        className={`${styles.comments} ${props.single ? styles.single : ""}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComments;
