import * as React from 'react';
import { RadioButton } from '@/components/oanh/Notes-App/RadioButton';

export const UpdateNote = ({ note, handleEditNote, status }) => {
  const { id, title, description } = note;
  const [titleNote, setTitleNote] = React.useState(title);
  const [descriptionNote, setDescriptionNote] = React.useState(description);
  const [category, setCategory] = React.useState<'Office' | 'Personal'>('Personal');

  const submitEdit = () => {
    const noteCurrent = {
      id: id,
      title: titleNote,
      description: descriptionNote,
      category: category,
    };
    if (titleNote.trim() && descriptionNote.trim()) {
      handleEditNote(noteCurrent);
      setTitleNote('');
      setDescriptionNote('');
    }
  };

  return (
    <div className="flex flex-col border bg-[#f4dbff] p-6 text-black">
      <input
        type="text"
        placeholder="Title"
        value={titleNote}
        onChange={(e) => setTitleNote(e.target.value)}
        className="mb-2 rounded-lg border border-gray-300 p-2 italic text-black outline-none"
      />
      <textarea
        placeholder="Description"
        value={descriptionNote}
        onChange={(e) => setDescriptionNote(e.target.value)}
        className="mb-2 rounded-lg border border-gray-300 p-2 italic text-black outline-none"
        rows="2"
      />
      <div className="flex gap-2 space-x-4">
        <RadioButton
          label="Personal"
          Checked={category === 'Personal'}
          onChange={() => setCategory('Personal')}
        />
        <RadioButton
          label="Office"
          Checked={category === 'Office'}
          onChange={() => setCategory('Office')}
        />
      </div>
      <div className="flex justify-end">
        <button className="rounded-lg bg-fuchsia-400 px-4 py-4 text-white" onClick={submitEdit}>
          {status}
        </button>
      </div>
    </div>
  );
};
