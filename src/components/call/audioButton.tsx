import React, { useState } from "react";
import { IconButton, Typography, Box, Icon, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
// import { styled } from '@mui/system';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import styled from "@emotion/styled";
import DeviceDialogSelect from "./deviceDialogSelect";


const AudioButton = ({ smallFeedEl }: any) => {

    const [isOpen, setIsOpen] = useState(false);
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

    const handleOnSelect = (value: string) => {
        console.log(value);
    }

    return (
        <ButtonWrapper>
            <IconWrap>
                <IconButton color="primary" size="small" onClick={() => setIsOpen(true)}>
                    <ExpandLessIcon />
                </IconButton>
                <DeviceDialogSelect
                    isOpen={isOpen}
                    label="Audio"
                    list={[]}
                    onSelect={handleOnSelect}
                    onClose={() => setIsOpen(false)}
                />
            </IconWrap>
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