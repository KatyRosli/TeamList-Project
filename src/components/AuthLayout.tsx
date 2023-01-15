import React from 'react';
import { Suspense } from "react";
import { useOutlet, Await } from "react-router-dom";
import { AuthProvider } from "../hooks/useAuth";

export const AuthLayout = () => {
  const outlet = useOutlet();

  return (
    <Suspense fallback>
      <Await
        resolve={true}
        errorElement={<p>Something went wrong!</p>}
        children={(user) => (
          <AuthProvider userData={user}>{outlet}</AuthProvider>
        )}
      />
    </Suspense>
  );
};