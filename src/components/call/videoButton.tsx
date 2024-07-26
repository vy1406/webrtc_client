import React, { useState } from "react";
import { IconButton, Typography, Box } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import { useCallContext } from "@context/callContext";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import styled from "@emotion/styled";
import DeviceDialogSelect from "./deviceDialogSelect";

const VideoButton = ({ smallFeedEl }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const { callData, updateCall } = useCallContext();

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


    const handleOnSelect = (value: string) => {
        updateCall({ selectedVideoDeviceId: value });
    }
    return (
        <ButtonWrapper>
            <IconWrap>
                <IconButton color="primary" size="small" onClick={() => setIsOpen(true)}>
                    <ExpandLessIcon />
                </IconButton>
                {isOpen &&
                    <DeviceDialogSelect
                        isOpen={isOpen}
                        selected={callData?.selectedVideoDeviceId || ""}
                        label="Video"
                        list={callData?.videoDevices || []}
                        onSelect={handleOnSelect}
                        onClose={() => setIsOpen(false)}
                    />
                }
            </IconWrap>
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
  position: relative;
`;

const ButtonText = styled(Typography)`
  font-size: 12px;
  color: white;
  margin-top: 4px;
`;

const IconWrap = styled.div`
    position: absolute;
    top: -15px;
    right: -12px;
`