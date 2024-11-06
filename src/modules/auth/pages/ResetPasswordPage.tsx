import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import FormCard from "../components/FormCard";

import ResetPasswordForm from "../components/ResetPasswordForm";

import { Link } from "react-router-dom";

import IconChevronLeft from "@/components/icons/IconChevronLeft";

export const Component = () => {
  usePageTitle("Reset Password");
  return (
    <TransitionPage>
      <section className="flex justify-center p-1rem">
        <FormCard>
          <ResetPasswordForm />
          <div className="mt-1.25rem">
            <Link
              to="/auth/login"
              className="flex items-center justify-center text-primary text-14 gap-0.75rem"
            >
              <IconChevronLeft
                svgProps={{
                  className: "w-0.75rem h-0.75rem",
                }}
              />
              Back to login
            </Link>
          </div>
        </FormCard>
      </section>
    </TransitionPage>
  );
};

Component.displayName = "ResetPasswordPage";
