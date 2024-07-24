import React from 'react';
import { Typography } from '@mui/material';
import { useUserContext } from '@context/userContext';
import styled from '@emotion/styled';

const UserProfile: React.FC = () => {
  const { user } = useUserContext();

  if (!user) {
    return null;
  }

  return (
    <ProfileContainer>
      <Typography variant="h6" style={{ marginLeft: 8 }}>
        {user.fullName}
      </Typography>
    </ProfileContainer>
  );
};

export default UserProfile;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`;
