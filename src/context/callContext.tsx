import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Call } from '@interfaces/call';

const INIT_STATE: Call = {
    current: 'idle',
    video: 'off',
    audio: 'off',
    audioDevice: 'default',
    videoDevice: 'default',
    shareScreen: false,
    haveMedia: false,
    haveCreatedOffer: false,
  };

interface CallContextProps {
  call: Call | null;
  setCall: React.Dispatch<React.SetStateAction<Call | null>>;
}

const CallContext = createContext<CallContextProps | undefined>(undefined);

interface CallContextProviderProps {
  children: ReactNode;
}

const CallContextProvider: React.FC<CallContextProviderProps> = ({ children }) => {
  const [call, setCall] = useState<Call | null>(INIT_STATE);

  return (
    <CallContext.Provider value={{ call, setCall }}>
      {children}
    </CallContext.Provider>
  );
};

const useCallContext = (): CallContextProps => {
  const context = useContext(CallContext);
  if (context === undefined) {
    throw new Error('useCallContext must be used within a CallContextProvider');
  }
  return context;
};

export { CallContextProvider, useCallContext };
