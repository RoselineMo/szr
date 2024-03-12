import {Outlet} from "react-router-dom";
import "../App.css";
import {Footer} from "../components/Footer/Footer";
import {Navigation} from "../components/Navigation/Navigation";

function App() {
  return (
    <div className={`w-full wrapper`}>
      <Navigation />
      <div id="detail">
        <Outlet />
      </div>
      <Footer date={2024} visitsCount={1489} />
    </div>
  );
}

export default App;
