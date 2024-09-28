import * as React from 'react';

export const AboutPage = () => {
  return (
    <div className="grid text-black">
      <div className="overview font-sans text-[19px]">
        With over 5 years of engineering experience, I've worn many hats: Backend (my forte),
        Frontend, DevOps, Product Management, and Leadership. I've worked with startups and have
        been part of founding teams.
      </div>
      <div className="experience mt-8 space-y-6">
        <b className="text-2xl">Experience</b>
        <ul className="list-disc space-y-4 pl-3">
          <li>
            <div className="grid">
              <p>
                <b className="cursor-pointer text-[18px]">TopHire.co </b>
                <span className="text-xs font-light">(Present)</span>
              </p>
            </div>
            Senior Software Engineer
            <p className="font-thin">
              - Owns full-stack development of several features, deploying and managing LLMs and
              servers.
            </p>
          </li>

          <li>
            <div className="grid">
              <b className="cursor-pointer text-[18px]">Credgenics</b>
            </div>
            Lead Backend Engineer
            <p className="mb-2 font-thin">
              - Owned and scaled Payments Product and lead the payments team.
            </p>
            Software Engineer
            <p className="font-thin">
              - Built and managed the payments product from scratch, setup the building blocks for
              the product.
            </p>
          </li>

          <li>
            <div className="grid">
              <b className="cursor-pointer text-[18px]">Credicxo</b>
            </div>
            Lead Backend Engineer
            <p className="mb-2 font-thin">
              - Owned and scaled several Products and lead the Backend team, owned Product roadmap.
            </p>
            Senior Software Engineer
            <p className="font-thin">
              - Built and managed the several products from scratch,wrote migration
              scripts,configured servers.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
