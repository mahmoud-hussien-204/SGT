import AppHelper from "@/helpers/appHelper";

import useAuthJourney from "../hooks/useAuthJourney";

import FormCardTitle from "./FormCardTitle";

import IconCup from "./icons/IconCup";

import IconMail from "./icons/IconMail";

import IconLink from "@/components/icons/IconLink";

const ConfirmEmailForm = () => {
  const { userEmail } = useAuthJourney();

  return (
    <div>
      <FormCardTitle
        icon={<IconCup />}
        title="Almost done!"
        subtitle="Last step"
      />

      <div className="flex flex-col items-center text-center mt-1.88rem">
        <IconMail />

        <h6 className="text-20 text-neutral-1100 font-semibold my-1.25rem">
          Thank you!
        </h6>

        <p className="mb-5rem text-center text-neutral-500 text-14 leading-[1.3125rem]">
          We sent an email to <br />
          <span className="text-primary">
            {AppHelper.hashEmail(userEmail as string)}
          </span>
          <br />
          Click confirmation link in the email to
          <br /> verify your account
        </p>
      </div>

      <a
        href="https://mail.google.com/"
        target="_blank"
        rel="noreferrer"
        className="btn bg-gradient-btn min-h-3.25rem font-semibold text-1rem text-white hover:bg-gradient-btn-reverse w-full"
      >
        <IconLink />
        Open Email App and Confirm
      </a>
    </div>
  );
};

export default ConfirmEmailForm;
