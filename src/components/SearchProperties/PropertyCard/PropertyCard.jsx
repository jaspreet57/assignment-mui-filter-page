import { Container, Divider, Typography } from '@mui/material';
import React from 'react';


const PropertyCard = ({
    propertyDetails: {
        title,
        address,
        monthlyRent,
        rating,
        furnishingType,
        bhkType,
    }
}) => {
  return (
    <React.Fragment>
      <p> Card here - {title}, {address} </p>
    </React.Fragment>
  );
}

export default PropertyCard;
