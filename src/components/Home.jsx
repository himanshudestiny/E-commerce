import React from 'react'
import Navbar from "./Navbar/Navbar";
import { SimpleGrid, Box } from "@chakra-ui/react";
import Carousel from "./Carousel";
import Categories from './Categories/Categories';
import Photos from './Photos/Photos';


const Home = () => {
  return (
    <Box bg='teal.50'>
       <Navbar />
       <Box bg='teal'>
       <SimpleGrid columns={3} spacing={1} w={['100%','70%','60%','50%','40%','30%']} m='auto' bg='teal' color='white' alignContent={'center'} justifyContent='center'>
  <Box height='30px'>New Varieties</Box>
  <Box height='30px'>Top Quality</Box>
  <Box height='30px'>Safely Delivered</Box>
</SimpleGrid>
       </Box>
       <Carousel />
       <Categories />
       <Photos />
    </Box>
  )
}

export default Home;