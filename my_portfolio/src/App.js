import React from "react"
import{IconButton} from "@chakra-ui/button"
import {useColorMode } from "@chakra-ui/color-mode"
import{VStack,Flex,Heading,} from "@chakra-ui/layout"
import{ 
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaSun}from "react-icons/fa"
  import Header from "./components/Header";
  import Profile from "./components/Profile"


const App = () => {
  const {colorMode,toggleColorMode} = useColorMode(); // colorMode - variable , togglecolormode - function 
  const isDark =colorMode==="dark"
 return (
<VStack p="5">
  <Flex width="100%">
  <Heading ml="8" marginRight={1110} size="md" fontWeight="semibold" color="cyan.400">Guna.R</Heading>
  
  <IconButton
  ml={2}
    icon = {<FaLinkedin />}
    isRound ="true" onClick={()=>window.open("https://www.linkedin.com/in/guna-r-3ba020247?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuxxWBmgGSAatzyZYVxvkzg%3D%3D")}/>
      <IconButton
      ml={2}
    icon = {<FaInstagram />}
    isRound ="true" onClick={()=>window.open("https://instagram.com/guna_chandhiran?igshid=ZDdkNTZiNTM=")}/>
<IconButton
      ml={2}
    icon = {<FaGithub />}
    isRound ="true" onClick={()=>window.open("https://github.com/guna2313")}/>

      <IconButton
      ml={8}
    icon={isDark ? <FaSun /> : <FaMoon />}
    isRound ="true" 
    onClick={toggleColorMode} />    
  </Flex>
  <Header />
  <Profile />
</VStack>
 )
}
export default App;
