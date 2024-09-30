import * as React from 'react';

export const Projects = () => {
  return (
    <div className="justify-center space-x-4 text-black">
      <div className="mx-auto flex flex-wrap justify-between">
        <div className="w-[250px] space-y-3 rounded-[15px] border border-gray-400 p-3 shadow-2xl">
          <b>Timesheet Project</b>
          <p>Attendance management website</p>
          <p className="text-[15px] font-thin">
            Using Spring Boot to build functionalities following the CRUD model and designing
            RESTful APIs.
          </p>
        </div>
        <div className="w-[250px] space-y-3 rounded-[15px] border border-gray-400 p-3 shadow-2xl">
          <b>FPT Software</b>
          <p>Software deployment staff</p>
          <p className="text-[15px] font-thin">
            Provided software deployment assistance and user training for Econsumersector
            application (developed by FPT Software) during rollout for MASAN Group. Reported bugs
            and technical issues to development team.
          </p>
        </div>
        <div className="w-[250px] space-y-3 rounded-[15px] border border-gray-400 p-3 shadow-2xl">
          <b>Saigon University</b>
          <p>Capstone Projects</p>
          <p className="text-[15px] font-thin">
            Modeled website structure and components using Unified Modeling Language (UML) diagrams.
          </p>
        </div>
        <div className="mt-6 w-[250px] space-y-3 rounded-[15px] border border-gray-400 p-3 shadow-2xl">
          <b>Avengers</b>
          <p>Save the world</p>
          <p className="text-[15px] font-thin">
            Possesses lucky super powers but is very stupid. The Avengers feel they can't protect
            Earth without me.
          </p>
        </div>
      </div>
    </div>
  );
};
