import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Home from "pages/home/";
import ProgressBar from "@ramonak/react-progress-bar";
import * as Components from "components/";

// TODO: 之後可擴充換頁互動
const browserRouter = [
  {
    path: "/",
    element: <Home />,
  },
];

const router = createBrowserRouter(browserRouter);

function App() {
  return <Components.ProgressBar completed={60} />;

  // <RouterProvider router={router} />
}

export default App;
