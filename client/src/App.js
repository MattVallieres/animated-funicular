import Globalstyles from "./GlobalStyles";
import {Routes, Route} from "react-router-dom";
import { Home } from "./Pages/Home"
import { Header } from "./Components/Header";

const App = () => {
  return (
    <>
    <Globalstyles />
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
