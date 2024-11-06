import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import { Link } from "react-router-dom";

import FormCard from "../components/FormCard";

import LoginForm from "../components/LoginForm";

import { lazy, Suspense } from "react";

const SocialAuthentication = lazy(
  () => import("../components/SocialAuthentication")
);

export const Component = () => {
  usePageTitle("Login");
  return (
    <TransitionPage>
      <section className="flex justify-center p-1rem">
        <FormCard>
          <LoginForm />
          <div className="mt-1.25rem">
            <Link
              to="/auth/reset-password"
              className="block text-end text-8083-a-3 text-12 mb-1.25rem hover:text-primary transition-colors duration-200"
            >
              Forgot password?
            </Link>
            <Suspense fallback="loading">
              <SocialAuthentication />
            </Suspense>
            <p className="text-center text-neutral-600 text-14 mt-1.25rem">
              Don’t have an account?{" "}
              <Link to="/auth/register" className="text-primary">
                Sign up
              </Link>
            </p>
          </div>
        </FormCard>
      </section>
    </TransitionPage>
  );
};

Component.displayName = "LoginPage";
