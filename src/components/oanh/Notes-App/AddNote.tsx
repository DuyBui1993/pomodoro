import * as React from 'react';
import { RadioButton } from '@/components/oanh/Notes-App/RadioButton';

export const AddNote = ({ handleAddNote, status }) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [category, setCategory] = React.useState<'Office' | 'Personal'>('Personal');

  const addNote = () => {
    const newNote = {
      title: title,
      description: description,
      category: category,
    };
    if (title.trim() && description.trim()) {
      setTitle('');
      setDescription('');
      handleAddNote(newNote);
    }
  };

  return (
    <div className="flex flex-col border bg-[#f4dbff] p-6 text-black">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-2 rounded-lg border border-gray-300 p-2 italic text-black outline-none"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
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
        <button className="rounded-lg bg-fuchsia-400 px-4 py-4 text-white" onClick={addNote}>
          {status}
        </button>
      </div>
    </div>
  );
};
