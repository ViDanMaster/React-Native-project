import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getFeladatCount } from '../database/Db';
import { Feladat } from '../database/Feladat';

type ValaszokContextType = {
  answeredQuestions: { index: number; selectedAnswerIndex: number }[];
  setAnsweredQuestions: React.Dispatch<React.SetStateAction<{ index: number; selectedAnswerIndex: number }[]>>;
  ellenorizve: boolean[];
  setEllenorizve: React.Dispatch<React.SetStateAction<boolean[]>>;
  feladatok: Feladat[],
  setFeladatok: React.Dispatch<React.SetStateAction<Feladat[]>>;
};

const ValaszokContext = createContext<ValaszokContextType>({
  answeredQuestions: [],
  setAnsweredQuestions: () => {},
  ellenorizve: [],
  setEllenorizve: () => {},
  feladatok: [],
  setFeladatok: () => {},
});

export function useValaszokContext() {
  return useContext(ValaszokContext);
}

type ValaszokContextProviderProps = {
  children: React.ReactNode;
};

export const ValaszokContextProvider: React.FC<ValaszokContextProviderProps> = ({ children }) => {
  const [feladatok, setFeladatok] = useState<Feladat[]>([]);
  const [answeredQuestions, setAnsweredQuestions] = useState<{ index: number; selectedAnswerIndex: number }[]>([]);
  const [ellenorizve, setEllenorizve] = useState<boolean[]>([]);

  const contextValue = useMemo(() => ({
    answeredQuestions,
    setAnsweredQuestions,
    ellenorizve,
    setEllenorizve,
    feladatok,
    setFeladatok,
  }), [answeredQuestions, ellenorizve, feladatok]);

  return (
    <ValaszokContext.Provider value={contextValue}>
      {children}
    </ValaszokContext.Provider>
  );
};
