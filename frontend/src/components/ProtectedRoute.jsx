import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getUser } from "../redux/auth/AuthApi";
import { capitalizeFirstLetter } from "../utils";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ redirectPath = "/", children }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { isError, user, isSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    document.title = location?.pathname
      .split("/")
      .map(capitalizeFirstLetter)
      .join(" ");
  }, [location]);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  if (isError) {
    return (
      <>
        <Navigate to="/" replace />;
      </>
    );
  } else {
    return children ? (
      <div className="flex bg-slate-200/70 relative z-50">
        {children}
        <Outlet />
      </div>
    ) : (
      <Outlet />
    );
  }
};

export default ProtectedRoute;
