import {Outlet} from "react-router-dom";
import "../App.css";
import {Footer} from "../components/Footer/Footer";
import {Navigation} from "../components/Navigation/Navigation";
import {useEffect, useState} from "react";

function App() {
  const [date, setDate] = useState(new Date());
  useEffect(() => setDate(date), []);

  return (
    <div className={`w-full wrapper`}>
      <Navigation />
      <div>
        <Outlet />
      </div>
      <Footer date={date} visitsCount={1489} />
    </div>
  );
}

export default App;
