// import { Box ,Text} from '@chakra-ui/react'
// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import Beauty from "../components/Beauty"
// import Defaultproduct from "../components/Defaultproduct"
// export default function BeautyToys() {
//   return (
//     <Box>
//       <Navbar/>
//       <Text  w="96%" m="auto" mt="2%" mb="3%">Everyone strives to look presentable and at their best at all times. The clothes you wear and the way you style yourself says a lot about your personality. The first step to nailing the perfect look is by getting clear and healthy-looking skin. You can achieve this by eating healthy foods, leading a healthy lifestyle, hydrating your body, and taking care of your skin in the best possible way. The second method is by using cosmetics. Concealers, foundation creams, correctors, primers, and more help hide your skin imperfections almost immediately. Mascaras, kajal, lipsticks, lip liners, blush, bronzers, and more help enhance your look and give you an almost perfect appearance. You can buy make-up kits online at attractive prices. For men as well, to achieve the perfectly groomed look, you need to maintain your facial hair and keep your skin free from pimples. Check out the wide range of beauty products and grooming products online. Your hair also needs to be taken care of. Check out haircare products online to achieve lustrous-looking hair. Use deodorants and fragrances to keep body odor at bay and smell fresh all day. Buy the best beauty products and grooming products from your favorite online shopping site at attractive prices.</Text>
//       <Beauty />
//       <Defaultproduct/>
//       <Footer/>
//     </Box>
//   )
// }

import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactStars from "react-rating-stars-component";

export default function Grocery() {
  const [mybeautyData, setmybeautyData] = useState([]);

  async function fetchData() {
    let res = await fetch(`http://localhost:8080/beauty`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      mode: "cors",
    });
    let data = await res.json();
    setmybeautyData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <Navbar />
      <Box w="96%" m="auto" mt="2%">
        <Heading as="h3" size="lg" mt="1%" ml="3%">
          Beauty products
        </Heading>
        <Text ml="3%" mt="1.5%" fontSize="14px">
          Indulge in the ultimate beauty experience with our wide range of
          skincare, makeup, haircare, and personal care products. From luxurious
          creams to must-have makeup essentials, we have everything you need to
          look and feel your best. At Flipkart, we're passionate about helping
          you look and feel your best, inside and out. Shop with confidence and
          explore our Beauty section today!
        </Text>
        <Flex
          wrap={"wrap"}
          justifyContent={"space-around"}
          p="1rem"
          gap="2rem"
          w="96%"
          m="auto"
        >
          {mybeautyData?.map((ele) => (
            <Box
              key={ele._id}
              p="1rem"
              h="auto"
              w="17rem"
              border="1px solid #E2E8F0"
              borderRadius="5px"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
              textAlign="center"
              mt="2%"
            >
              <Image
                src={ele.poster}
                alt="productLogo"
                w="8rem"
                borderRadius="5px"
                display="block"
                m="auto"
              />
              <Text fontSize="1rem" mt="0.5rem" fontWeight="semibold">
                {ele.skin_type}
              </Text>
              <Text fontSize="1rem" color="green" fontWeight="semibold">
                Price: {ele.price}
              </Text>
              <Text fontSize="0.8rem" mt="0.5rem" fontWeight="semibold">
                {ele.hair_type}
              </Text>
              <Text fontSize="0.8rem" mt="0.5rem" fontWeight="semibold">
                {ele.eye_color}
              </Text>
              <Text fontSize="0.8rem" mt="0.5rem" fontWeight="semibold">
                Category: {ele.category}
              </Text>
              <Flex mt="0.5rem" align="center" justify="center">
                <Text fontSize="0.8rem" mr="0.5rem" fontWeight="semibold">
                  Rating:
                </Text>
                <ReactStars
                  count={5}
                  value={ele.rating}
                  edit={false}
                  size={20}
                  activeColor="red"
                />
              </Flex>
              <Button
                bg="blue.400"
                color="white"
                mt="1rem"
                _hover={{ bg: "blue.500" }}
              >
                Add to Cart
              </Button>
            </Box>
          ))}
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
}
