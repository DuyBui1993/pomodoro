import Image from 'next/image';
import * as React from 'react';

export const HomeContent = () => {
  return (
    <div className="p-8">
      <section className="mb-12">
        <h1 className="mb-2 text-4xl font-bold">Hey there 👋</h1>
        <h2 className="mb-4 text-5xl font-bold">I'm LUAN NGUYEN</h2>
        <h3 className="mb-4 text-2xl font-semibold"> Software Developer</h3>
        <p className="mb-6 text-gray-600">
          I am a software developer based in India. I love to build things that make a difference. I
          am passionate about app development and well versed with Flutter. Worked with more than 10
          clients on building various apps. If you want to build robust and scalable apps, I am your
          guy. Let's connect and build something amazing.
        </p>
        <button className="rounded bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300">
          Let's connect!
        </button>
      </section>

      <section>
        <h2 className="mb-6 text-3xl font-bold">Recent projects &lt;/&gt;</h2>
        <div className="rounded-lg bg-white p-6 shadow-md">
          <div className="flex items-start space-x-6">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Firstock Trading App"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <div>
              <div className="mb-2 flex items-center space-x-2">
                <h3 className="text-2xl font-bold">Firstock Trading App</h3>
                <span className="rounded bg-black px-2 py-1 text-xs text-white">CURRENT</span>
              </div>
              <p className="mb-4 text-gray-600">
                Developing a stock market app for a client using Flutter. The app has various
                features like stock trading, portfolio management, and more. The app is currently
                being developed and I'm currently working on implementing home screen widgets.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Flutter', 'Fintech', 'Client', 'Flutter Bloc', 'Websockets', 'Trading'].map(
                  (tag) => (
                    <span key={tag} className="rounded bg-gray-200 px-2 py-1 text-sm text-gray-800">
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
