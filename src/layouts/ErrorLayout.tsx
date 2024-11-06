import { useRouteError, isRouteErrorResponse } from "react-router";

const ErrorLayout = () => {
  const routeError = useRouteError();
  return (
    <div>
      ErrorLayout
      {isRouteErrorResponse(routeError) && (
        <pre>{JSON.stringify(routeError, null, 2)}</pre>
      )}
    </div>
  );
};

export default ErrorLayout;
