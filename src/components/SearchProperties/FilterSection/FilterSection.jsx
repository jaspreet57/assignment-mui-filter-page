import { Typography } from '@mui/material';
import { FilterContainer } from './FilterSection.styles'

function FilterSection() {
    return (
        <FilterContainer maxWidth={false}>
            <Typography>Filters</Typography>
        </FilterContainer>
    );
}

export default FilterSection;
