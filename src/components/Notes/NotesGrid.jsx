import NoteCard from "./NoteCard";

const NotesGrid = ({
  notes = [],
  onEdit,
  onDelete,
  onPin,
}) => {
  if (!notes.length) {
    return (
      <div className="flex h-96 items-center justify-center rounded-3xl bg-white">

        <div className="text-center">

          <h2 className="text-2xl font-bold text-gray-700">
            No Notes Found
          </h2>

          <p className="mt-2 text-gray-400">
            Try another search or add a new note.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
          onPin={onPin}
        />
      ))}

    </div>
  );
};

export default NotesGrid;