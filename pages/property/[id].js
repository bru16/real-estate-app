import React from 'react'
import { Box, Flex, Spacer, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import { BASE_URL, fetchAPI } from '../../utils/fetchApi';
import ImageScrollbar from '../../components/ImageScrollbar';




export default function PropertyDetails({ propertyDetails }) {
    const { price, rentFrequency, title, rooms, baths, area, agency, isVerified, description, purpose, type, furnishingStatus, amenities, photos } = propertyDetails;

    return (
        <Box maxW="1000px" margin="auto" p="4">
            {photos && <ImageScrollbar data={photos} />}
        </Box>
    )
}

export async function getServerSideProps({ params: { id } }) {
    const data = await fetchAPI(`${BASE_URL}/properties/detail?externalID=${id}`)
    return {
        props: {
            propertyDetails: data
        }
    }
}
