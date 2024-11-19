import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Joke = {
  value: string;
};

export default function useChuck() {
  return useQuery({
    queryKey: ["joke"],
    queryFn: () => {
      return axios
        .get<Joke>("https://api.chucknorris.io/jokes/random")
        .then((response) => response.data);
    },
  });
}
