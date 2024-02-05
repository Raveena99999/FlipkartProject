// import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
// import React, { useContext, useState } from "react";
// // import { Authcontext } from "../authcontext/Authcontextprovider";
// import {
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   Button,
 
// } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";

// import Asset17 from "../assets/flipkartAssets/asset 17.png";
// import Asset18 from "../assets/flipkartAssets/asset 18.png";
// import Asset19 from "../assets/flipkartAssets/asset 19.png";
// import Asset20 from "../assets/flipkartAssets/asset 20.png";
// import Asset21 from "../assets/flipkartAssets/asset 21.jpeg";
// import Asset22 from "../assets/flipkartAssets/asset 22.jpeg";
// import Asset23 from "../assets/flipkartAssets/asset 23.png";
// import Asset24 from "../assets/flipkartAssets/asset 24.png";
// import Asset25 from "../assets/flipkartAssets/asset 25.png";


// export default function Afternavbar() {
//     // const {isMenuOpen, setIsMenuOpen} = useContext(Authcontext)
//     const [fashion,setFashion]=useState(false)
//     const [electronics,setElectronics]=useState(false)
//     const [home,setHome]=useState(false)
//     const [beauty,setBeauty]=useState(false)
//     const [wheelers,setWheelers]=useState(false)


//   return (
//     <Flex justify="space-between"    mt="1%" w="96%" mx="auto" bg="white">
//       <Box >
//         <Image src={Asset17} alt="17image" display="block" mx="auto" />
//         <Text>Grocery</Text>
//       </Box>

//       <Box >
//         <Image src={Asset18} alt="18image" display="block" mx="auto" />
//         <Text>Mobiles</Text>
//       </Box>

//       <Box >
//         <Image src={Asset19} alt="19image" display="block" mx="auto" />
//         <Menu
//         isOpen={fashion}
//         onClose={() => setFashion(false)}
//         placement="bottom-start"
//         onMouseLeave={() => setFashion(false)}
//         >
//           <MenuButton
//             as={Button}
//             backgroundColor="white"
//             rightIcon={<ChevronDownIcon />}
//             onMouseEnter={() => setFashion(true)}

//           >
//             Fashion
//           </MenuButton>
//           <MenuList zIndex="2"  onMouseEnter={() => setFashion(true)}
//               onMouseLeave={() => setFashion(false)}>
//             <MenuItem>Download</MenuItem>
//             <MenuItem>Create a Copy</MenuItem>
//           </MenuList>
//         </Menu>
//       </Box>

//       <Box >
//         <Image src={Asset20} alt="20image" display="block" mx="auto"/>
//         <Menu
//           isOpen={electronics}
//           onClose={() => setElectronics(false)}
//           placement="bottom-start"
//           onMouseLeave={() => setElectronics(false)} 
//         >
//           <MenuButton
//             as={Button}
//             backgroundColor="white"
//             rightIcon={<ChevronDownIcon />}
//             onMouseEnter={() => setElectronics(true)}

//           >
//             Electronics
//           </MenuButton>
//           <MenuList zIndex="2" 
//            onMouseEnter={() => setElectronics(true)}
//            onMouseLeave={() => setElectronics(false)}
//           >
//             <MenuItem>Download</MenuItem>
//             <MenuItem>Create a Copy</MenuItem>
//           </MenuList>
//         </Menu>
//       </Box>

//       <Box >
//         <Image src={Asset21} alt="21image" display="block" mx="auto" />
//         <Menu 
//          isOpen={home}
//          onClose={() => setHome(false)}
//          placement="bottom-start"
//          onMouseLeave={() => setHome(false)} 
//         >
//           <MenuButton
//             as={Button}
//             backgroundColor="white"
//             rightIcon={<ChevronDownIcon />}
//             onMouseEnter={() => setHome(true)}

//           >
//             Home & Furniture
//           </MenuButton>
//           <MenuList zIndex="2" 
//             onMouseEnter={() => setHome(true)}
//             onMouseLeave={() => setHome(false)}
//           >
//             <MenuItem>Download</MenuItem>
//             <MenuItem>Create a Copy</MenuItem>
//           </MenuList>
//         </Menu>
//       </Box>

