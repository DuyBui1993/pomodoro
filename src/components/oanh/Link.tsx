import * as React from 'react';

export const Link = ({ href, children }) => {
  return (
    <a className="font-bold text-red-700" href={href}>
      {children}
    </a>
  );
};
