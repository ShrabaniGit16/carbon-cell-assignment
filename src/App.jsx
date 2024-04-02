import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard2 from "./components/Dashboard/Dashboard";
import RootLayout from "./layout/RootLayout";
import Nations from "./pages/Nations";
import Coins from "./pages/Coins";

function App() {
  return (
    <>
      <RootLayout />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/" Component={Nations} />
        <Route path="/" Component={Coins} />
      </Routes>
    </>
  );
}

export default App;