//       <Box >
//         <Image src={Asset22} alt="22image" display="block" mx="auto" />
//        <Text>Appliances</Text>
//       </Box>

//       <Box >
//         <Image src={Asset23} alt="23image" display="block" mx="auto" />
//        <Text textAlign="center">Travel</Text>
//       </Box>


//       <Box >
//         <Image src={Asset24} alt="24mage" display="block" mx="auto" />
//         <Menu
//          isOpen={beauty}
//          onClose={() => setBeauty(false)}
//          placement="bottom-start"
//          onMouseLeave={() => setBeauty(false)} 
//         >
//           <MenuButton
//             as={Button}
//             backgroundColor="white"
//             rightIcon={<ChevronDownIcon />}
//             onMouseEnter={() => setBeauty(true)}

//           >
//             Beauty,Toys & More
//           </MenuButton>
//           <MenuList zIndex="2" 
//            onMouseEnter={() => setBeauty(true)}
//            onMouseLeave={() => setBeauty(false)}
//           >
//             <MenuItem>Download</MenuItem>
//             <MenuItem>Create a Copy</MenuItem>
//           </MenuList>
//         </Menu>
//       </Box>


//       <Box >
//         <Image src={Asset25} alt="25image" display="block" mx="auto" />
//         <Menu
//          isOpen={wheelers}
//          onClose={() => setWheelers(false)}
//          placement="bottom-start"
//          onMouseLeave={() => setWheelers(false)} 
//         >
//           <MenuButton
//             as={Button}
//             backgroundColor="white"
//             rightIcon={<ChevronDownIcon />}
//             onMouseEnter={() => setWheelers(true)}

//           >
//             Two Wheelers
//           </MenuButton>
//           <MenuList zIndex="2" 
//            onMouseEnter={() => setWheelers(true)}
//            onMouseLeave={() => setWheelers(false)}
//           >
//             <MenuItem>Download</MenuItem>
//             <MenuItem>Create a Copy</MenuItem>
//           </MenuList>
//         </Menu>
//       </Box>

//     </Flex>
//   );
// }



