import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import { Link } from "react-router-dom";

import FormCard from "../components/FormCard";

import RegisterForm from "../components/RegisterForm";

import { lazy, Suspense } from "react";

const SocialAuthentication = lazy(
  () => import("../components/SocialAuthentication")
);

export const Component = () => {
  usePageTitle("Register");
  return (
    <TransitionPage>
      <section className="flex justify-center p-1rem">
        <FormCard>
          <RegisterForm />
          <div className="mt-1.25rem">
            <Suspense fallback="loading">
              <SocialAuthentication />
            </Suspense>
            <p className="text-center text-neutral-600 text-14 mt-1.25rem">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-primary">
                Sign in
              </Link>
            </p>
          </div>
        </FormCard>
      </section>
    </TransitionPage>
  );
};

Component.displayName = "RegisterPage";
