import { Typography } from '@mui/material';
import SortBy from './SortBy';
import { SortContainer } from './SortControls.styles'

function SortControls() {
    return (
        <SortContainer maxWidth={false}>
            <SortBy />
        </SortContainer>
    );
}

export default SortControls;
