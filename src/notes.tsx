import localforage from "localforage";

export class Note {
  id: string;
  title: string;
  content: string;

  constructor(id: string, title: string, content: string) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
}


export async function getNotes()  {
  let notes: Note[] | null= await localforage.getItem("notes");
  if (!notes) notes = [];
  return notes;
}

export async function createNote({ title, content }: { title: string; content: string }): Promise<Note> {
  let id = Math.random().toString(36).substring(2, 9);
  let note = { id, title, content };
  let notes = await getNotes();
  notes.unshift(note);
  await set(notes);
  return note;
}

export async function getNote(id:string): Promise<Note|null> {
  let notes: Note[] | null = await localforage.getItem("notes");
  if (!notes) return null;

  let note = notes.find((note) => note.id === id);
  return note ?? null;
}

export async function deleteNote(id:string) {
  let notes: Note[] | null = await localforage.getItem("notes");
  if (!notes) return false;
  let index: number = notes.findIndex((note) => note.id === id);
  if (index > -1) {
    notes.splice(index, 1);
    await set(notes);
    return true;
  }
  return false;
}

function set(notes: Note[] | null) {
  return localforage.setItem("notes", notes);
}