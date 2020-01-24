import {createContext, useContext} from 'react';

const ShrinkContext = createContext(true);

export const ShrinkContextProvider = ShrinkContext.Provider;

export const useIsShrunk = () => useContext(ShrinkContext);
