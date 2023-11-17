import { useLoaderData, Link, Outlet } from "react-router-dom";
import { getNotes, Note } from "../notes";
import Button from '@mui/material/Button';
import MenuLayout from "./MenuLayout"

export async function loader() {
  return getNotes();
}

export default function Root() {
  const notes = useLoaderData() as Note[];

  return (
    <MenuLayout>
      <div style={{ display: "flex" }}>
        <div style={{ padding: "0 2rem", borderRight: "solid 1px #ccc" }}>
          <h1>Root!</h1>
          <p>
            <Button variant="contained">Hello world</Button>
          </p>
          <ul>
            {notes.map((note) => (
              <li>
                <Link to={`/note/${note.id}`}>{note.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: 1, padding: "0 2rem" }}>
          <Outlet />
        </div>
      </div>
    </MenuLayout>
  );
}