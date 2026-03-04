import { Outlet } from "react-router";
import Nav from "../Component/Nav";

const AuthLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
