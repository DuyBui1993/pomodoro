import * as React from 'react';

const projects = [
  {
    title: <div>Hereme</div>,
    description: <div>Network management app</div>,
    details: (
      <div>
        That lets you create and share personalized cards while tracking detailed view statistics.
      </div>
    ),
  },
  {
    title: <div>OneLLM</div>,
    description: <div>A unified interface for LLMs</div>,
    details: <div>Pay for one and get all the LLMs in one place.</div>,
  },
  {
    title: <div>MicroBites</div>,
    description: <div>Get daily summaries of your WhatsApp groups</div>,
    details: <div>Helping you stay updated without sifting through hundreds of messages.</div>,
  },
  {
    title: <div>AlertCam</div>,
    description: <div>Transforms your device camera into a security system.</div>,
    details: (
      <div>
        Using OpenCV for facial recognition, instantly alerting the admin when an unknown face is
        detected.
      </div>
    ),
  },
];
export default function ContentProject() {
  return (
    <div className="mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="rounded-lg border bg-white p-7 shadow-lg duration-300">
            <div className="mb-4">
              <div className="text-xl font-bold text-gray-800">{project.title}</div>
              <div className="mt-1 text-sm text-gray-600">{project.description}</div>
            </div>
            <div>
              <div className="text-sm text-gray-700">{project.details}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
