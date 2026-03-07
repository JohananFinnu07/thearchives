import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useActiveState } from "@/hooks/use-ActiveState";

const NotFound = () => {
  const location = useLocation();
  const activeState = useActiveState();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  const homePath = activeState ? `/${activeState}` : "/";

  const label = activeState
    ? `Return to ${activeState.replace("-", " ")}`
    : "Return to Home";

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>

        <p className="mb-4 text-xl text-muted-foreground">
          Oops! Page not found
        </p>

        <Link
          to={homePath}
          className="text-primary underline hover:text-primary/90"
        >
          {label}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
