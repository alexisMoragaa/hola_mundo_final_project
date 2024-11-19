import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      {isRouteErrorResponse(error)
        ? "La pagina no existe"
        : `Ha ocurrido un error: ${(error as Error).message}`}
    </>
  );
}
