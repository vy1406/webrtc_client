import React from 'react';
import { CallContextProvider } from '@context/callContext';
import JoinVideoPage from './page';

const JoinVideoMediaSoup = () => {
  return (
    <CallContextProvider>
      <JoinVideoPage />
    </CallContextProvider>
  )
};

export default JoinVideoMediaSoup;
