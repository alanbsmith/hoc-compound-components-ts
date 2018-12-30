import * as React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";

const App: React.SFC = () => {
  return (
    <div>
      <Card.Container>
        <Card.Title>hello world</Card.Title>
      </Card.Container>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
