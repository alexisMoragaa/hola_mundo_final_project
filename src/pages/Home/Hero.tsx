import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import useChuck from "./useChuck";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const { data, isLoading } = useChuck();
  const navigate = useNavigate();
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Bienvenidos a <br />
            <Text as={"span"} color={"green.400"}>
              Game Sale
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Una web para encontrar ofertas. Ademas contamos chistes:
            <br />
            {isLoading ? "Cargando" : data?.value}
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
              onClick={() => navigate("/games")}
            >
              Get Started
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
