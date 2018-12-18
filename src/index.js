import React from "react";
import ReactDOM from "react-dom";

import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Ben" date="NOW!" text="Boo ya!" />
      <CommentDetail author="Gareth" date="Yesterday" text="Duuuude!" />
      <CommentDetail author="Sara" date="A year ago" text="Oh dear..." />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
