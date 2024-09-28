import * as React from 'react';
import blogImage from './signature.jpg';

export const BlogsPage = () => {
  return (
    <a href="#" className="flex items-center justify-center p-4 hover:bg-gray-100">
      <div className="flex">
        <div className="grid pr-16 font-serif text-gray-400">
          <b className="text-xl text-black">
            Elasticsearch - Introduction, Basic, Concept, Features and implementations
          </b>
          Companies with a large number of product and a huge clients base are facing issues like a
          long time in information retrieval from the database which make a site looks slow and in
          tur...
        </div>
      </div>
      <img className="h-[120px] w-[200px]" src={blogImage.src} alt="" />
    </a>
  );
};
