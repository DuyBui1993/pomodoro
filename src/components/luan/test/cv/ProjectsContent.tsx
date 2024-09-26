import Image from 'next/image';

const projects: IProject[] = [
  {
    title: 'Firstock Trading App',
    status: 'CURRENT',
    description:
      "Developing a stock market app for a client using Flutter. The app has various features like stock trading, portfolio management, and more. The app is currently being developed and I'm currently working on implementing home screen widgets.",
    tags: ['Flutter', 'Fintech', 'Client', 'Flutter Bloc', 'Websockets', 'Trading'],
    imageSrc: '/placeholder.svg?height=300&width=200',
  },
  {
    title: 'Indy App',
    status: 'CURRENT',
    description:
      "Developing a Fintech app for a client in Flutter. The app has various features like UPI payments, Wallet, and more. The app is currently being developed and I'm currently working on implementing UPI feature.",
    tags: ['Flutter', 'Fintech', 'Client', 'Flutter Bloc'],
    imageSrc: '/placeholder.svg?height=300&width=200',
  },
  {
    title: 'Pragati ERP',
    status: 'MAINTENANCE',
    description: 'An ERP system currently in maintenance.',
    tags: [],
    imageSrc: '/placeholder.svg?height=100&width=200',
  },
];

const TabICon = ({ tag }: { tag: IProject }) => {
  return <span className={`rounded border-black p-1`}>{tag}</span>;
};

export const ProjectContent = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">My Portfolio</h1>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md md:flex-row"
          >
            <div className="md:w-1/3">
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={300}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <span
                  className={`rounded px-2 py-1 text-sm font-semibold ${
                    project.status === 'CURRENT'
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-500 text-white'
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="mb-4 text-gray-600">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="flex items-center border-2 border-black px-3 py-1 text-sm font-semibold"
                  >
                    <TabICon tag={tag} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
