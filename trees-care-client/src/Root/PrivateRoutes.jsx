import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import { use } from "react";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  let location = useLocation();
  console.log(location);

  if (loading) {
    return <span className="loading loading-spinner loading-2xl"></span>;
  }
  if (!user) {
    return <Navigate to="/auth/login" state={location.pathname} />;
  }
  return children;
};

export default PrivateRoutes;
