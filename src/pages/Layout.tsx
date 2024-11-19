import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      {children ?? <Outlet />}
    </>
  );
}
