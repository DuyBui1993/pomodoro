'use client';
import { IoIosSearch } from 'react-icons/io';
import * as React from 'react';
import { PiPlusBold } from 'react-icons/pi';
import { UpdateNote } from '@/components/luan/test/note/UpdateNote';
import { NoteItem } from '@/components/luan/test/note/NoteItem';
import { AddNote } from '@/components/luan/test/note/AddNote';
import { number } from 'prop-types';

const tabNote = [
  {
    id: 1,
    tabName: 'All',
  },
  {
    id: 2,
    tabName: 'Personal',
  },
  {
    id: 3,
    tabName: 'Office',
  },
];

export const NoteUI = () => {
  const [showForm, setShowForm] = React.useState<'ADD' | 'EDIT' | 'CLOSE'>('CLOSE');
  type NoteType = 'ADD' | 'EDIT' | 'DELETE';
  const [note, setNote] = React.useState<Note[]>(() => {
    const savedNotes = localStorage.getItem('note');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [currentNote, setCurrentNote] = React.useState<Note | null>(null);

  const [indexTab, setIndexTab] = React.useState(0);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    localStorage.setItem('note', JSON.stringify(note));
  }, [note]);

  const actionNote = (noteItem: Note, type: NoteType) => {
    switch (type) {
      case 'ADD':
        setNote((prevState) => [...prevState, noteItem]);
        setShowForm('CLOSE');
        break;
      case 'EDIT':
        setShowForm('EDIT');
        setCurrentNote(noteItem);
        break;
      case 'DELETE':
        setNote((prevState) => prevState.filter((note) => note.id !== noteItem.id));
        break;
      default:
        console.error(' No handle case type: ', type);
        break;
    }
  };

  const handleEditNote = (currentNote: Note) => {
    setNote((prevState) =>
      prevState.map((value, index) => (index === currentNote.id ? currentNote : value)),
    );
    setCurrentNote(null);
    setShowForm('CLOSE');
  };

  const filteredNotes = note.filter((note) => {
    const matchesSearch = note.title.toLowerCase().includes(search.toLowerCase());
    const matchesTab = indexTab === 0 || note.selected === tabNote[indexTab].tabName;
    return matchesSearch && matchesTab;
  });

  return (
    <div className={`mx-auto flex h-[862px] w-[1044px] items-center justify-center bg-[#DFB8DD]`}>
      <div className={`relative mx-auto h-[654px] w-[815px] bg-black`}>
        <div className={`mx-4`}>
          <div className="py-8 text-center text-xl text-white">Notes App</div>
          <div className="relative">
            <input
              placeholder="Search notes ?"
              type="text"
              className="w-full rounded-3xl py-3 pl-10 text-sm italic text-black outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 transform text-lg text-gray-600">
              <IoIosSearch />
            </span>
          </div>

          <div className="my-6 flex gap-4">
            {tabNote.map((item, index) => (
              <button
                onClick={() => setIndexTab(index)}
                key={index}
                className={`rounded-3xl px-6 py-1.5 ${indexTab === index ? 'bg-white text-black' : 'text-white'}`} // Correct conditional syntax
              >
                {item.tabName}
              </button>
            ))}
          </div>
          <div className={`my-4`}>
            note content.
            <div className={`space-y-4`}>
              {filteredNotes.map((value, index) => (
                <NoteItem key={index} note={value} handleNote={actionNote} />
              ))}
            </div>
          </div>

          {showForm === 'ADD' && <AddNote handleNote={actionNote} size={note.length} type="ADD" />}
          {showForm === 'EDIT' && currentNote && (
            <UpdateNote handleEditNote={handleEditNote} note={currentNote} />
          )}

          <button
            onClick={() => {
              setShowForm('ADD');
            }}
            className="absolute bottom-4 right-6 rounded-full bg-[#93478F] px-4 py-4 text-white"
          >
            <PiPlusBold fontSize={25} />
          </button>
        </div>
      </div>
    </div>
  );
};
