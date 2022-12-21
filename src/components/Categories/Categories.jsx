import React from 'react'
import { SimpleGrid, Box, Image } from '@chakra-ui/react';
import Card from './Card';


const Categories = () => {
  return (
    <div>
        <SimpleGrid columns={[1,2,2,4,4,4]} spacing={5} w='95%' m='auto' mt='10'>
  <Card
   text="Keep shopping for"
    img1="https://m.media-amazon.com/images/I/71293gyogZL._AC_SY135_.jpg"
     text1="Redmi 10A (Charcoal Black)"
      img2="https://m.media-amazon.com/images/I/51PG75Ko2NL._AC_SY135_.jpg"
       text2="Motorola g31(Meteorite."
        img3="https://m.media-amazon.com/images/I/71CyDMPnuFL._AC_SY135_.jpg"
         text3="Xiaomi 11 Lite NE 5G"
          img4="https://m.media-amazon.com/images/I/81t6Av5DvXL._AC_SY135_.jpg"
           text4="Samsung Galaxy M04"/>
   <Card
   text="Offers on travel tickets"
    img1="https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/travelQC/Flight_186x116._SY116_CB618818544_.jpg"
     text1="Get upto $2000 off on flights"
      img2="https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/travelQC/Train_186x116._SY116_CB618818544_.jpg"
       text2="Zero convinience fees on train tickets"
        img3="https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/travelQC/Bus_186x116._SY116_CB618818544_.jpg"
         text3="Guaranteed rewards on bus tickets"
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/travelQC/Accessory_186x116._SY116_CB618818544_.jpg"
           text4="Products for your travel needs"/>
   <Card
   text="Buy Again"
    img1="https://m.media-amazon.com/images/I/615oHJbPNSL._AC_SY119_.jpg"
     text1="Set wet gel ( Cool Avatar) Ranveer edition"
      img2="https://m.media-amazon.com/images/I/61efFnT7A5L._AC_SY119_.jpg"
       text2="Set wet gel ( Dashing Avatar) Ranveer edition"
        img3="https://m.media-amazon.com/images/I/51vw-wdV-eL._AC_SY119_.jpg"
         text3="One Musk Car perfume fragrance"
          img4="https://m.media-amazon.com/images/I/51P5A28trLL._AC_SY119_.jpg"
           text4="Prestige toast maker and sandwich maker"/>
           <Card
   text="Shop & Pay | Earn rewards daily"
    img1="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg"
     text1="Claim your scratch cards"
      img2="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_CollectedOffers._SY116_CB627364845_.jpg"
       text2="Redeem your collected rewards"
        img3="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_WinMore._SY116_CB627364845_.jpg"
         text3="Unlock your rewards when you oay or shop"
          img4="https://images-eu.ssl-images-amazon.com/images/G/31/img17/APay_Rewards/Rewards0.5x._SY116_CB633810016_.jpg"
           text4="Explore all offers in one place"/>
</SimpleGrid>
    </div>
  )
}

export default Categories