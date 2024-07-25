import React from 'react';
// import HangupButton from './HangupButton';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleIcon from '@mui/icons-material/People';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AudioButton from './audioButton';
import VideoButton from './videoButton';
import HangupButton from './hangupButton';

interface ActionButtonsProps {
    openCloseChat?: () => void;
    smallFeedEl: React.RefObject<HTMLVideoElement>;
    largeFeedEl: React.RefObject<HTMLVideoElement>;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ openCloseChat, smallFeedEl, largeFeedEl }) => {
    return (
        <MenuButtonsContainer>
            <LeftContainer>
                <AudioButton smallFeedEl={smallFeedEl} />
                <VideoButton smallFeedEl={smallFeedEl} />
            </LeftContainer>

            <CenterContainer>
                <ButtonWrapper>
                    <ParticipantButton>
                        <PeopleIcon color="primary"/>
                        <ButtonText>Participants</ButtonText>
                    </ParticipantButton>
                </ButtonWrapper>
                <ButtonNoCaret onClick={() => console.log('Chat clicked')}>
                    <ChatIcon color="primary"/>
                    <ButtonText>Chat</ButtonText>
                </ButtonNoCaret>
                <ButtonNoCaret>
                    <DesktopWindowsIcon color="primary"/>
                    <ButtonText>Share Screen</ButtonText>
                </ButtonNoCaret>
            </CenterContainer>

            <RightContainer>
                <HangupButton smallFeedEl={smallFeedEl} largeFeedEl={largeFeedEl} />
            </RightContainer>
        </MenuButtonsContainer>
    );
};

export default ActionButtons;

const MenuButtonsContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: rgba(0, 0, 0, 0.8);
`;

const LeftContainer = styled(Box)`
  display: flex;
  gap: 16px;
`;

const CenterContainer = styled(Box)`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  gap: 16px;
`;

const RightContainer = styled(Box)`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

const ButtonWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonNoCaret = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ParticipantButton = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ButtonText = styled(Typography)`
  font-size: 12px;
  color: white;
  margin-top: 4px;
`;
