import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarRateIcon from '@mui/icons-material/StarRate';
import PropertyImage from '../../../assets/images/property.jpeg'
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid'
import Fade from '@mui/material/Fade'

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
    const [isFav, setIsFav] = useState(false);

    const favButtonHandler = () => {
        setIsFav(current => !current);
    }

    return (
        <Fade in appear>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="230"
                        src={PropertyImage}
                        alt="property image"
                        sx={{
                            margin: 'auto',
                            marginTop: '8px',
                            width: 'calc(100% - 16px)',
                            borderRadius: '12px'
                        }}
                    />
                    <CardContent>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <Typography gutterBottom variant="h6" component="div" color="GrayText" sx={{ fontSize: '14px', fontWeight: '400' }}>
                                    {address}
                                </Typography>
                                <Typography variant="h4" component="div" sx={{ fontSize: '18px', fontWeight: '600' }}>
                                    {title}
                                </Typography>
                            </Box>
                            <IconButton aria-label="mark-favorite" onClick={favButtonHandler}>
                                {isFav ? (
                                    <BookmarkIcon color='primary' sx={{ fontSize: '25px' }} />
                                ) : (
                                    <BookmarkBorderIcon sx={{ color: 'GrayText', fontSize: '25px' }} />
                                )}
                            </IconButton>
                        </Box>
                        <Divider sx={{ width: '60px', margin: '10px 0px' }} />
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={6}><Typography sx={{ color: 'GrayText', fontSize: '14px', fontWeight: '400' }} >3 washrooms</Typography></Grid>
                            <Grid item xs={12} md={6}><Typography sx={{ color: 'GrayText', fontSize: '14px', fontWeight: '400' }} >Builder floor</Typography></Grid>
                            <Grid item xs={12} md={6}><Typography sx={{ color: 'GrayText', fontSize: '14px', fontWeight: '400' }} >Open Parking</Typography></Grid>
                            <Grid item xs={12} md={6}><Typography sx={{ color: 'GrayText', fontSize: '14px', fontWeight: '400' }} >1200 sq. ft.</Typography></Grid>
                        </Grid>
                        <Divider sx={{ width: '60px', margin: '10px 0px' }} />
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <Typography gutterBottom variant="h6" component="div" color="GrayText" sx={{ fontSize: '14px', fontWeight: '400', margin: 0 }}>
                                    Monthly Rent
                                </Typography>
                                <Typography variant="h4" component="div" sx={{ fontSize: '18px', fontWeight: '600', margin: 0 }}>
                                    Rs. {monthlyRent}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <StarRateIcon sx={{ color: '#dc7637', fontSize: '18px', marginRight: '2px' }} />
                                <Typography component="span" sx={{ fontSize: '14px', fontWeight: '600' }}>
                                    {rating}
                                </Typography>
                                <Typography component="span" sx={{ fontSize: '14px', fontWeight: '400' }}>
                                    (10)
                                </Typography>
                            </Box>

                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Fade>
    );
}

export default PropertyCard;
