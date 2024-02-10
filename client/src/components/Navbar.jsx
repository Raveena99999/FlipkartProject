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
  const { username, setUsername,setSearchData } = useContext(Authcontext);
  const [search,setSearch] = useState("")

  const navigate = useNavigate();

  function handleSearch(event){
    setSearch(event.target.value)
  }
  const queryParams = new URLSearchParams({ productittle: search });
  async function handleSubmit() {
    try {
      
      const res = await fetch(
        `http://localhost:8080/allproduct?${queryParams}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data);
      setSearchData(data)
      navigate("/search")
    } catch (error) {
      console.log(error,"error")
    }
  }
  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
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
              
                 <InputLeftElement width='2.5rem' >
        <Button h='1.75rem' size='sm' onClick={handleSubmit} bg="white"  >
          <Image src={Asset63}  />
        </Button>
      </InputLeftElement>
      
                <Input
                
                  width="40vw"
                  placeholder="Search for Products, Brands and More"
                  name="productittle"
                  onChange={handleSearch}
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
                  {username  ? (
                    <>
                      <MenuItem>My Profile</MenuItem>
                      <Link to="/login" onClick={() => navigate("/login")}>
                        Login
                      </Link>
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
              {/* <BreadcrumbLink href="/Cart">Cart</BreadcrumbLink> */}
              <Link to="/cart" onClick={() => navigate("/cart")}>
                Cart
              </Link>
            </BreadcrumbItem>

            <BreadcrumbItem
              display={{ base: "none", md: "flex", lg: "flex", xl: "flex" }}
            >
              <Image src={Asset11} />
              {/* <BreadcrumbLink href="/Seller">Become a Seller</BreadcrumbLink> */}
              <Link to="/seller" onClick={() => navigate("/seller")}>
                Become a Seller
              </Link>
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
