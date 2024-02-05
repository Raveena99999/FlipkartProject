// import React, { useState } from "react";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   Image,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   Button,
//   Flex,
//   Text,
//   Spacer,
//   Box
// } from "@chakra-ui/react";

// import { Link } from "react-router-dom";
// import { ChevronDownIcon } from "@chakra-ui/icons";

// import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
// import Asset1 from "../assets/flipkartAssets/asset 1.svg";
// import Asset63 from "../assets/flipkartAssets/asset 63.svg";
// import Asset3 from "../assets/flipkartAssets/asset 3.svg";
// import Asset5 from "../assets/flipkartAssets/asset 5.svg";
// import Asset6 from "../assets/flipkartAssets/asset 6.svg";
// import Asset7 from "../assets/flipkartAssets/asset 7.svg";
// import Asset8 from "../assets/flipkartAssets/asset 8.svg";
// import Asset9 from "../assets/flipkartAssets/asset 9.svg";
// import Asset10 from "../assets/flipkartAssets/asset 10.svg";
// import Asset11 from "../assets/flipkartAssets/asset 11.svg";
// import Asset12 from "../assets/flipkartAssets/asset 12.svg";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <Flex justify="space-evenly" bg="white" h="10vh">
//       <Box mt="1%">
//       <Breadcrumb separator="">
//         <BreadcrumbItem>
//           <BreadcrumbLink href="/">
//             {" "}
//             <Image src={Asset1} />
//           </BreadcrumbLink>
//         </BreadcrumbItem>

//         <BreadcrumbItem>
//           <InputGroup>
//             <InputLeftElement
//               pointerEvents="none"
//               children={<Image src={Asset63} />}
//             />
//             <Input
//               width="40vw"
//               placeholder="Search for Products, Brands and More"
//             />
//           </InputGroup>
//         </BreadcrumbItem>

//         <BreadcrumbItem>
//           <Image src={Asset3} />
//           <Menu
//             isOpen={isMenuOpen}
//             onClose={() => setIsMenuOpen(false)}
//             placement="bottom-start"
//             onMouseLeave={() => setIsMenuOpen(false)}
//           >
//             <MenuButton
//               as={Button}
//               backgroundColor="white"
//               rightIcon={<ChevronDownIcon />}
//               onMouseEnter={() => setIsMenuOpen(true)}
//             >
//               Login
//             </MenuButton>
//             <MenuList zIndex="2"
//               onMouseEnter={() => setIsMenuOpen(true)}
//               onMouseLeave={() => setIsMenuOpen(false)}
//             >
//               <MenuList >
//                 <Flex>
//                   <Text>New customer?</Text>
//                   <Spacer />
//                   <Link chakra={Link} color="blue" to="/signup">
//                     Sign Up
//                   </Link>
//                 </Flex>

//                 <MenuItem>
//                   <Image src={Asset3} />
//                   My Profile
//                 </MenuItem>
//                 <MenuItem>
//                   <Image src={Asset5} />
//                   Flipkart Plus Zone
//                 </MenuItem>
//                 <MenuItem>
//                   <Image src={Asset6} />
//                   Orders
//                 </MenuItem>
//                 <MenuItem>
//                   <Image src={Asset7} />
//                   Wishlist
//                 </MenuItem>
//                 <MenuItem>
//                   <Image src={Asset8} />
//                   Rewards
//                 </MenuItem>
//                 <MenuItem>
//                   <Image src={Asset9} />
//                   Gift Cards
//                 </MenuItem>
//               </MenuList>
//             </MenuList>
//           </Menu>
//         </BreadcrumbItem>

//         <BreadcrumbItem>
//           <Image src={Asset10} />
//           <BreadcrumbLink href="/Cart">Cart</BreadcrumbLink>
//         </BreadcrumbItem>

//         <BreadcrumbItem>
//           <Image src={Asset11} />

//           <BreadcrumbLink href="/Seller">Become a Seller</BreadcrumbLink>
//         </BreadcrumbItem>

