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

interface DeviceDialogSelectProps {
    isOpen: boolean;
    label: string;
    list: { value: string; label: string }[];
    onSelect: (value: string) => void;
    onClose: () => void;
}

export default function DeviceDialogSelect({ isOpen, label, list, onSelect, onClose }: DeviceDialogSelectProps) {
    const [open, setOpen] = useState(isOpen);
    const [value, setValue] = useState<string>('');

    useEffect(() => {
        setOpen(isOpen)
    }, [isOpen]);

    const handleChange = (event: SelectChangeEvent<typeof value>) => {
        setValue(event.target.value);
        onSelect(event.target.value);
        onClose()
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
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
                            <Select
                                labelId={`${label}-select-label`}
                                id={`${label}-dialog-select`}
                                value={value}
                                onChange={handleChange}
                                input={<OutlinedInput label={label} />}
                            >
                                {list.map((item: any) => (
                                    <MenuItem key={item.value} value={item.value}>
                                        {item.label}
                                    </MenuItem>
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
