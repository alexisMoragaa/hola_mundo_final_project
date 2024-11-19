import { Grid } from "@chakra-ui/react";
import { ReactNode } from "react";
import { NavLink, Outlet } from "react-router-dom";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" boxShadow="lg" mb={3} p={4}>
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/games"> Games</NavLink>
      </Grid>
      {children ?? <Outlet />}
    </>
  );
}
