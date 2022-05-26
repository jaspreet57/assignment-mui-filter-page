import { useEffect, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RecordIcon from '@mui/icons-material/FiberManualRecord';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 100,
        },
    },
};

const options = [
    '1 bhk',
    '2 bhk',
    '3 bhk',
    '5 bhk',
    '5+ bhk',
    'RK',
];

const BhkType = ({ updateFilter }) => {
    const [value, setValue] = useState(['empty']);

    useEffect(() => {
        const newValue = value.filter(item => item !== 'empty');
        if (newValue.length) {
            updateFilter('bhkType', newValue);
        } else {
            updateFilter('bhkType', null);
        }
    }, [value, updateFilter]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setValue(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <FormControl sx={{ m: 1, width: 135, marginLeft: 0 }}>
            <Select
                disableUnderline
                multiple
                IconComponent={KeyboardArrowDownIcon}
                value={value}
                onChange={handleChange}
                input={<OutlinedInput sx={{ borderRadius: '999px', borderColor: 'GrayText' }} />}
                renderValue={(selected) => (
                    <Box display="flex">
                        {selected.length > 1 && <RecordIcon color='error' />}
                        <Typography color="GrayText">Bhk Type</Typography>
                    </Box>
                )}
                MenuProps={MenuProps}
            >
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        <Checkbox checked={value.indexOf(option) > -1} />
                        <ListItemText primary={option} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default BhkType;
