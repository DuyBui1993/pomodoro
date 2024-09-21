import * as React from 'react';

export const UpdateNote = ({ handleEditNote, note }) => {
  const { id, title, description } = note;

  const [titleNote, setTitle] = React.useState(title);
  const [descriptionNote, setDescription] = React.useState(description);

  const updateNote = () => {
    const noteCurrent = {
      id: id,
      title: titleNote,
      description: descriptionNote,
    };
    if (titleNote.trim() && descriptionNote.trim()) {
      handleEditNote(noteCurrent);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className={`rounded-2xl bg-white text-black`}>
      <div className="w-full gap-2">
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={titleNote}
          required
          className={`w-full rounded-3xl py-3 pl-10 text-sm italic text-black outline-none`}
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={descriptionNote}
          className={`w-full rounded-3xl py-3 pl-10 text-sm italic text-black outline-none`}
          required
        />
        <button className={`absolute right-6 rounded-2xl bg-red-500 p-4`} onClick={updateNote}>
          Submit
        </button>
      </div>
    </div>
  );
};
