import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Ben"
        date="NOW!"
        content="Boo ya!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Gareth"
        date="Yesterday"
        content="Duuuude!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Sara"
        date="A year ago"
        content="Oh dear..."
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
