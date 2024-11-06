import { RouterProvider } from "react-router-dom";

import AuthProvider from "@/modules/auth/providers/AuthProvider";

import { router } from "./router/Router";

import LoadingScreen from "@/components/LoadingScreen";

import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AuthProvider>
      <main className="overflow-x-hidden font-poppins">
        <AnimatePresence>
          <RouterProvider router={router} fallbackElement={<LoadingScreen />} />
        </AnimatePresence>
      </main>
    </AuthProvider>
  );
}

export default App;
