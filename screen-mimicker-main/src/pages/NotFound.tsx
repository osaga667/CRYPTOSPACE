
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/50 p-6">
      <div className="text-center max-w-md mx-auto glass-morphism rounded-3xl py-16 px-8">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/5 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8v4"></path>
            <path d="M12 16h.01"></path>
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        </div>
        <h1 className="text-4xl font-medium mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/10 hover:scale-105 active:scale-100"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
