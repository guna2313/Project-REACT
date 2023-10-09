import React from "react";
import { UseMediaQuery } from "@chakra-ui/media-query";
import {Box,Flex,Heading,Text} from "@chakra-ui/layout";
import {Icon} from "@chakra-ui/icon";
import { DiPython, DiJavascript,DiHtml5,DiCss3,DiMysql, DiReact} from "react-icons/di";//developer icons
import { useMediaQuery } from "@chakra-ui/react";
import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';


const Profile = () => {
  const { ColorMode } = useColorMode();
  const isDark = ColorMode === 'dark';
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Flex
    direction={isNotSmallerScreen ? "row" :"coloumn"}
    w = "100%"
    maxWidth={{base:"100vh" , md : "130vh" , lg :"130vh" , xl:"130vh"}}>

    




        
         <Box alignSelf="self-start" px="32" py="16" ml="80" >

            <Text mt={4} fontSize="2xl" fontweight="extrabold" color={"cyan.500"} size="xl" ml={20} >

                Skills : </Text>
                <Flex direction="row">
  <Flex 
    rounded="xl"
    direction='column'
    mt={6}
    bg="blue.400"
    h="20vh"
    w="20vh"
    justify="flex-end"
    ml={20}
  >
    <Icon color="white" p="4" w="24" h="24" as={DiPython}/>
    <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
      Python
    </Text>
  </Flex>

  <Flex 
    rounded="xl"
    direction='column'
    mt={6}
    bg="blue.400"
    h="20vh"
    w="20vh"
    justify="flex-end"
    ml={4} 
  >
    <Icon color="white" p="4" w="24" h="24" as={DiHtml5}/>
    <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
      HTML5
    </Text>
  </Flex>
  <Flex 
    rounded="xl"
    direction='column'
    mt={6}
    bg="blue.400"
    h="20vh"
    w="20vh"
    justify="flex-end"
    ml={4} 
  >
    <Icon color="white" p="4" w="24" h="24" as={DiCss3}/>
    <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
     CSS
    </Text>
  </Flex>
  </Flex>
                          <Flex direction="row">
  <Flex
   rounded="xl"
   direction='column'
   mt={6}
   bg="blue.400"
   h="20vh"
   w="20vh"
   justify="flex-end"
   ml={20}
   >

  
    <Icon color="white" p="4" w="24" h="24" as={DiJavascript}/>
    <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
     Javascript
    </Text>
  </Flex>
  
  <Flex 
    rounded="xl"
    direction='column'
    mt={6}
    bg="blue.400"
    h="20vh"
    w="20vh"
    justify="flex-end"
    ml={4} 
  

  >
    <Icon color="white" p="4" w="24" h="24" as={DiReact}/>
    <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
     React
    </Text>
    </Flex>

    <Flex 
    rounded="xl"
    direction='column'
    mt={6}
    bg="blue.400"
    h="20vh"
    w="20vh"
    justify="flex-end"
    ml={4} 
  >
    <Icon color="white" p="4" w="24" h="24" as={DiMysql}/>
    <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
     SQL
    </Text>
  </Flex>
  </Flex>
  

  <Text mt={9} fontSize="2xl" fontweight="extrabold" color={"cyan.500"}  size="xl" ml={20} >

                Project  : "Artificial Vision"</Text>
               
                <Text fontSize="larger" color="{isDark ? 'gray.400' : 'black'}" ml="20" mt="5">
    Artificial Vision is Developed by incorporating Augment techniques and it helps the visually challenged to experience the World by virtual picturization
  </Text>
  <Button mt={8} colorScheme="blue" ml="20" onClick={() => window.open("https://docs.google.com/presentation/d/1g5UshyCyhwiT5n8ojWi9MwqSMrngOONQ/edit?usp=sharing&ouid=106766396987091418328&rtpof=true&sd=true")}>
  Artificial Vision
</Button>
<Text mt={9} fontSize="2xl" fontweight="extrabold" color={"cyan.500"} size="xl" ml={20} >
    Achievements :
  </Text>
  <Text fontSize="larger" color="{isDark ? 'gray.400' : 'black'}" ml="20" mt="5">
   Winner of "Dr . APJ Abdul kalam Young Achiever Award -2022" - presented by World Youth Federation
  </Text>
  <Text fontSize="larger" color="{isDark ? 'gray.400' : 'black'}" ml="20" mt="5">
   Finalist of Smart India Hackathon GRAND FINALE (Senior Software Edition - 2022)
  </Text>
  <Image
           ml="20"
           mt="10"
           alignSelf="flex-start"
           background="transparent"
           boxShadow="lg"
           boxSize= "170"
           borderRadius="md"
           
          src="https://media.licdn.com/dms/image/C5622AQEM56krJVFMPQ/feedshare-shrink_800/0/1675527666610?e=1685577600&v=beta&t=ystIn1HuZy-XstG1wJHnB2-lSynZiWdJ6NJrFNcM6FE"
        />





  



 
        </Box>
    </Flex>

  )
}

export default Profile