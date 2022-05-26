import { Container, Divider, Grid } from '@mui/material';
import React from 'react';
import { usePropertiesList } from '../../dataHooks/usePropertiesList';
import FilterSection from './FilterSection/FilterSection';
import PropertyCard from './PropertyCard/PropertyCard';
import SortControls from './SortControls/SortControls';

function SearchProperties() {
  const [properties, updateFilters, updateSort] = usePropertiesList();
  return (
    <React.Fragment>
      <FilterSection  updateFilters={updateFilters}/>
      <Divider />
      <SortControls updateSort={updateSort} />
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          {properties.map((property) => (
            <Grid item xs={12} md={4} lg={3}>
              <PropertyCard propertyDetails={property}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default SearchProperties;
