import { BsThreeDotsVertical } from 'react-icons/bs';
import React from 'react';
import { IoTrashBinSharp } from 'react-icons/io5';
import { MdEditNote } from 'react-icons/md';

export const NoteItem = ({ note, handleNote }) => {
  const { id, title, description, selected } = note;
  type NoteType = 'EDIT' | 'DELETE';
  const [form, setForm] = React.useState(false);

  const handleAction = (action: NoteType) => {
    handleNote(note, action);
  };
  return (
    <div
      className={`flex items-center justify-between space-x-2 rounded-2xl bg-neutral-800 p-2 text-white`}
    >
      <div>
        <div className={`font-bold`}>{title}</div>
        <div>{description}</div>
        <div>{selected}</div>
      </div>
      <div>
        <button onClick={() => setForm(true)} className="text-white">
          <BsThreeDotsVertical fontSize={25} />
        </button>
        {form && (
          <div className="absolute right-0 z-10 mt-2 w-48 rounded-lg bg-white shadow-lg">
            <button
              onClick={() => {
                handleAction('DELETE');
                setForm(false);
              }}
              className="flex w-full gap-2 px-4 py-2 text-left text-gray-800 hover:bg-gray-200"
            >
              <IoTrashBinSharp fontSize={20} /> Clear all tasks
            </button>
            <button
              onClick={() => {
                handleAction('EDIT');
                setForm(false);
              }}
              className="flex w-full gap-2 px-4 py-2 text-left text-gray-800 hover:bg-gray-200"
            >
              <MdEditNote fontSize={20} />
              Edit Notes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
