import * as React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";

const App: React.SFC = () => {
  return (
    <div>
      <Card>
        <Card.Title>hello world</Card.Title>
      </Card>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
