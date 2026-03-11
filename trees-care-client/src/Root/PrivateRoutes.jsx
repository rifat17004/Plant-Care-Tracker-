import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import { use } from "react";
import Loading from "../Component/Loading";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  let location = useLocation();

  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/auth/login" state={location.pathname} />;
  }
  return children;
};

export default PrivateRoutes;
