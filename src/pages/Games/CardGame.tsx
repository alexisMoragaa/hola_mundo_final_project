import { Offer } from "./useOffers";
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

type Props = {
  Offer: Offer;
};

export default function CardGame({ Offer }: Props) {
  return (
    <>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          window.location.href = `https://www.cheapshark.com/redirect?dealID=${Offer.dealID}`;
        }}
      >
        <Box
          maxW={"445px"}
          w={"full"}
          // eslint-disable-next-line react-hooks/rules-of-hooks
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Box
            h={"210px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            <Image h={"210px"} src={Offer.thumb} />
          </Box>
          <Stack>
            <Text
              color={"green.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              {Offer.isOnSale == "1" ? "Oferta" : "Precio Normal"}
            </Text>
            <Heading
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {Offer.title}
            </Heading>
            <Text color={"gray.500"}>Critica: {Offer.steamRatingText}</Text>
          </Stack>
          <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text fontWeight={600}>Puntaje: {Offer.metacriticScore}</Text>
              <Text color={"gray.500"}>
                Valor antes: {Offer.normalPrice} - Valor Ahora:{" "}
                {Offer.salePrice}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </div>
    </>
  );
}
