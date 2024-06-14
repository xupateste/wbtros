
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


export default function Product({name1, name2, bg, logo, description, cta, hero, href}) {
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
	        zIndex={1}>
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
	        <Box
	          rounded={'lg'}
	          mt={3}
	          mr={18}
	        >
	          <Image
	            // rounded={'lg'}
	            // height={230}
	            // width={282}
	            // objectFit={'cover'}
	            src={logo}
	            alt="#"
	          />
	        </Box>
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
	          <Stack direction={'row'} align={'left'}>
	            <Link href={href} fontWeight={600} fontSize={'lg'}>
	              {cta} 
	            </Link>
	          </Stack>
	        </Stack>
	      </Box>
	    </Center>
	)
}