import * as React from 'react';

export const AddNote = ({ handleNote, type, size }) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const [selected, setSelected] = React.useState<'Office' | 'Personal'>('Personal');

  const addNote = () => {
    const newNote = {
      id: size,
      title: title,
      description: description,
      selected: selected,
    };
    if (title.trim() && description.trim()) {
      setTitle('');
      setDescription('');
      handleNote(newNote, type);
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
          value={title}
          required
          className={`w-full rounded-3xl py-3 pl-10 text-sm italic text-black outline-none`}
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          className={`w-full rounded-3xl py-3 pl-10 text-sm italic text-black outline-none`}
          required
        />
        <div className="flex gap-2 space-x-4">
          <label className="flex cursor-pointer items-center space-x-2">
            <input
              type="radio"
              name="category"
              value="Personal"
              checked={selected === 'Personal'}
              onChange={() => setSelected('Personal')}
              className="form-checkbox h-5 w-5 border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span
              className={`text-lg ${selected === 'Personal' ? 'font-bold text-blue-600' : 'text-gray-600'}`}
            >
              Personal
            </span>
          </label>

          <label className="flex cursor-pointer items-center space-x-2">
            <input
              type="radio"
              name="category"
              value="Office"
              checked={selected === 'Office'}
              onChange={() => setSelected('Office')}
              className="form-checkbox h-5 w-5 border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span
              className={`text-lg ${selected === 'Office' ? 'font-bold text-blue-600' : 'text-gray-600'}`}
            >
              Office
            </span>
          </label>
        </div>
        <button className={`absolute right-6 rounded-2xl bg-red-500 p-4`} onClick={addNote}>
          Submit
        </button>
      </div>
    </div>
  );
};
