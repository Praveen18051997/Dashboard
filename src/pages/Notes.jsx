import { useEffect, useMemo, useState } from "react";

import Layout from "../components/Layout";

import NotesToolbar from "../components/Notes/NotesToolbar";
import NotesGrid from "../components/Notes/NotesGrid";
import AddNoteModal from "../components/Notes/AddNoteModal";

import { defaultNotes } from "../components/Notes/NotesData";

const Notes = () => {
  // Load Notes

  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem("notes");

      if (!saved) return defaultNotes;

      const parsed = JSON.parse(saved);

      return Array.isArray(parsed)
        ? parsed
        : defaultNotes;
    } catch {
      return defaultNotes;
    }
  });

  // Search

  const [search, setSearch] = useState("");

  // Modal

  const [showModal, setShowModal] =
    useState(false);

  // Editing Note

  const [editingNote, setEditingNote] =
    useState(null);

  // Save

  useEffect(() => {
    localStorage.setItem(
      "notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  // Filter

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      const searchText =
        search.toLowerCase();

      return (
        note.title
          .toLowerCase()
          .includes(searchText) ||
        note.description
          .toLowerCase()
          .includes(searchText)
      );
    });
  }, [notes, search]);

  // Add

  const addNote = (note) => {
    setNotes((prev) => [
      {
        id: Date.now(),
        ...note,
      },
      ...prev,
    ]);
  };

  // Edit

  const editNote = (note) => {
    setEditingNote(note);

    setShowModal(true);
  };

  // Update

  const updateNote = (updatedNote) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === updatedNote.id
          ? updatedNote
          : note
      )
    );

    setEditingNote(null);
  };

  // Delete

  const deleteNote = (id) => {
    if (
      window.confirm(
        "Delete this note?"
      )
    ) {
      setNotes((prev) =>
        prev.filter(
          (note) => note.id !== id
        )
      );
    }
  };

  // Pin

  const togglePin = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
              ...note,
              pinned: !note.pinned,
            }
          : note
      )
    );
  };

  return (
    <Layout>

      <div className="space-y-6">

        <NotesToolbar
          search={search}
          setSearch={setSearch}
          onAdd={() => {
            setEditingNote(null);
            setShowModal(true);
          }}
        />

        <NotesGrid
          notes={filteredNotes}
          onEdit={editNote}
          onDelete={deleteNote}
          onPin={togglePin}
        />

      </div>

      <AddNoteModal
        open={showModal}
        onClose={() => {
          setShowModal(false);
          setEditingNote(null);
        }}
        onAdd={
          editingNote
            ? updateNote
            : addNote
        }
        note={editingNote}
      />

    </Layout>
  );
};

export default Notes;