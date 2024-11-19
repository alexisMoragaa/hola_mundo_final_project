import { SimpleGrid } from "@chakra-ui/react";
import CardGame from "./CardGame";
import useOffers from "./useOffers";

export default function Games() {
  const { data, isLoading } = useOffers();

  if (isLoading) {
    return "Cargando...";
  }

  return (
    <>
      <SimpleGrid p={3} columns={[2, null, 3]} spacing={"40px"}>
        {data?.map((offer) => {
          return <CardGame Offer={offer} key={offer.dealID} />;
        })}
      </SimpleGrid>
    </>
  );
}
