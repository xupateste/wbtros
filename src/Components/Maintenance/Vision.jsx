
import {
  Box,
  Heading,
  Container,
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

import Right from "../Icons/Right"
import Goal from "./Goal"

export default function Vision() {
	return (
    // <Container maxW={'5xl'}>
    <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm:'repeat(2, 1fr)', lg:'repeat(4, 1fr)' }} gap={4} pt={2}>
      <Goal
        name1="Socio de"
        name2="la Industria"
        description="Nos esforzamos por ser un socio estratégico líder para la Industria Ferretera, comprometidos en sus áreas más críticas, desde el desarrollo hasta lo comercial."
      />
      <Goal
        name1="Exito del"
        name2="Cliente"
        description="Estamos comprometidos con el éxito de las personas con las que trabajamos, sus empresas y la industria en general. Nuestro objetivo es proporcionar productos y servicios que brinden valor duradero."
      />
      <Goal
        name1="Excelencia"
        name2="en Producto"
        description="Ofrecemos un enfoque y una visión clara para asegurar que nuestros clientes cuenten con software, datos y servicios innovadores de alto valor, tanto ahora como en el futuro."
      />
      <Goal
        name1="Beneficio"
        name2="Colectivo"
        description="En línea con nuestro propósito de desarrollo nacional, tenemos en cuenta los intereses de clientes, empleados, accionistas y comunidades al ofrecer soluciones que apoyan la misión de la industria de mejorar y extender su existencia."
      />
    </Grid>
    // </Container>
  )
}