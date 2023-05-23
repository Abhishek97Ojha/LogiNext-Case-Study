import { createContext, useState } from "react";
import "./App.css";
import CardContainer from "./Components/CardContainer/CardContainer";

export const MyContext = createContext();
function App() {
  const [userData, setUserData] = useState([]);
  return (
    <div className="App">
      <MyContext.Provider
        value={{ userData: userData, setUserData: setUserData }}
      ><CardContainer />
      </MyContext.Provider>
    </div>
  )
}

export default App;
