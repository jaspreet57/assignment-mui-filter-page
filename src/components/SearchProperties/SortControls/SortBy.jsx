import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import React, { useState } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 200,
        },
    },
    anchorOrigin: { vertical: 'bottom', horizontal: 'left' }
};

const options = [
    'Price : Low - High',
    'Price : High - Low',
    'Relevance',
];

const SortBy = () => {
    const [value, setValue] = useState('none');

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setValue(
            value
        );
    };

    const handleDelete = () => {
        setValue('none');
    };

    return (
        <Stack direction="column" alignItems="flex-end">
            <FormControl sx={{ m: 1, width: 100 }}>
                <Select
                    disableUnderline
                    IconComponent={KeyboardArrowDownIcon}
                    value={value}
                    onChange={handleChange}
                    input={<Input />}
                    renderValue={(selected) => (
                        <Box display="flex">
                            <Typography color="GrayText">Sort By</Typography>
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {options.map((option) => (
                        <MenuItem key={option} value={option}>
                            <ListItemText primary={option} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {value != 'none' ? (
                <Chip
                    label={`Sorting by ${value}`}
                    size="small"
                    onDelete={handleDelete}
                />
            ): (
                <Chip
                    label={`No Sorting Selected`}
                    size="small"
                />
            )}
            
        </Stack>


    );
}

export default SortBy;
