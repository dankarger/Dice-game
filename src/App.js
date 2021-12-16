import React from "react";
import DiceGame from "./Pages/DiceGame";

if (module.hot) {
  module.hot.accept();
}

const App = ()=> {
  return (
      <>
        <DiceGame />
      </>
  )
}







export default App