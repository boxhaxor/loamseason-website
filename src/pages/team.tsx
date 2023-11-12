import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ padding: "0 2rem", borderRight: "solid 1px #ccc" }}>
        <h1>TEAM!</h1>
        <p>
          Team paragraph
        </p>
      </div>
      <div style={{ flex: 1, padding: "0 2rem" }}>
        <Outlet />
      </div>
    </div>
  );
}