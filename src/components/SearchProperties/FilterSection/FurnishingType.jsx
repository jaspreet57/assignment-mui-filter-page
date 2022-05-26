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

const ITEM_HEIGHT = 60;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 380,
        },
    },
    anchorOrigin: { vertical: 'bottom', horizontal: 'right' }
};

const options = [
    {
        title: 'Semi-furnished',
        value: 'semi-furnished',
        subtitle: 'like you will get light, fan, gyeser along with all wooden work done inside the house'
    },
    {
        title: 'Fully furnished',
        value: 'fully-furnished',
        subtitle: 'like you will get light, fan, gyeser along with all wooden work done inside the house',
    },
    {
        title: 'Un-furnished',
        value: 'un-furnished',
        subtitle: 'like you will get light, fan, gyeser along with all wooden work done inside the house',
    }
];

const FurnishingType = ({ updateFilter }) => {
    const [value, setValue] = useState(['empty']);

    useEffect(() => {
        const newValue = value.filter(item => item !== 'empty');
        if (newValue.length) {
            updateFilter('furnishingType', newValue);
        } else {
            updateFilter('furnishingType', null);
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
        <FormControl sx={{ m: 1, width: 180 }}>
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
                        <Typography color="GrayText">Furnishing Type</Typography>
                    </Box>
                )}
                MenuProps={MenuProps}
            >
                {options.map((option) => (
                    <MenuItem key={option.title} value={option.value}>
                        <Checkbox checked={value.indexOf(option.value) > -1} />
                        <ListItemText primary={option.title} secondary={option.subtitle} sx={{ '& p': { wordBreak: 'break-word', whiteSpace: 'normal' }}} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default FurnishingType;
