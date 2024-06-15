
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

export default function Goal({name1, name2, description}) {
	return (
		<Center py={0}>
	      <Box
	        role={'group'}
	        p={4}
	        // maxW={'330px'}
	        // w={'full'}
	        bg={"white"}
	        boxShadow={'2xl'}
	        rounded={'lg'}
	        pos={'relative'}
	        zIndex={1}
	        width="100%"
	       >
	        <Stack pt={6} align={'left'}>
	          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={600} color="cyan.400" mt={-5}>
	            {name1}
	            <Text display={{sm:"block", base:"none"}}></Text>
	            <Flex display={{sm:"none", base:"inline"}}> </Flex>
	            {name2}
	          </Heading>
	          <Text fontSize={'sm'}>
	          	{description}
	          </Text>
	        </Stack>
	      </Box>
	    </Center>
	)
}