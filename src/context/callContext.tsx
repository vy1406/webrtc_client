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
    audioInputDevices: [],
    audioOutputDevices: [],
    videoDevices: [],
    selectedAudioInputDeviceId: 'default',
    selectedAudioOutputDeviceId: 'default',
    selectedVideoDeviceId: 'default',
  };

interface CallContextProps {
  callData: Call | null;
  setCall: React.Dispatch<React.SetStateAction<Call | null>>;
  updateCall: (partialCall: Partial<Call>) => void;
}

const CallContext = createContext<CallContextProps | undefined>(undefined);

interface CallContextProviderProps {
  children: ReactNode;
}

const CallContextProvider: React.FC<CallContextProviderProps> = ({ children }) => {
  const [callData, setCall] = useState<Call | null>(INIT_STATE);

  const updateCall = (partialCall: Partial<Call>) => {
    setCall(prevCallData => ({
      ...prevCallData,
      ...partialCall,
    } as Call));
  };

  return (
    <CallContext.Provider value={{ callData, setCall, updateCall }}>
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
