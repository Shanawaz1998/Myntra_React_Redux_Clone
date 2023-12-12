import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Headers from "../Components/Headers";
import FetchItem from "../Components/FetchItem";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Components/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Headers />
      <FetchItem />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;
