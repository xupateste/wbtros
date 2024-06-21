
import {
  Box,
  Heading,
  Center,
  Text,
  Stack,
  Flex,
  useColorModeValue,
  Image,
  Link,
} from '@chakra-ui/react'
import logoblack from "../../Images/ferreteros-app-black.png";

import Right from "../Icons/Right"

export default function Product({name1, name2, bg, logo, description, hero, children}) {
	return (
		<Center py={0}>
	      <Box
	        role={'group'}
	        p={6}
	        // maxW={'330px'}
	        // w={'full'}
	        bg={bg}
	        boxShadow={'2xl'}
	        rounded={'lg'}
	        pos={'relative'}
	        zIndex={1}
	        width="100%"
	       >
	        {hero && (
	        	<Flex>
  	        	<Text
  	        		bg="white"
  	        		fontSize="xs"
  	        		px={2}
  	        		py={0}
  	        		color={bg}
  	        		fontWeight={600}
  	        		letterSpacing="1px"
  	        	>
  	        		{hero}
  	        	</Text>
        	  </Flex>
        	 )}
	        {logo && (
	        	<Box
  	          rounded={'lg'}
  	          mt={3}
  	          mr={18}
  	          width={{base:"110%", sm: "90%", lg:"75%"}}
  	          h={{base:"48px", sm:"38px", lg: "40px"}}
  	        >
  	          <Box
                // w={{base:"40%", sm:"25%"}}
                // src={logoblack}
                alt="logo"
                backgroundImage={`url(${logo})`}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                border="none"
                // flexShrink={1}
                w="100%"
                h="100%"
                // opacity={1}
                // transition="opacity 500ms ease-in"
              >
              </Box>  
   	        </Box>
   	       )}
	        <Stack pt={6} align={'left'}>
	          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} mt={-5}>
	            {name1}
	          </Heading>
	          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} mt={-2}>
	            {name2}
	          </Heading>
	          <Text>
	          	{description}
	          </Text>
	          <Flex>
	          	{children}
	          </Flex>
	        </Stack>
	      </Box>
	    </Center>
	)
}