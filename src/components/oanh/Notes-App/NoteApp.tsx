'use client';
import * as React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { PiPlusBold } from 'react-icons/pi';
import { NoteItem } from '@/components/oanh/Notes-App/NoteItem';
import { AddNote } from '@/components/oanh/Notes-App/AddNote';
import { UpdateNote } from '@/components/oanh/Notes-App/UpdateNote';

const tabNote = [
  { id: 1, tabName: 'All' },
  { id: 2, tabName: 'Personal' },
  { id: 3, tabName: 'Office' },
];

export const NoteApp = () => {
  const [notes, setNotes] = React.useState<Note[]>(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [search, setSearch] = React.useState('');
  const [editIndex, setEditIndex] = React.useState<number | null>(null);
  const [isAddingNote, setIsAddingNote] = React.useState(false);
  const [statusButton, setStatusButton] = React.useState<'Add Note' | 'Edit Note'>('Add Note');
  const [indexTab, setIndexTab] = React.useState(0);

  React.useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote: Note) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setIsAddingNote(false);
  };

  const updateNote = (updatedNote: Note) => {
    setNotes((prevNotes) =>
      prevNotes.map((note, index) => (index === editIndex ? updatedNote : note)),
    );
    setEditIndex(null);
    setStatusButton('Add Note');
    setIsAddingNote(false);
  };

  const handleNoteItem = (type: string, index: number) => {
    if (type === 'EDIT') {
      setStatusButton('Edit Note');
      setIsAddingNote(true);
      setEditIndex(index);
    } else if (type === 'DELETE') {
      setNotes(notes.filter((_, id) => id !== index));
    }
  };

  const filteredNotes = notes.filter((note) => {
    const matchesSearch = note.title.toLowerCase().includes(search.toLowerCase());
    const matchesTab = indexTab === 0 || note.category === tabNote[indexTab].tabName;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="flex h-[862px] w-[1044px] items-center justify-center bg-[#DFB8DD]">
      <div className="relative h-[654px] w-[815px] bg-black text-center">
        <h1 className="mt-6 text-2xl text-white">Notes App</h1>
        <div className="relative my-2 space-y-1 p-6">
          <div className="relative">
            <input
              placeholder="Search notes ?"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-3xl p-6 py-3 pl-10 text-sm italic text-black outline-none"
            />
            <span className="absolute left-5 top-1/2 -translate-y-1/2 transform text-lg text-gray-600">
              <IoIosSearch />
            </span>
          </div>

          <div className="flex gap-4 py-3">
            {tabNote.map((item, index) => (
              <button
                onClick={() => setIndexTab(index)}
                key={index}
                className={`rounded-3xl px-6 py-1.5 ${indexTab === index ? 'bg-white text-black' : 'text-white'}`}
              >
                {item.tabName}
              </button>
            ))}
          </div>
        </div>

        {filteredNotes.map((note, index) => (
          <NoteItem key={index} note={note} indexNote={index} handleNoteItem={handleNoteItem} />
        ))}

        <div className="flex flex-col p-6">
          {isAddingNote &&
            (editIndex !== null ? (
              <UpdateNote
                handleEditNote={updateNote}
                status={statusButton}
                note={notes[editIndex]}
              />
            ) : (
              <AddNote handleAddNote={addNote} status={statusButton} />
            ))}
        </div>

        {!isAddingNote && (
          <button
            className="absolute bottom-4 right-6 rounded-full bg-[#93478F] px-4 py-4 text-white"
            onClick={() => setIsAddingNote(true)}
          >
            <PiPlusBold fontSize={20} />
          </button>
        )}
      </div>
    </div>
  );
};