//         <BreadcrumbItem>
//           <Image src={Asset12} />
//         </BreadcrumbItem>
//       </Breadcrumb>
//       </Box>
//       </Flex>
//   );
// }

// import React, { useContext, useState } from "react";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   Image,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   Button,
//   Flex,
//   Text,
//   Spacer,
//   Box
// } from "@chakra-ui/react";

// import { Link } from "react-router-dom";
// import { ChevronDownIcon } from "@chakra-ui/icons";

// import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
// import Asset1 from "../assets/flipkartAssets/asset 1.svg";
// import Asset63 from "../assets/flipkartAssets/asset 63.svg";
// import Asset3 from "../assets/flipkartAssets/asset 3.svg";
// import Asset5 from "../assets/flipkartAssets/asset 5.svg";
// import Asset6 from "../assets/flipkartAssets/asset 6.svg";
// import Asset7 from "../assets/flipkartAssets/asset 7.svg";
// import Asset8 from "../assets/flipkartAssets/asset 8.svg";
// import Asset9 from "../assets/flipkartAssets/asset 9.svg";
// import Asset10 from "../assets/flipkartAssets/asset 10.svg";
// import Asset11 from "../assets/flipkartAssets/asset 11.svg";
// import Asset12 from "../assets/flipkartAssets/asset 12.svg";
// import { Authcontext } from "../authcontext/Authcontextprovider";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const {username,setUsername} = useContext(Authcontext)

//   const handleLogout = () => {
//     // Perform logout actions, e.g., clear local storage, reset state, etc.
//     setUsername('');
//   };

//   return (
//     <>

//     <Flex justify="space-around" bg="white" h="10vh" position="sticky" top="0" zIndex="2">

//       <Box mt="1%"  >
//       <Breadcrumb separator="">
//         <BreadcrumbItem>
//           <BreadcrumbLink href="/">
//             {" "}
//             <Image src={Asset1} />
//           </BreadcrumbLink>
//         </BreadcrumbItem>

//         <BreadcrumbItem>
//           <InputGroup>
//             <InputLeftElement
//               pointerEvents="none"
//               children={<Image src={Asset63} />}
//             />
//             <Input
//               width="40vw"
//               placeholder="Search for Products, Brands and More"
//             />
//           </InputGroup>
//         </BreadcrumbItem>

//         <BreadcrumbItem>
//                  <Image src={Asset3} />

//           <Menu
//             isOpen={isMenuOpen}
//             onClose={() => setIsMenuOpen(false)}
//             placement="bottom-start"
//             onMouseLeave={() => setIsMenuOpen(false)}
//           >
//             <MenuButton
//               as={Button}
//               backgroundColor="white"
//               rightIcon={<ChevronDownIcon />}
//               onMouseEnter={() => setIsMenuOpen(true)}
//             >
//               {username ? `Welcome, ${username}` : 'Login'}

//             </MenuButton>

//             <MenuList zIndex="2"
//               onMouseEnter={() => setIsMenuOpen(true)}
//               onMouseLeave={() => setIsMenuOpen(false)}
//             >
//               <MenuList >
//                 <Flex>
//                   <Text>New customer?</Text>
//                   <Spacer />
//                   <Link chakra={Link} color="blue" to="/signup">
//                     Sign Up
//                   </Link>
//                 </Flex>

//                 <Link chakra={Link} color="blue" to="/login">
//                     Login
//                   </Link>

//                 <MenuItem>
//                   My Profile
//                 </MenuItem>
//                 <MenuItem>
//                   Flipkart Plus Zone
//                 </MenuItem>
//                 <MenuItem>
//                   Orders
//                 </MenuItem>
//                 <MenuItem>
//                   Wishlist
//                 </MenuItem>
//                 <MenuItem>
//                   Rewards
//                 </MenuItem>
//                 <MenuItem>
//                   Gift Cards
//                 </MenuItem>
//               </MenuList>
//             </MenuList>
//           </Menu>
//         </BreadcrumbItem>

