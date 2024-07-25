import React from "react";
import { IconButton, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';

const AudioButton = ({ smallFeedEl }: any) => {
    // Dummy mic status for UI demonstration
    const micStatus = "off"; // Replace with "enabled" or "disabled" for different states

    let micText;
    let MicIconComponent;
    if (micStatus === "off") {
        micText = "Join Audio";
        MicIconComponent = MicOffIcon;
    } else if (micStatus === "enabled") {
        micText = "Mute";
        MicIconComponent = MicIcon;
    } else {
        micText = "Unmute";
        MicIconComponent = MicOffIcon;
    }

    return (
        <ButtonWrapper>
            <IconButton color="primary">
                <MicIconComponent />
            </IconButton>
            <ButtonText>{micText}</ButtonText>
        </ButtonWrapper>
    );
};

export default AudioButton;

const ButtonWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonText = styled(Typography)`
  font-size: 12px;
  color: white;
  margin-top: 4px;
`;
