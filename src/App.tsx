import Films from "./containers/Films/Films";
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import Jokes from "./containers/Jokes/Jokes";
import { useState } from "react";

const App = () => {
  const [page, setPage] = useState<boolean>(false);
  return (
    <>
      <Toolbar />
      <button className="ms-2 mb-4 border-2" onClick={() => setPage(!page)}>Switch to another exercise</button>
      {page ? <Films /> : <Jokes />}
    </>
  );
};

export default App;
