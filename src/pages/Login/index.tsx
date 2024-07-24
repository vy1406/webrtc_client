import React, { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';
import { users } from 'data/users';
import { useUserContext } from '@context/userContext';

const Login: React.FC = () => {
  const { setUser } = useUserContext();
  const [selectedUserId, setSelectedUserId] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedUserId(event.target.value as string);
  };

  const handleLogin = () => {
    const selectedUser = users.find(user => user.id === selectedUserId);
    if (selectedUser) {
      setUser(selectedUser);
    }
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="user-select-label">Select User</InputLabel>
        <Select
          labelId="user-select-label"
          value={selectedUserId}
          // onChange={handleChange}
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
    </div>
  );
};

export default Login;
