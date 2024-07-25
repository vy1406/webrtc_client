import React from 'react';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

const Separator = () => {
  const theme = useTheme();
  return <StyledSeparator theme={theme} />;
};

export default Separator;

const StyledSeparator = styled('div')(({ theme }) => ({
  width: '100%',
  height: '4px',
  backgroundColor: theme.palette.primary.main,
  marginTop: '-4px'
}));
