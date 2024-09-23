import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoTrashBinSharp } from 'react-icons/io5';
import { MdEditNote } from 'react-icons/md';
import * as React from 'react';

// @ts-ignore
export const NoteItem = ({ note, indexNote, handleNoteItem }) => {
  const [menuOpen, setMenuOpen] = React.useState<'OPEN' | 'CLOSE'>('CLOSE');
  const { title, description, category } = note;
  return (
    <div className="mx-6 my-4 flex items-center justify-between rounded-lg bg-neutral-800 p-4 text-left">
      <div className="">
        <div className="text-lg font-bold">{title}</div>
        <div>{description}</div>
        <div>{category}</div>
      </div>
      <div className="relative">
        <button
          onClick={() => setMenuOpen(menuOpen === 'CLOSE' ? 'OPEN' : 'CLOSE')}
          className="text-white"
        >
          <BsThreeDotsVertical fontSize={25} />
        </button>
        {menuOpen === 'OPEN' && (
          <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white text-left shadow-lg">
            <button
              onClick={() => {
                handleNoteItem('DELETE', indexNote);
              }}
              className="flex w-full gap-2 rounded-lg px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              <IoTrashBinSharp fontSize={20} /> Clear Note
            </button>
            <button
              onClick={() => {
                handleNoteItem('EDIT', indexNote);
                setMenuOpen('CLOSE');
              }}
              className="flex w-full gap-2 rounded-lg px-4 py-2 text-gray-800 hover:bg-gray-200"
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
