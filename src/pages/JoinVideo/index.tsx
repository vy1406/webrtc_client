import React from 'react';
import { CallContextProvider } from '@context/callContext';
import JoinVideoPage from './page';

const JoinVideo = () => {
  return (
    <CallContextProvider>
      <JoinVideoPage />
    </CallContextProvider>
  )
};

export default JoinVideo;
