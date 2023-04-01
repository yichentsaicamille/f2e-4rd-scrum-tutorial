import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Home from "pages/home/";

// TODO: 之後可擴充換頁互動
const browserRouter = [
  {
    path: "/",
    element: <Home />,
  },
];

const router = createBrowserRouter(browserRouter);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
