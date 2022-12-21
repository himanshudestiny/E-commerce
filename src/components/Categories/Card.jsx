import React from 'react'
import { Box, SimpleGrid, Image } from "@chakra-ui/react"


const Card = ({text, img1, text1, img2, text2, img3, text3, img4, text4}) => {
  return (
    <Box height='auto' bg='white'>
    <Box align='left' ml='5' fontWeight='bold' fontSize='22'>{text}</Box>
  <SimpleGrid columns={2} spacing={5} m='5'>
  <Box height='150px'>
    <Box m='auto'> <Image src={img1} alt={text1} m='auto'/>  </Box>
    <Box fontSize='12' align='left'>{text1}</Box>
  </Box>
  <Box height='150px'>
  <Box m='auto'> <Image src={img2} alt={text2} m='auto'/>  </Box>
    <Box fontSize='12' align='left'>{text2}</Box>
  </Box>
  <Box height='150px'>
  <Box m='auto'> <Image src={img3} alt={text3} m='auto'/>  </Box>
    <Box fontSize='12' align='left'>{text3}</Box>
  </Box>
  <Box height='150px'>
  <Box m='auto'> <Image src={img4} alt={text4} m='auto'/>  </Box>
    <Box fontSize='12' align='left'>{text4}</Box>
  </Box>
</SimpleGrid>
  </Box>
  )
}

export default Card