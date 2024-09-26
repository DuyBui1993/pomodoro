export const ContentResume = () => {
  return (
    <div className="mx-auto max-w-3xl bg-white p-8">
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Profile</h2>
        <p className="text-gray-700">
          I am a lifelong learner, constantly honing my skills by tackling personal and client
          projects, ensuring clean, efficient code that solves real-world problems. I am always
          eager to explore new technologies and expand my skill set.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Education</h2>
        <div className="relative border-l-2 border-gray-300 pl-8">
          <div className="mb-6">
            <div className="absolute -left-[9px] h-4 w-4 rounded-full bg-gray-300"></div>
            <h3 className="font-semibold"> Ho Chi Minh City College of Industry and Trade</h3>
            <p className="text-gray-600">Information Technology: 2020 - 2023</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Experience</h2>
        <div className="relative mb-6 space-y-2 border-l-2 border-gray-300 pl-8">
          <div className="flex">
            <div>
              <h3 className="font-semibold">Freelance Software Developer</h3>
              <p className="text-sm text-gray-600">From Apr 2023 to Present</p>
              <p className="mt-2 text-sm">
                Worked with more than 10 clients on different projects. Developed mobile apps using
                Flutter and web apps using Flutter Web. Worked with BAAS like Firebase, Supabase.
                Worked on the projects from start to end including design, development, testing, and
                deployment.(Projects worked are in the projects section)
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <h3 className="font-semibold">Software Engineer</h3>
              <p className="text-sm text-gray-600">
                From Dec 2022 to Apr 2023 at Realtime Innovations , Dublin, Ireland
              </p>
              <p className="mt-2 text-sm">
                Worked with more than 10 clients on different projects. Developed mobile apps using
                Flutter and web apps using Flutter Web. Worked with BAAS like Firebase, Supabase.
                Worked on the projects from start to end including design, development, testing, and
                deployment.(Projects worked are in the projects section)
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Achievements</h2>
        <ol className="list-disc space-y-2 pl-5">
          <li>Talk on building scalable applications using Flutter (12/2023)</li>
          <li>Talk on Flutter BLOC in IEEE Mangalore</li>
          <li>Flutter Development Mentorship Programme</li>
        </ol>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Skills</h2>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            'Flutter',
            'Firebase',
            'Git',
            'TypeScript',
            'Dart',
            'Supabase',
            'CI/CD',
            'Communication',
          ].map((skill, index) => (
            <li key={index} className="rounded-full bg-gray-100 px-3 py-1 text-center text-sm">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
