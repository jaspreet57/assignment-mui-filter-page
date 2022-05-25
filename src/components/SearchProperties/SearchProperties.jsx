import { Container, Divider, Typography } from '@mui/material';
import React from 'react';
import FilterSection from './FilterSection/FilterSection';
import SortControls from './SortControls/SortControls';

function SearchProperties() {
  return (
    <React.Fragment>
        <FilterSection />
        <Divider />
        <SortControls />
        <Container maxWidth={false}>
            <Typography>Propeties List here</Typography>
        </Container>
    </React.Fragment>
  );
}

export default SearchProperties;
