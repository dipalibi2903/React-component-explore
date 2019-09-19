import React from "react";

const commentDetails = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img
          alt="avatar"
          //src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
          src={props.avatars}
        />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.authName}
        </a>
        <div className="metadata">
          <span className="date">
            {props.timeAgo} at {props.commentTime}
          </span>
        </div>
        <div className="text">{props.commentText}</div>
      </div>
    </div>
  );
};

export default commentDetails;
