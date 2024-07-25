import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

interface HangupButtonProps {
  largeFeedEl: React.RefObject<HTMLVideoElement>;
  smallFeedEl: React.RefObject<HTMLVideoElement>;
}

const HangupButton: React.FC<HangupButtonProps> = ({ largeFeedEl, smallFeedEl }) => {
  return (
    <StyledButton variant="contained" color="secondary">
      Hang Up
    </StyledButton>
  );
};

export default HangupButton;

const StyledButton = styled(Button)`
  background-color: red;
  color: white;
  &:hover {
    background-color: darkred;
  }
`;
