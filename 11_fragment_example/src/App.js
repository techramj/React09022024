import Button from "./UI/Button";
import Comp from "./component/Comp";
import React, {Fragment} from 'react';

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Comp/>
      <Button>Click Here</Button>
    </div>
  );
}

export default App;
