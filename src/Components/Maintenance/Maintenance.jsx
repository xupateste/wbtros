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
  Container as CContainer,
  Center,
  Text,
  Button,
  Flex,
  Card,
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
import Product from "./Product"

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
      <CContainer maxW={'4xl'}>
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
                pt={{ base: 8, sm: 16 }}
                pb={{ base: 4, sm: 8 }}
              >
                <Image w={{base:"40%", sm:"25%"}} src={logoblack} alt="logo" />            
              </Center>
              <Center color={'gray.900'} letterSpacing="1px" fontSize={{ base: 'sm', sm: 'md'}}>
                🏳️ Nuestra Visión
              </Center>
              <Heading
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                lineHeight={'110%'}
                textAlign="center"
                py={0}
              >
                  Las Tecnologías Cloud<br />
                <Text as={'span'} color={'cyan.400'}>
                  para la Industria Ferretera
                </Text>
              </Heading>
              <Text color={'gray.500'} py={{base:2 ,sm:8}}>
                250+ ferreteros como tú confían en nuestras tecnologías. Desde la toma de pedidos hasta la facturación electrónica, nos encargamos de todo – para que usted pueda concentrarse en lo que mejor sabe hacer.
              </Text>
            </Stack>
          </Box>
        </Grid>
        
        <Grid templateColumns={{sm:'repeat(2, 1fr)', base: 'repeat(1, 1fr)'}} gap={8} pt={5}>
	        <Product
            hero="PEDIDOS ILIMITADOS"
            name1="Reserva rápida de pedidos."
            name2="Para pedidos grandes."
            description="Ya sea que estés buscando crear una tienda desde cero o quieras algo ya más preparado, comienza con un catálogo potente y fácil de usar y permita a los clientes realizar un pedido fácilmente. Esta herramienta tiene opciones para cada negocio."
            bg="cyan.400"
            logo={logocatalogos}
            cta="Ir a Ferreteros.App Catálogos"
            href="https://catalogos.ferreteros.app"
          />
	        <Product
            hero="FERRETERIAS INTELIGENTES"
            name1="Desarrollado para Ferreteros."
            name2="Desarrollado para ti."
            description="250+ ferreteros como tú ya confían en nuestra tecnología. Desde el abastecimiento inteligente del inventario hasta la facturación electrónica, nosotros nos encargamos de todo – para que usted pueda concentrarse en lo que mejor sabe hacer."
            bg="yellow.400"
            logo={logofacturacion}
            cta="Ir a Ferreteros.App Facturación"
            href="https://ferreteros.app"
          />
	        <Product
            hero="ASISTENTE TODOPODEROSO"
            name1="Di adiós al trab."
            name2="Con un Ferretero Inteligente."
            bg="purple.300"
            logo={logoferreteroia}
          />
	        <Product
            name1="producto2"
            bg="teal.300"
            logo={logocatalogos}
          />
		    </Grid>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </CContainer>
    </>
  )
}