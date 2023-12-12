import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Headers from "../Components/Headers";
import FetchItem from "../Components/FetchItem";

function App() {
  return (
    <>
      <Headers />
      <FetchItem />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
