import { useState } from 'react'
import './App.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Root, { loader as rootLoader } from "./pages/root";
import Team from "./pages/team";
import Scar from "./pages/scar";

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
]);


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Loam Season</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <RouterProvider router={router} />
    </>
  )
}

export default App
