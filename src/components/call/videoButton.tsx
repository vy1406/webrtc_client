import React from "react";
import { IconButton, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';

const VideoButton = ({ smallFeedEl }: any) => {
    // Dummy video status for UI demonstration
    const videoStatus = "off"; // Replace with "enabled" or "disabled" for different states

    let videoText;
    let VideoIconComponent;
    if (videoStatus === "off") {
        videoText = "Start Video";
        VideoIconComponent = VideocamOffIcon;
    } else if (videoStatus === "enabled") {
        videoText = "Stop Video";
        VideoIconComponent = VideocamIcon;
    } else {
        videoText = "Start Video";
        VideoIconComponent = VideocamOffIcon;
    }

    return (
        <ButtonWrapper>
            <IconButton color="primary">
                <VideoIconComponent />
            </IconButton>
            <ButtonText>{videoText}</ButtonText>
        </ButtonWrapper>
    );
};

export default VideoButton;

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
