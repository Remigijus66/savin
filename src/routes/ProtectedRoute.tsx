import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthConnect";
import type { JSX } from "react";

export default function ProtectedRoute({
  children,
  adminOnly = false,
}: {
  children: JSX.Element;
  adminOnly?: boolean;
}) {
  const { user, role, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (!user) {
    return <Navigate to="/" />;
  }

  if (adminOnly && role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
}