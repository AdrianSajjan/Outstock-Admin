import * as React from "react";
import { MainLayout } from "layout/Main";
import { Navigate, Outlet } from "react-router-dom";

type Props = {
  hasLayout?: boolean;
};

export const PrivateOutlet: React.FC<Props> = ({ children, hasLayout }) => {
  const isAuthenticated = true;

  if (!isAuthenticated) return <Navigate to="/" />;

  if (hasLayout) return <MainLayout>{children ? children : <Outlet />}</MainLayout>;

  return children ? <>{children}</> : <Outlet />;
};

PrivateOutlet.defaultProps = {
  hasLayout: true,
};
