import React, { useState } from "react";
import { IconButton, Typography, Box, Icon, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
// import { styled } from '@mui/system';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import styled from "@emotion/styled";
import DeviceDialogSelect from "./deviceDialogSelect";
import { useCallContext } from "@context/callContext";


const AudioButton = ({ smallFeedEl }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const { callData, updateCall } = useCallContext();

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
        updateCall({ selectedAudioInputDeviceId: value });
    }

    const handleToggleMic = () => {
        if ( callData === null ) return;

        if (callData.audio === 'off') {
            updateCall({ audio: 'enabled' });
        } else {
            updateCall({ audio: 'off' });
        }
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
                        selected={callData?.selectedAudioInputDeviceId || ""}
                        label="Audio"
                        list={callData?.audioInputDevices || []}
                        onSelect={handleOnSelect}
                        onClose={() => setIsOpen(false)}
                    />
                }
            </IconWrap>
            <IconButton color="primary" onClick={handleToggleMic}>
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