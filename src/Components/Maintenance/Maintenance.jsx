import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.


// import Head from 'next/head'
import {
  Box,
  Heading,
  Container,
  Center,
  Text,
  Flex,
  Card,
  FormControl,
  FormErrorMessage,
  Link,
  FormLabel,
  Button,
  Select,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Image,
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  List,
  ListItem,
  ModalBody,
  StackDivider,
  VStack,
  SimpleGrid,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import ferreterosapp from "../../Images/ferreteros-app-bg.png";
import digital from "../../Images/digital.jpeg";
import ferreteria from "../../Images/ferreteria.jpeg";
import logoblack from "../../Images/ferreteros-app-black.png";
import logowhite from "../../Images/ferreteros-app-white.png";
import logocatalogos from "../../Images/ferreteros-app-catalogos.png";
import logofacturacion from "../../Images/ferreteros-app-facturacion.png";
import logoferreteroia from "../../Images/ferreteros-app-ferreteroia.png";
import logopuntoventa from "../../Images/ferreteros-app-puntoventa.png";
import Product from "./Product"
import Vision from "./Vision"
import Right from "../Icons/Right"
import Check from "../Icons/Check"
import Facebook from "../Icons/Facebook"
import Youtube from "../Icons/Youtube"
import LinkedIn from "../Icons/LinkedIn"
import Twitter from "../Icons/Twitter"


export default function Maintenance() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const [isSelected, setSelected] = useState(true)
  const [option, setOption] = useState("")

  const { isOpen: isSFOpen , onOpen: onSFOpen, onClose: onSFClose } = useDisclosure()
  const { isOpen: isTSOpen , onOpen: onTSOpen, onClose: onTSClose } = useDisclosure()
  const { isOpen: isSFDIOpen , onOpen: onSFDIOpen, onClose: onSFDIClose } = useDisclosure()


  // const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isPVOpen , onOpen: onPVOpen, onClose: onPVClose } = useDisclosure()
  const { isOpen: isIAOpen , onOpen: onIAOpen, onClose: onIAClose } = useDisclosure()
  // const { isOpen: isDeleteOpen , onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure()

  const handleContinue = () => {
    // if (!isSelected) { setSelected(false) }
    // setSelected(true)
    // console.log(option)
    switch(option) {
      case "" :
        setSelected(false)
        break;
      case "SF":
        setSelected(true)
        onSFOpen();
        break;
      case "TS":
        setSelected(true)
        onTSOpen();
        break;
      case "SFDI":
        setSelected(true)
        onSFDIOpen();
        break;
      default :
        break;
    }

  }

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#ffffff",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            quantity: 1,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#0BC5EA",
        },
        links: {
          color: "#0BC5EA",
          distance: 250,
          enable: true,
          opacity: 0.2,
          width: 2,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 140,
        },
        opacity: {
          value: 0.2,
        },
        shape: {
          type: "square",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );


  const Feature = ({ text, icon, iconBg, color }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg} color={color}>
          {icon}
        </Flex>
        <Text fontWeight={600} fontSize={{base:"sm", sm:"md"}}>{text}</Text>
      </Stack>
    )
  }


  return (
    <> 
      <Container maxW={'5xl'}>
        <Grid templateColumns={{sm:'repeat(1, 1fr)', base: 'repeat(1, 1fr)'}}>
          <Box
            role={'group'}
            // p={6}
            // maxW={'330px'}
            // w={'full'}
            // boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Stack
            >
              <Center
                pt={{ base: 24, sm: 16 }}
                pb={{ base: 4, sm: 8 }}
                
                // width={48}
              >
                <Flex height={{base:"27px", sm:"35px", md:"38px", lg:"50px"}} w={{base:"45%",  sm:"33%", md:"29%", lg:"30%"}}>
                  <Box
                    // w={{base:"40%", sm:"25%"}}
                    // src={logoblack}
                    alt="logo"
                    backgroundImage={`url(${logoblack})`}
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
                </Flex>
              </Center>
              <Center color={'gray.900'} letterSpacing="1px" fontSize={{ base: 'sm', sm: 'md'}} fontWeight={700}>
                Experimenta el Futuro
              </Center>
              <Heading
                fontWeight={600}
                fontSize={{ base: '4xl', sm: '4xl', md: '6xl' }}
                lineHeight={'110%'}
                textAlign="center"
                py={0}
                letterSpacing={{base:"-2px", sm:"-1px"}} 
              >
                Tecnologías Cloud <span fontSize="2xl">para</span>
                <br />
                <Text as={'span'} color={'cyan.400'}>
                  <span fontSize="2xl">la</span> Industria Ferretera
                </Text>
              </Heading>
              <Center textAlign="center" fontSize={{base:"sm", sm:"xl"}} color={'gray.500'} pt={{base:2, sm:2}}>
                Pon tu negocio ferretero a su máxima rentabilidad
              </Center>
            </Stack>
          </Box>
        </Grid>

        <Grid templateColumns={{sm:'repeat(1, 1fr)', base: 'repeat(1, 1fr)'}} gap={8} pt={5}>
          <Box
            role={'group'}
            p={{base:3, sm:4}}
            pb={{base:5 ,sm:6}}
            // maxW={'330px'}
            // w={'full'}
            bg={"cyan.400"}
            boxShadow={'2xl'}
            rounded={'3xl'}
            pos={'relative'}
            zIndex={1}
            width="100%"
           >
            <Stack align={'left'}>
            {/*<Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={600} color="cyan.400" mt={-5}>
              {"name2"}
            </Heading>*/}
            <Heading
                fontWeight={600}
                fontSize={{ base: 'md', sm: 'xl'}}
                mt={{base:2, sm:0}}
                textAlign="center"
                // lineHeight="80%"
                color="white"
              >
                Cuéntanos más sobre ti para empezar
            </Heading>
            <Grid templateColumns={{sm:'repeat(2, 1fr)', base: 'repeat(1, 1fr)'}} px={{base:0, sm:20}} gap={4} mt={2}>
              <FormControl>
                <Select
                  borderColor="white"
                  focusBorderColor="white"
                  shadow="md"
                  bg="cyan.500"
                  color="white"
                  isInvalid={!isSelected}
                  onChange={(e) => {setOption(e.target.value);  e.target.blur(); setSelected(true)}}
                  size={{base: "md", sm:"lg"}}
                  fontSize={{base:"sm", sm: "lg"}}
                  defaultValue=""
                  w="full"
                  rounded="md"
                  _focus={{
                            color: "black"
                          }}
                  _hover={{
                            boderColor: "white"
                          }}
                >
                  <option hidden disabled value="">¿Qué te trae por aquí hoy? *</option>
                  <option value="SF">Quiero un software para mi Ferretería</option>
                  <option value="TS">Mi negocio ya usa un software</option>
                  <option value="SFDI">Soy Fabricante, Distribuidor o Importador</option>
                </Select>
              </FormControl>
              <Button size={{base:"lg", sm:"lg"}} onClick={handleContinue}  bg="white" borderColor="cyan.200" borderWidth={4} shadow="md"
               _hover={{ bg: "white" }}
              >
                Continuemos <Right/>
              </Button>
            </Grid>
          </Stack>
          </Box>
        </Grid>

        <br/>
        <br/>

        <Grid templateColumns={{sm:'repeat(1, 1fr)', base: 'repeat(1, 1fr)'}}>
          <Box
            role={'group'}
            // p={6}
            // maxW={'330px'}
            // w={'full'}
            // boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Stack
            >
              <Text color={'cyan.400'} letterSpacing="1px" fontSize={{ base: 'md', sm: 'lg'}} fontWeight={700}>
                🏳️ Por qué Ferreteros.app
              </Text>
              <Heading
                fontWeight={700}
                fontSize={{ base: '2xl', sm: '4xl'}}
                lineHeight={'110%'}
                textAlign="left"
                py={0}
              >
                  Innovando Juntos<br/>para un Mejor Futuro
              </Heading>
            </Stack>
          </Box>
        </Grid>
        <Vision/>

        <br/>
        <br/>

        <Grid templateColumns={{sm:'repeat(1, 1fr)', base: 'repeat(1, 1fr)'}}>
          <Box
            role={'group'}
            // p={6}
            // maxW={'330px'}
            // w={'full'}
            // boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Stack
            >
              <Text color={'cyan.400'} letterSpacing="1px" fontSize={{ base: 'md', sm: 'lg'}} fontWeight={700}>
                🏳️ Nuestras Soluciones
              </Text>
              <Heading
                fontWeight={700}
                fontSize={{ base: '2xl', sm: '4xl'}}
                lineHeight={'110%'}
                textAlign="left"
                py={0}
              >
                  Mayor Eficiencia <br/>Mayor Impacto
              </Heading>
            </Stack>
          </Box>
        </Grid>
        <Grid templateColumns={{sm:'repeat(2, 1fr)', base: 'repeat(1, 1fr)'}} gap={8} pt={5}>	        
          <Product
            hero="FERRETERIAS INTELIGENTES"
            name1="Desarrollado para Ferreteros."
            name2="Desarrollado para ti."
            description="Más de 250 ferreteros como tú ya confían en nuestra tecnología. Desde el abastecimiento inteligente del inventario hasta la facturación electrónica, nos encargamos de todo para que puedas concentrarte en lo que mejor sabes hacer."
            bg="yellow.400"
            logo={logopuntoventa}
            // cta="Ir a Ferreteros.App PuntoVenta"
            // href="https://ferreteros.app"
          >
            <Link onClick={onSFOpen} fontWeight={600} fontSize={'lg'}>
              <Flex direction={'row'} align={'left'}>
                Ir a Ferreteros.App PuntoVenta <Right/>
              </Flex>
            </Link>
          </Product>

          <Product
            hero="PEDIDOS ILIMITADOS"
            name1="Reserva rápida de pedidos."
            name2="Para pedidos grandes."
            description="Ya sea que estés buscando crear una tienda desde cero o quieras algo ya más preparado, comienza con un catálogo potente y fácil de usar y permite a tus clientes realizar un pedido fácilmente. Esta herramienta está diseñada para fabricantes, distribuidores e importadores."
            bg="cyan.500"
            logo={logocatalogos}
            // cta="Ir a Ferreteros.App Catálogos"
            // href="https://catalogos.ferreteros.app"
          >
            <Link onClick={onIAOpen} fontWeight={600} fontSize={'lg'}>
              <Flex direction={'row'} align={'left'}>
                Ir a Ferreteros.App Catálogos <Right/>
              </Flex>
            </Link>
          </Product>
          <Product
            hero="ASISTENTE TODOPODEROSO"
            name1="Respuestas Precisas."
            name2="Decisiones Confiables."
            description="Obtenga las respuestas precisas a sus preguntas de negocio más complejas en segundos. Nuestro Asistente Ferretero cuenta con tecnología de inteligencia artificial, es preciso, ágil, eficiente y está diseñado para ayudarle a maximizar el retorno de tus inversiones."
            bg="purple.300"
            logo={logoferreteroia}
            // cta="Ir a Ferreteros.App Ferretero.IA"
            // href="https://ferreteros.app"
          >
            <Link onClick={onPVOpen} fontWeight={600} fontSize={'lg'}>
              <Flex direction={'row'} align={'left'}>
                Ir a Ferreteros.App IA <Right/>
              </Flex>
            </Link>
          </Product>

          <Product
            hero="COMPROBANTES ILIMITADOS"
            name1="Más tiempo con tus Clientes."
            name2="Menos tiempo haciendo Clicks."
            description="Una solución todo en uno para cada rubro de la Industria. Nuestra plataforma se integra con otras aplicaciones de empresas e instituciones del Estado y está diseñada para ayudarte a ahorrar tiempo y dinero, y así puedas concentrarte en hacer crecer tu negocio."
            bg="red.400"
            logo={logofacturacion}
            // cta="Ir a Ferreteros.App Facturación"
            // href="https://ferreteros.app"
          >
            <Link onClick={onPVOpen} fontWeight={600} fontSize={'lg'}>
              <Flex direction={'row'} align={'left'}>
                Ir a Ferreteros.App FACTURACION <Right/>
              </Flex>
            </Link>
          </Product>
		    </Grid>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />

        <Grid templateColumns={{sm:'repeat(1, 1fr)', base: 'repeat(1, 1fr)'}} mt={10}>
          <Box
            // bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            zIndex={1}
          >
            <Container
              as={Stack}
              maxW={'5xl'}
              py={4}
              spacing={4}
              justify={'center'}
              align={'center'}>
              <Flex height={{base:"42px", sm:"36px", md:"45px"}} w={{base:"75%",  sm:"60%", md:"36%", lg:"29%"}}>
                <Box
                  // w={{base:"40%", sm:"25%"}}
                  // src={logoblack}
                  alt="logo"
                  backgroundImage={`url(${logoblack})`}
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
              </Flex>
              <Stack direction={'row'} spacing={6}>
                <Box as="a" href={'#'}>
                  Inicio
                </Box>
                <Box as="a" href={'#'}>
                  Visión
                </Box>
                <Box as="a" href={'#'}>
                  Soluciones
                </Box>
                <Box as="a" href={'#'}>
                  Contacto
                </Box>
              </Stack>
            </Container>
            <Box
            borderTopWidth={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
              >
                <Text>© {(new Date().getFullYear())} Ferreteros.app. Todos los derechos reservados.</Text>
                <Stack direction={'row'} spacing={6}>
                  <Link label={'Facebook'} href={'https://www.facebook.com/ferreterosapp'}>
                    <Facebook />
                  </Link>
                  <Link label={'YouTube'} href={'https://www.youtube.com/@FerreterosApp'}>
                    <Youtube />
                  </Link>
                  <Link label={'LinkedIn'} href={'https://linkedin.com/company/ferreterosapp'}>
                    <LinkedIn />
                  </Link>
                  <Link label={'Twitter'} href={'https://x.com/FerreterosApp'}>
                    <Twitter />
                  </Link>
                </Stack>
              </Container>
            </Box>
          </Box>
        </Grid>

        <Modal id="SOYFERRETERO" scrollBehavior="inside" size="full" isCentered isOpen={isSFOpen} onClose={onSFClose}>
          {/*<ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(5px) hue-rotate(5deg)'
          />*/}
          <ModalContent bg={'yellow.400'}>
            {/*<ModalHeader>Modal Title SOY FERRETERO</ModalHeader>*/}
            <ModalCloseButton size="lg" />
            <ModalBody>
              <Container maxW={'5xl'} pt={12}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                  <Stack spacing={4}>
                    <Flex>
                      <Text
                        bg="white"
                        fontSize="xs"
                        px={2}
                        py={0}
                        color={"yellow.400"}
                        fontWeight={700}
                        letterSpacing="1px"
                      >
                        {"FERRETERIAS INTELIGENTES"}
                      </Text>
                    </Flex>
                    <Box
                      rounded={'lg'}
                      mt={-1}
                      mr={18}
                      width={{base:"110%", sm: "90%", lg:"75%"}}
                      h={{base:"48px", sm:"38px", lg: "40px"}}
                    >
                      <Box
                        // w={{base:"40%", sm:"25%"}}
                        // src={logoblack}
                        alt="logo"
                        backgroundImage={`url(${logopuntoventa})`}
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
                    <Heading>Tu Ferretería en su Máxima Rentabilidad</Heading>
                    <Text color={'black'} fontSize={{base:"sm", sm:'lg'}}>
                      Automatiza tu ferretería, desde el abastecimiento inteligente del inventario hasta la facturación electrónica. Funciona para todo tipo de ferretería, incluida la tuya.
                    </Text>
                  </Stack>
                  <Flex>
                      <Image
                        rounded={'md'}
                        boxShadow="dark-lg"
                        alt={'feature image'}
                        src={ferreteria}
                        objectFit={'cover'}
                      />
                  </Flex>
                </SimpleGrid>
                <Stack spacing={4} mt={8}>
                  <Text fontSize="lg" fontWeight={600} color="black">
                    Nuestro compromiso es acompañarte en todo el proceso
                  </Text>
                  <Feature
                    icon={<Icon as={Check}/>}
                    iconBg={'yellow.300'}
                    color={'yellow.900'}
                    text={'Rellena el formulario y uno de nuestros expertos se pondrá en contacto contigo para agendarte un acceso al software.'}
                  />
                  <Feature
                    icon={<Icon as={Check}/>}
                    iconBg={'yellow.300'}
                    color={'yellow.900'}
                    text={'Tendrás acceso a la solución que mejor se adapte a tu negocio.'}
                  />
                  <Feature
                    icon={<Icon as={Check}/>}
                    iconBg={'yellow.300'}
                    color={'yellow.900'}
                    text={'Toda la información necesaria para empezar a utilizar Ferreteros.app.'}
                  />
                </Stack>
                <Text mt={8} fontSize="lg" fontWeight={600} color="black">
                  Más de 250 ferreterías en todo el país confían en nosotros y seguimos creciendo.
                </Text>
              </Container>
            </ModalBody>
            <ModalFooter>
              <Center w="full">
                <Button colorScheme='orange' size="lg" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScmF_NGZe8qFUTg0Qw_Fp1W6kUWK2OGBkpinc55R1GUgccsJA/viewform')}>Comienza gratis <Right/></Button>
              </Center>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal id="TENGOSOFTWARE" scrollBehavior="inside" size="full" isCentered isOpen={isTSOpen} onClose={onTSClose}>
          {/*<ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(5px) hue-rotate(5deg)'
          />*/}
          <ModalContent bg={'teal.200'}>
            {/*<ModalHeader>Modal Title SOY FERRETERO</ModalHeader>*/}
            <ModalCloseButton size="lg" />
            <ModalBody>
              <Container maxW={'5xl'} pt={12}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                  <Stack spacing={4}>
                    <Flex>
                      <Text
                        bg="white"
                        fontSize="xs"
                        px={2}
                        py={0}
                        color={"teal.400"}
                        fontWeight={700}
                        letterSpacing="1px"
                      >
                        {"FERRETEROS.APP"}
                      </Text>
                    </Flex>
                    {/*<Heading>Deja atrás las limitaciones</Heading>*/}
                    <Heading>Haz crecer tu negocio<br
                    />No tu inventario</Heading>
                    {/*<Heading>Supera las limitaciones de tu software actual con nuestra solución inteligente de gestión de inventario y reabastecimiento.</Heading>*/}
                    <Text color={'black'} fontSize={{base:"sm", sm:'lg'}}>
                      Supera las limitaciones de tu software actual. Únete a nuestra red de ferreterías y optimiza tu inventario inteligentemente con nuestra solución para maximizar tus ingresos y ganancias.
                    </Text>
                  </Stack>
                  <Flex>
                      <Image
                        rounded={'md'}
                        boxShadow="dark-lg"
                        alt={'feature image'}
                        src={digital}
                        objectFit={'cover'}
                      />
                  </Flex>
                </SimpleGrid>
                <Stack spacing={4} mt={8}>
                  <Text fontSize="lg" fontWeight={600} color="black">
                    Nuestro compromiso es acompañarte en todo el proceso
                  </Text>
                  <Feature
                    icon={<Icon as={Check}/>}
                    iconBg={'teal.300'}
                    color={'teal.900'}
                    text={'Rellena el formulario y uno de nuestros expertos se pondrá en contacto contigo para agendarte un acceso al software.'}
                  />
                  <Feature
                    icon={<Icon as={Check}/>}
                    iconBg={'teal.300'}
                    color={'teal.900'}
                    text={'Tendrás acceso a la solución que mejor se adapte a tu negocio.'}
                  />
                  <Feature
                    icon={<Icon as={Check}/>}
                    iconBg={'teal.300'}
                    color={'teal.900'}
                    text={'Toda la información necesaria para empezar a utilizar Ferreteros.app.'}
                  />
                </Stack>
                <Text mt={8} fontSize="lg" fontWeight={600} color="black">
                  Más de 250 ferreterías en todo el país confían en nosotros y seguimos creciendo.
                </Text>
              </Container>
            </ModalBody>
            <ModalFooter>
              <Center w="full">
                <Button colorScheme='blue' size="lg" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScmF_NGZe8qFUTg0Qw_Fp1W6kUWK2OGBkpinc55R1GUgccsJA/viewform')}>Comienza gratis <Right/></Button>
              </Center>
            </ModalFooter>
          </ModalContent>
        </Modal>

         <Modal id="SOYFDI" scrollBehavior="inside" size="full" isCentered isOpen={isSFDIOpen} onClose={onSFDIClose}>
          <ModalContent bg={'blue.500'}>
            <ModalCloseButton size="lg" />
            <ModalBody>
              <Container maxW={'5xl'} pt={12}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                  <Stack spacing={4}>
                    {/*
                      <Flex>
                      <Text
                        bg="white"
                        fontSize="xs"
                        px={2}
                        py={0}
                        color={"blue.400"}
                        fontWeight={700}
                        letterSpacing="1px"
                      >
                        {"FERRETERIAS INTELIGENTES"}
                      </Text>
                    </Flex>*/}
                    {/*<Heading>Deja atrás las limitaciones</Heading>*/}
                    <Heading>Conoce nuestra plataforma</Heading>
                    <Box
                      rounded={'lg'}
                      mt={-1}
                      mr={18}
                      width={{base:"90%", sm: "80%", lg:"75%"}}
                      h={{base:"49px", sm:"53px", lg: "60px"}}
                    >
                      <Box
                        // w={{base:"40%", sm:"25%"}}
                        // src={logoblack}
                        alt="logo"
                        backgroundImage={`url(${logowhite})`}
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
                    {/*<Heading>Creamos Superdueños de Ferreterías</Heading>*/}
                    <Text color={'black'} fontSize={{base:"md", sm:'lg'}}>
                      En un mercado global y digital en constante evolución, transformamos la manera de comerciar conectando marcas con el canal tradicional para impulsar el crecimiento de tu marca. ¿Qué es Ferreteros.app? Es una aplicación que elimina las barreras entre ferreteros, proveedores y compradores, potenciando las ventas tanto en sell in como en sell out, ofreciendo visibilidad y transparencia en la ejecución en el punto de venta. ¿Cómo lo logramos? Mediante la digitalización de la comunicación, planes de crecimiento, promociones y la obtención de insights relevantes. En última instancia, todos buscamos el mismo objetivo: resultados tangibles a corto plazo.
                    </Text>
                  </Stack>
                  <Flex>
                      <Image
                        rounded={'md'}
                        boxShadow="dark-lg"
                        alt={'feature image'}
                        src={ferreterosapp}
                        objectFit={'cover'}
                      />
                  </Flex>
                </SimpleGrid>
                <Stack spacing={4} mt={8}>
                  <Text fontSize="lg" fontWeight={600} color="black">
                    Nuestro compromiso es acompañarte en todo el proceso
                  </Text>
                  <Feature
                    icon={<Icon as={Check}/>}
                    iconBg={'blue.300'}
                    color={'blue.900'}
                    text={'Rellena el formulario y uno de nuestros expertos se pondrá en contacto contigo para agendarte una presentación.'}
                  />
                  <Feature
                    icon={<Icon as={Check}/>}
                    iconBg={'blue.300'}
                    color={'blue.900'}
                    text={'Toda la información necesaria para empezar a utilizar Ferreteros.app.'}
                  />
                </Stack>
                <Text mt={8} fontSize="lg" fontWeight={600} color="black">
                  Más de 250 ferreterías en todo el país confían en nosotros y seguimos creciendo.
                </Text>
              </Container>
            </ModalBody>
            <ModalFooter>
              <Center w="full">
                <Button colorScheme='red' size="lg" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeRPD4o4Tqyzeaqv1ub44f4tjlyv-mn_Q_7aaSXY1uD0ad6XQ/viewform')}>Rellenar formulario <Right/></Button>
              </Center>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal id="PUNTOVENTA" isCentered isOpen={isPVOpen} onClose={onPVClose}>
          <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(5px) hue-rotate(5deg)'
          />
          <ModalContent>
            <ModalHeader>Modal Title FERRETERO IA</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Custom backdrop filters!</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onPVClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal id="FERRETEROIA" isCentered isOpen={isIAOpen} onClose={onIAClose}>
          <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(5px) hue-rotate(5deg)'
          />
          <ModalContent>
            <ModalHeader>Modal Title Punto Venta</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Custom backdrop filters!</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onIAClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </>
  )
}