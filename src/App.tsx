import Films from "./containers/Films/Films";
// import Jokes from "./containers/Jokes/Jokes";
// import { useState } from "react";

const App = () => {
  // const [page, setPage] = useState<boolean>(false);
  return (
    <>
      <Films/>
      {/*<button onClick={() => setPage(!page)}>Change exercise</button>*/}
      {/*{page ? <Films /> : <Jokes />}*/}
    </>
  );
};

export default App;
