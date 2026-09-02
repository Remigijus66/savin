import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

export default function MainLayout() {
  const { pathname } = useLocation();

  // Keičiant puslapį grįžtame į viršų
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
