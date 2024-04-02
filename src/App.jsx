import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard2 from "./components/Dashboard/Dashboard";
import RootLayout from "./layout/RootLayout";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
    </Routes>
  );
}

export default App;
