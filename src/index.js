import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetail";
import Faker from "faker";
import moment from "moment";
import ActionCard from "./ActionCard";

const doIteration = randomNumber => {
  let CommentComponent = [];
  for (let index = 0; index < randomNumber; index++) {
    CommentComponent.push(
      <ActionCard>
        <CommentDetails
          avatars={Faker.image.avatar()}
          authName={Faker.name.firstName()}
          commentTime={moment(Faker.date.past()).format("hh:mm A")}
          commentText={Faker.lorem.words()}
          timeAgo={moment(Faker.date.past()).fromNow()}
        />
      </ActionCard>
    );
  }
  return CommentComponent;
};

function App() {
  const randomNumber = Math.floor(Math.random() * 20);
  return (
    <div className="container ui comments">
      <h3 className="ui dividing header">Comments</h3>
      {doIteration(randomNumber)}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
