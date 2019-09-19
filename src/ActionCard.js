import React from "react";

const ActionCard = props => {
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">{props.children}</div>
        <div className="extra content">
          <div className="actions">
            <a href="/" className="reply" style={{ padding: "0 10px" }}>
              Reply
            </a>
            <a href="/" className="save" style={{ paddingRight: "10px" }}>
              Save
            </a>
            <a href="/" className="hide" style={{ paddingRight: "10px" }}>
              Hide
            </a>
            <a href="/">
              <i className="expand icon" style={{ padding: "10px,0px" }} />
              Full-screen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionCard;
