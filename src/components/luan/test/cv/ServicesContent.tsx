import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  image: string;
  label: {
    text: string;
    color: string;
  };
}

const services: Service[] = [
  {
    title: 'Website Development',
    description:
      'Develop landing pages, blogs and more using Astro framework for your next project.',
    image: '/placeholder.svg?height=400&width=600',
    label: {
      text: 'NEW',
      color: 'bg-black',
    },
  },
  {
    title: 'App Development',
    description:
      'Develop mobile apps for both Android and iOS using Flutter. Look no further for your next app project.',
    image: '/placeholder.svg?height=400&width=600',
    label: {
      text: 'TRENDING',
      color: 'bg-blue-600',
    },
  },
];

export const ServicesContent = () => {
  return (
    <section className="px-4 py-12 md:px-6 lg:px-8">
      <h2 className="mb-8 text-3xl font-bold">Services</h2>
      <div className="space-y-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-6 border-b border-gray-200 pb-8 last:border-b-0 md:flex-row"
          >
            <div className="relative aspect-[3/2] w-full md:w-1/3">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="w-full md:w-2/3">
              <div className="mb-2 flex items-center gap-2">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <span
                  className={`rounded px-2 py-1 text-xs font-bold text-white ${service.label.color}`}
                >
                  {service.label.text}
                </span>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
