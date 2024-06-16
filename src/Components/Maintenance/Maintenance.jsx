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
  GridItem
} from '@chakra-ui/react'
import logoblack from "../../Images/ferreteros-app-black.png";
import logocatalogos from "../../Images/ferreteros-app-catalogos.png";
import logofacturacion from "../../Images/ferreteros-app-facturacion.png";
import logoferreteroia from "../../Images/ferreteros-app-ferreteroia.png";
import logopuntoventa from "../../Images/ferreteros-app-puntoventa.png";
import Product from "./Product"
import Vision from "./Vision"
import Right from "../Icons/Right"
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
    console.log(container);
  };

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
                <Flex height={{base:"27px", sm:"35px", md:"45px"}} w={{base:"43%",  sm:"33%", md:"28%"}}>
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
              >
                  La Industria Ferretera<br />
                <Text as={'span'} color={'cyan.400'}>
                  Rediseñada
                </Text>
              </Heading>
              <Center textAlign="center" fontSize={{base:"md", sm:"xl"}} color={'gray.500'} pt={{base:2, sm:8}}>
                Empoderamos ferreteros con software que maximizan el retorno de sus inversiones
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
                  id="country"
                  name="country"
                  autoComplete="country"
                  borderColor="white"
                  focusBorderColor="white"
                  shadow="md"
                  bg="cyan.500"
                  color="white"
                  size={{base: "md", sm:"lg"}}
                  w="full"
                  rounded="md"
                  _hover={{
                        color: "black"
   // 86                  color: isDarkMode ? "white" : "black",
                      }}
                >
                  <option selected hidden disabled value="">¿Qué te trae por aquí hoy? *</option>
                  <option>Quiero un software para mi Ferretería</option>
                  <option>Mi negocio ya usa un software</option>
                  <option>Soy Fabricante, Distribuidor o Importador</option>
                </Select>
              </FormControl>
              <Button size={{base:"lg", sm:"lg"}} onClick={()=> {}}  bg="white" borderColor="cyan.200" borderWidth={4} shadow="md"
               _hover={{
                        bg: "white"
   // 86                  color: isDarkMode ? "white" : "black",
                      }}
              >
                Continuar <Right/>
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
            cta="Ir a Ferreteros.App PuntoVenta"
            href="https://ferreteros.app"
          />

          <Product
            hero="PEDIDOS ILIMITADOS"
            name1="Reserva rápida de pedidos."
            name2="Para pedidos grandes."
            description="Ya sea que estés buscando crear una tienda desde cero o quieras algo ya más preparado, comienza con un catálogo potente y fácil de usar y permite a tus clientes realizar un pedido fácilmente. Esta herramienta tiene opciones para cada negocio."
            bg="cyan.400"
            logo={logocatalogos}
            cta="Ir a Ferreteros.App Catálogos"
            href="https://catalogos.ferreteros.app"
          />

          <Product
            hero="ASISTENTE TODOPODEROSO"
            name1="Respuestas Precisas."
            name2="Decisiones Confiables."
            description="Obtenga las respuestas precisas a sus preguntas de negocio más complejas en segundos. Nuestro Asistente Ferretero cuenta con tecnología de inteligencia artificial, es preciso, ágil, eficiente y está diseñado para ayudarle a maximizar el retorno de tus inversiones."
            bg="purple.300"
            logo={logoferreteroia}
            cta="Ir a Ferreteros.App Ferretero.IA"
            href="https://ferreteros.app"
          />
          
          <Product
            hero="COMPROBANTES ILIMITADOS"
            name1="Más tiempo con tus Clientes."
            name2="Menos tiempo haciendo Clicks."
            description="Una solución todo en uno para cada rubro de la Industria. Nuestra plataforma se integra con otras aplicaciones de empresas e instituciones del Estado y está diseñada para ayudarte a ahorrar tiempo y dinero, y así puedas concentrarte en hacer crecer tu negocio."
            bg="red.400"
            logo={logofacturacion}
            cta="Ir a Ferreteros.App Facturación"
            href="https://ferreteros.app"
          />
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
              <Flex height={{base:"30px", sm:"35px", md:"45px"}} w={{base:"48%",  sm:"33%", md:"28%"}}>
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


      </Container>
    </>
  )
}