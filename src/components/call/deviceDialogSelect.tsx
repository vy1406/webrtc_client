import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styled from '@emotion/styled';

interface DeviceDialogSelectProps {
    isOpen: boolean;
    label: string;
    selected: string;
    list: MediaDeviceInfo[];
    onSelect: (deviceId: string) => void;
    onClose: () => void;
}

export default function DeviceDialogSelect({
    list,
    label,
    isOpen,
    selected = "",
    onClose,
    onSelect,
}: DeviceDialogSelectProps) {

    
    const [open, setOpen] = useState(isOpen);
    const [value, setValue] = useState<string>(selected);

    useEffect(() => {
        setOpen(isOpen)
    }, [isOpen]);

    const handleChange = (event: SelectChangeEvent<typeof value>) => {
        setValue(event.target.value);
        onSelect(event.target.value);
    };

    const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
            onClose()
        }
    };

    return (
        <div>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 250 }}>
                            <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
                            <Select
                                labelId={`${label}-select-label`}
                                id={`${label}-dialog-select`}
                                value={value}
                                onChange={handleChange}
                                input={<OutlinedInput label={label} />}
                            >
                                 {list.map((item: MediaDeviceInfo) => (
                                    <StyledMenuItem key={item.deviceId} value={item.deviceId}>
                                        {item.label}
                                    </StyledMenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const StyledMenuItem = styled(MenuItem)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
 
`;
