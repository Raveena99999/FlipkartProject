import { Box ,Text} from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Beauty from "../components/Beauty"
import Defaultproduct from "../components/Defaultproduct"
export default function BeautyToys() {
  return (
    <Box>
      <Navbar/>
      <Text  w="96%" m="auto" mt="2%" mb="3%">Everyone strives to look presentable and at their best at all times. The clothes you wear and the way you style yourself says a lot about your personality. The first step to nailing the perfect look is by getting clear and healthy-looking skin. You can achieve this by eating healthy foods, leading a healthy lifestyle, hydrating your body, and taking care of your skin in the best possible way. The second method is by using cosmetics. Concealers, foundation creams, correctors, primers, and more help hide your skin imperfections almost immediately. Mascaras, kajal, lipsticks, lip liners, blush, bronzers, and more help enhance your look and give you an almost perfect appearance. You can buy make-up kits online at attractive prices. For men as well, to achieve the perfectly groomed look, you need to maintain your facial hair and keep your skin free from pimples. Check out the wide range of beauty products and grooming products online. Your hair also needs to be taken care of. Check out haircare products online to achieve lustrous-looking hair. Use deodorants and fragrances to keep body odor at bay and smell fresh all day. Buy the best beauty products and grooming products from your favorite online shopping site at attractive prices.</Text>
      <Beauty />
      <Defaultproduct/>
      <Footer/>
    </Box>
  )
}