//         <BreadcrumbItem>
//           <Image src={Asset10} />
//           <BreadcrumbLink href="/Cart">Cart</BreadcrumbLink>
//         </BreadcrumbItem>

//         <BreadcrumbItem display={{ base: "none", md: "flex",lg:"flex" ,xl:"flex" }}>
//           <Image src={Asset11} />
//           <BreadcrumbLink href="/Seller">Become a Seller</BreadcrumbLink>
//         </BreadcrumbItem>

//         <BreadcrumbItem display={{ base: "none", md: "block" }}>
//           <Image src={Asset12} />
//         </BreadcrumbItem>
//       </Breadcrumb>
//       </Box>
//     </Flex>
//     </>
//   );
// }

import React, { useContext, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Flex,
  Text,
  Spacer,
  Box,
  Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Asset1 from "../assets/flipkartAssets/asset 1.svg";
import Asset63 from "../assets/flipkartAssets/asset 63.svg";
import Asset3 from "../assets/flipkartAssets/asset 3.svg";

import Asset10 from "../assets/flipkartAssets/asset 10.svg";
import Asset11 from "../assets/flipkartAssets/asset 11.svg";
import Asset12 from "../assets/flipkartAssets/asset 12.svg";
import { Authcontext } from "../authcontext/Authcontextprovider";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { username, setUsername } = useContext(Authcontext);
  const navigate = useNavigate();
  const handleLogout = () => {
    // Perform logout actions, e.g., clear local storage, reset state, etc.
    setUsername("");
  };

  return (
    <>
      <Flex
        justify="space-around"
        bg="white"
        h="10vh"
        position="sticky"
        top="0"
        zIndex="2"
      >
        <Box mt="1%">
          <Breadcrumb separator="">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                {" "}
                <Image src={Asset1} />
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Image src={Asset63} />}
                />
                <Input
                  width="40vw"
                  placeholder="Search for Products, Brands and More"
                />
              </InputGroup>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Image src={Asset3} />
              <Menu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                placement="bottom-start"
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                <MenuButton
                  as={Button}
                  backgroundColor="white"
                  rightIcon={<ChevronDownIcon />}
                  onMouseEnter={() => setIsMenuOpen(true)}
                >
                  {username ? username : "Login"}
                </MenuButton>

                <MenuList
                  zIndex="2"
                  onMouseEnter={() => setIsMenuOpen(true)}
                  onMouseLeave={() => setIsMenuOpen(false)}
                >
                  {username ? (
                    <>
                      <MenuItem>My Profile</MenuItem>
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </>
                  ) : (
                    <>
                      <Flex>
                        <Text>New customer?</Text>
                        <Spacer />
                        {/* <Link chakra={Link} color="blue" to="/signup">
                          Sign Up
                        </Link> */}
                        <Link to="/signup" onClick={() => navigate("/signup")}>
                          Sign up
                        </Link>
                      </Flex>

                      {/* <Link chakra={Link} color="blue" to="/login">
                        Login
                      </Link> */}
                      <Link to="/login" onClick={() => navigate("/login")}>
                        Login
                      </Link>

                      <MenuItem>My Profile</MenuItem>
                      <MenuItem>Flipkart Plus Zone</MenuItem>
                      <MenuItem>Orders</MenuItem>
                      <MenuItem>Wishlist</MenuItem>
                      <MenuItem>Rewards</MenuItem>
                      <MenuItem>Gift Cards</MenuItem>
                    </>
                  )}
                </MenuList>
              </Menu>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Image src={Asset10} />
              <BreadcrumbLink href="/Cart">Cart</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem
              display={{ base: "none", md: "flex", lg: "flex", xl: "flex" }}
            >
              <Image src={Asset11} />
              <BreadcrumbLink href="/Seller">Become a Seller</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem display={{ base: "none", md: "block" }}>
              <Image src={Asset12} />
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Flex>
    </>
  );
}
