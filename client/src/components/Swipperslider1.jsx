// import React from 'react'
// import Asset26 from "../assets/flipkartAssets/asset 26.jpeg";
// import Asset28 from "../assets/flipkartAssets/asset 28.jpeg";
// import Asset30 from "../assets/flipkartAssets/asset 30.jpeg";
// import Asset32 from "../assets/flipkartAssets/asset 32.jpeg";
// import { Flex, Box, Heading, Text, Image, Button } from "@chakra-ui/react";


// export default function Swipperslider1() {
//   return (
//     <div>
//         <Image src={Asset26}/>
//         <Image src={Asset28}/>
//         <Image src={Asset30}/>
//         <Image src={Asset32}/>

//     </div>
//   )
// }

import React from 'react';
import { Image } from '@chakra-ui/react';

export default function Swipperslider1({ images }) {
  return (
    <div>
      <Image src={images} />
    </div>
  );
}
