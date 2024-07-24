import React, { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel, Button, SelectChangeEvent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { users } from 'data/users';
import { useUserContext } from '@context/userContext';
import styled from '@emotion/styled';

const Login: React.FC = () => {
  const { setUser } = useUserContext();
  const [selectedUserId, setSelectedUserId] = useState<string>('');
  const navigate = useNavigate();

  const handleChange = (event: SelectChangeEvent<string>): void => {
    setSelectedUserId(event.target.value as string);
  };

  const handleLogin = () => {
    const selectedUser = users.find(user => user.id === selectedUserId);
    if (selectedUser) {
      setUser(selectedUser);
      navigate('/dashboard');
    }
  };

  return (
    <Container>
      <FormControl fullWidth variant="outlined"
          style={{ width: "100%", marginBottom: 32 }}>
        <InputLabel id="user-select-label">Select User</InputLabel>
        <Select
          labelId="user-select-label"
          value={selectedUserId}
          label={"Select User"}
          onChange={handleChange}
        >
          {users.map(user => (
            <MenuItem key={user.id} value={user.id}>
              {user.fullName} - {user.role}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
};

export default Login;


const Container = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 50% auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  margin-top: 30vh;
`
