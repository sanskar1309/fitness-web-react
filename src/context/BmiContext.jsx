
import React, { createContext, useState } from 'react';

export const BmiContext = createContext();

export const BmiProvider = ({ children }) => {
  const [bmi, setBmi] = useState(null);

  return (
    <BmiContext.Provider value={{ bmi, setBmi }}>
      {children}
    </BmiContext.Provider>
  );
};
