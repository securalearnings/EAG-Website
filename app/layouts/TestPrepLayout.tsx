import React from 'react';

const TestPrepLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div>
      {/* Layout content */}
      {children}
    </div>
  );
};

export default TestPrepLayout;
