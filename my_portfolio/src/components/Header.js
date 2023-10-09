import React from 'react';
import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import { Circle, Stack, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';


const Header = () => {
  const { ColorMode } = useColorMode();
  const isDark = ColorMode === 'dark';
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://docs.google.com/document/d/1JO7JBCsE8UDipTmfE80NeVKWLvYNclhl/edit?usp=sharing&ouid=106766396987091418328&rtpof=true&sd=true'; 
    link.download = 'gunaCV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Stack>
      {isNotSmallerScreen && (
        <Circle
          position="absolute"
          bg="blue.100"
          opacity="0"
          w="250px"
          h="250px"
          alignSelf="Flex-end"
          right="0.5px"
        />
      )}

      <Flex
        direction={isNotSmallerScreen ? 'row' : 'column'}
        w="250"
        h="250"
        spacing="10px"
        p={isNotSmallerScreen ? '10' : 0}
        alignSelf="flex-start"
      >
        <Box>
          <Text fontSize="3xl" fontWeight={'semibold'}>
            Hi, I am
          </Text>

          <Text 
            fontSize="6xl"
            fontWeight="bold"
            bgGradient="linear(to-r, blue.500, blue.500, purple.600, purple.600)"
            bgClip="text"
          >
            Guna.R
          </Text>

          <Text
            fontsize="2x1"
            color={isDark ? 'gray.200' : 'black.400'}
          >
            A highly motivated and hardworking individual Seeking a job opportunity as a software engineer  where I can learn new skills, expand my knowledge,leverage my learnings , contribute my ideas and be mentored towards a successful career, I wish to work with a diverse team that works towards contributing to the company’s vision and goals.
          </Text>
          

          <Button mt={8} colorScheme="blue" onClick={downloadCV}>
            Download-CV
          </Button>
          <box alignSelf="flex-start" ml="80">
          <Text 
          fontSize="2xl" fontWeight="semibold" color="cyan.500" size="xl" mt="10" mb="4"
          >
           Qualification:
          </Text>
          <Text mt="6" fontSize="lg"
            fontWeight="semibold"
            bgGradient="linear(to-r, blue.500, blue.500, purple.600, purple.600)"
            bgClip="text" alignSelf="self-start" ml="15"> 
                   B.E.CSE - 8.4*CGPA
            </Text>
            <Text  mt ="6" ml="17" fontsize="2x1"
            color={isDark ? 'gray.400' : 'black.400'}> - Akshaya College Of Engineering And Technology, Coimbatore</Text>
            <Text mt="6" fontSize="lg"
            fontWeight="semibold"
            bgGradient="linear(to-r, blue.500, blue.500, purple.600, purple.600)"
            bgClip="text" alignSelf="self-start" ml="15">
                HSC - 68 %
            </Text>
          
          
          <Text  mt="6" fontsize="lg"
            color={isDark ? 'gray.800' : 'black.400'}ml="17"> - P.D.R.V Mat.Hr.Sec.School , Harur </Text>


<Text mt="6" fontSize="lg"
            fontWeight="semibold"
            bgGradient="linear(to-r, blue.500, blue.500, purple.600, purple.600)"
            bgClip="text" alignSelf="self-start" ml="15">
                SSLC - 92 %
            </Text>
            <Text mt="4"  fontsize="2x1"s
            color={isDark ? 'gray.400' : 'black.400'} ml="17"> - P.D.R.V Mat.Hr.Sec.School , Harur </Text>

<Text 
          fontSize="2xl" fontWeight="semibold" color="cyan.500" size="xl" mt="10" mb="4"
          >
           Area Of Interest :
          </Text>
          <Text fontSize="larger" color="{isDark ? 'gray.400' : 'black'}" ml="20" mt="5">
- Artificial Intelligence
  </Text>
  <Text fontSize="larger" color="{isDark ? 'gray.400' : 'black'}" ml="20" mt="5">
- Machine Learning
  </Text>
  <Text fontSize="larger" color="{isDark ? 'gray.400' : 'black'}" ml="20" mt="5">
- Full Stack Development 
  </Text>
  <Text fontSize="larger" color="{isDark ? 'gray.400' : 'black'}" ml="20" mt="5">
- AWS
  </Text>
  <Text 
          fontSize="2xl" fontWeight="semibold" color="cyan.500" size="xl" mt="10" mb="4"
          >
           Personal Strength :
          </Text>
          <Text fontSize="larger" color="{isDark ? 'gray.400' : 'black'}" ml="20" mt="5">
- Curiosity & Passion for Learning New Technologies 
  </Text>
  <Text fontSize="larger" color="{isDark ? 'gray.400' : 'black'}" ml="20" mt="5">
-  Consistent HardWork
  </Text>



</box>

        </Box>
        <Image
          ml={15}
          mt={isNotSmallerScreen ? '0' : '12'}
          mb={isNotSmallerScreen ? '0' : '12'}
          alignSelf="center"
          borderRadius="full"
          background="transparent"
          boxShadow="lg"
          boxSize="245px"
          zindex="1"
          src="https://media.licdn.com/dms/image/D5603AQEejENlFWEWOw/profile-displayphoto-shrink_400_400/0/1668617185247?e=1688601600&v=beta&t=JK4qxEbtA7vTZ5ZH8Pwd6aCHtJ5hsl2lU9KSWyJo7Ro"
        />
      </Flex>
    </Stack>
  );
};

export default Header;
