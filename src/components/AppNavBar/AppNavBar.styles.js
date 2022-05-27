import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/OutlinedInput';

export const Search = styled('div')(() => ({
  position: 'relative',
  marginLeft: '20px',
  width: '450px',
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
  right: 0,
  marginRight: '6px'
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '&.MuiInputBase-root': {
    borderRadius: '999px',
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 2),
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));