import React, { useState } from 'react';
import { Box, Flex, Image, Text, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Asset17 from '../assets/flipkartAssets/asset 17.png';
import Asset18 from '../assets/flipkartAssets/asset 18.png';
import Asset19 from '../assets/flipkartAssets/asset 19.png';
import Asset20 from '../assets/flipkartAssets/asset 20.png';
import Asset21 from '../assets/flipkartAssets/asset 21.jpeg';
import Asset22 from '../assets/flipkartAssets/asset 22.jpeg';
import Asset23 from '../assets/flipkartAssets/asset 23.png';
import Asset24 from '../assets/flipkartAssets/asset 24.png';
import Asset25 from '../assets/flipkartAssets/asset 25.png';

export default function Afternavbar() {
    const [fashion, setFashion] = useState(false);
    const [electronics, setElectronics] = useState(false);
    const [home, setHome] = useState(false);
    const [beauty, setBeauty] = useState(false);
    const [wheelers, setWheelers] = useState(false);

    return (
        <Flex justify="space-between" mt="1%" w="96%" mx="auto" bg="white"
        //  overflowX={{ base: 'auto', md: 'scroll' }}
         overflowX={{ base: 'scroll', md: 'auto' }}

         >
            {/* Each Box represents a category */}
            <Box>
                <Image src={Asset17} alt="17image" display="block" mx="auto" />
                <Text>Grocery</Text>
            </Box>

            <Box>
                <Image src={Asset18} alt="18image" display="block" mx="auto" />
                <Text>Mobiles</Text>
            </Box>

            <Box>
                <Image src={Asset19} alt="19image" display="block" mx="auto" />
                <Menu
                    isOpen={fashion}
                    onClose={() => setFashion(false)}
                    placement="bottom-start"
                    onMouseLeave={() => setFashion(false)}
                >
                    <MenuButton
                        as={Button}
                        backgroundColor="white"
                        rightIcon={<ChevronDownIcon />}
                        onMouseEnter={() => setFashion(true)}
                    >
                        Fashion
                    </MenuButton>
                    <MenuList zIndex="2" onMouseEnter={() => setFashion(true)} onMouseLeave={() => setFashion(false)}>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                    </MenuList>
                </Menu>
            </Box>

            {/* Additional boxes will only show on larger screens */}
            <Box display={{ base: 'none', md: 'block' }}>
                <Image src={Asset20} alt="20image" display="block" mx="auto" />
                <Menu
                    isOpen={electronics}
                    onClose={() => setElectronics(false)}
                    placement="bottom-start"
                    onMouseLeave={() => setElectronics(false)}
                >
                    <MenuButton
                        as={Button}
                        backgroundColor="white"
                        rightIcon={<ChevronDownIcon />}
                        onMouseEnter={() => setElectronics(true)}
                    >
                        Electronics
                    </MenuButton>
                    <MenuList zIndex="2" onMouseEnter={() => setElectronics(true)} onMouseLeave={() => setElectronics(false)}>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                    </MenuList>
                </Menu>
            </Box>

            {/* Additional boxes will only show on larger screens */}
            <Box display={{ base: 'none', md: 'block' }}>
                <Image src={Asset21} alt="21image" display="block" mx="auto" />
                <Menu
                    isOpen={home}
                    onClose={() => setHome(false)}
                    placement="bottom-start"
                    onMouseLeave={() => setHome(false)}
                >
                    <MenuButton
                        as={Button}
                        backgroundColor="white"
                        rightIcon={<ChevronDownIcon />}
                        onMouseEnter={() => setHome(true)}
                    >
                        Home & Furniture
                    </MenuButton>
                    <MenuList zIndex="2" onMouseEnter={() => setHome(true)} onMouseLeave={() => setHome(false)}>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                    </MenuList>
                </Menu>
            </Box>

            <Box display={{ base: 'none', md: 'block' }}>
                <Image src={Asset22} alt="22image" display="block" mx="auto" />
                <Text>Appliances</Text>
            </Box>

            <Box display={{ base: 'none', md: 'block' }}>
                <Image src={Asset23} alt="23image" display="block" mx="auto" />
                <Text textAlign="center">Travel</Text>
            </Box>

            <Box display={{ base: 'none', md: 'block' }}>
                <Image src={Asset24} alt="24mage" display="block" mx="auto" />
                <Menu
                    isOpen={beauty}
                    onClose={() => setBeauty(false)}
                    placement="bottom-start"
                    onMouseLeave={() => setBeauty(false)}
                >
                    <MenuButton
                        as={Button}
                        backgroundColor="white"
                        rightIcon={<ChevronDownIcon />}
                        onMouseEnter={() => setBeauty(true)}
                    >
                        Beauty,Toys & More
                    </MenuButton>
                    <MenuList zIndex="2" onMouseEnter={() => setBeauty(true)} onMouseLeave={() => setBeauty(false)}>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                    </MenuList>
                </Menu>
            </Box>

            <Box display={{ base: 'none', md: 'block' }}>
                <Image src={Asset25} alt="25image" display="block" mx="auto" />
                <Menu
                    isOpen={wheelers}
                    onClose={() => setWheelers(false)}
                    placement="bottom-start"
                    onMouseLeave={() => setWheelers(false)}
                >
                    <MenuButton
                        as={Button}
                        backgroundColor="white"
                        rightIcon={<ChevronDownIcon />}
                        onMouseEnter={() => setWheelers(true)}
                    >
                        Two Wheelers
                    </MenuButton>
                    <MenuList zIndex="2" onMouseEnter={() => setWheelers(true)} onMouseLeave={() => setWheelers(false)}>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                    </MenuList>
                </Menu>
            </Box>

        </Flex>
    );
}
