import { NoteApp } from '@/components/oanh/Notes-App/NoteApp';

const HomePage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="mx-auto p-4">
        <NoteApp />
      </div>
    </div>
  );
};
export default HomePage;
