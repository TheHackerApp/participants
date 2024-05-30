'use client';

import { PropsWithChildren, createContext, useContext } from 'react';

import { Step } from './Steps';

interface Context {
  steps: Step[];
  page: number;
}

const FormContext = createContext<Context>({
  steps: [],
  page: 0,
});

interface Props {
  value: Context;
}

export const FormContextProvider = ({ children, value }: PropsWithChildren<Props>) => (
  <FormContext.Provider value={value}>{children}</FormContext.Provider>
);

export const useFormContext = (): Context => useContext(FormContext);
