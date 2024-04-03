import Home from "./pages/Home";

import RootLayout from "./layout/RootLayout";
import Nations from "./pages/Nations";
import Coins from "./pages/Coins";
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/nations", element: <Nations /> },
        { path: "/coins", element: <Coins /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
