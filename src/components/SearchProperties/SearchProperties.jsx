import { Container, Divider, Grid } from '@mui/material';
import React from 'react';
import FilterSection from './FilterSection/FilterSection';
import PropertyCard from './PropertyCard/PropertyCard';
import SortControls from './SortControls/SortControls';

const propertiesList = [
  {
    title: '3 Bhk Semi-furnished Flat',
    address: 'Sector 46, Gurugram, Haryana',
    monthlyRent: '30,000',
    rating: '4.5',
    furnishingType: 'semi-furnished',
    bhkType: '3 bhk',
  },
  {
    title: '1 Bhk Fully-furnished Flat',
    address: 'Sector 46, Gurugram, Haryana',
    monthlyRent: '15,000',
    rating: '3.5',
    furnishingType: 'fully-furnished',
    bhkType: '1 bhk',
  },
  {
    title: '1 Bhk Fully-furnished Flat',
    address: 'Sector 46, Gurugram, Haryana',
    monthlyRent: '15,000',
    rating: '3.5',
    furnishingType: 'fully-furnished',
    bhkType: '1 bhk',
  },
  {
    title: '1 Bhk Fully-furnished Flat',
    address: 'Sector 46, Gurugram, Haryana',
    monthlyRent: '15,000',
    rating: '3.5',
    furnishingType: 'fully-furnished',
    bhkType: '1 bhk',
  }
]

function SearchProperties() {
  return (
    <React.Fragment>
      <FilterSection />
      <Divider />
      <SortControls />
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          {propertiesList.map((property) => (
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
