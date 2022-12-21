import React from 'react'
import { Box, SimpleGrid, Image } from "@chakra-ui/react";


const Photos = () => {
  return (
    <Box>
        <SimpleGrid columns={[1,1,1,2,2,2]} spacing={5} w='95%' m='auto' mt='10'>
  <Box height='450'>
    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSry1Jddq4sbcOCmNREGNuNA7_Pgij0yLc7sA&usqp=CAU" alt="shopping" w='100%'/>
  </Box>
  <Box height='450'>
  <Image src="https://www.statcan.gc.ca/o1/sites/default/files/2021-11/shopping_2.jpg" alt="shopping" w='100%' h='400'/>
  </Box>
</SimpleGrid>

    </Box>
  )
}

export default Photos