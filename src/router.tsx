import { createHashRouter } from "react-router-dom";

import Root, { loader as rootLoader } from "./pages/root";
import Team from "./pages/team";
import Scar from "./pages/scar";
import App from "./App"

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "team",
        element: <Team />,
      },
    ],
  },
  {
    path: "/scar",
    element: <Scar />,
  },
  {
    path: "/app",
    element: <App />,
  },
]);

export default router