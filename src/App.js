import React from "react";
import Test from "./components/Test";

if (module.hot) {
  module.hot.accept();
}

const App = ()=> {
  return (
      <>
    <Test />
      </>
  )
}







export default App