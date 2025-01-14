import Input from "@/components/Input";

import useResetPasswordForm from "../hooks/useResetPasswordForm";

import FormCardTitle from "./FormCardTitle";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import InputWithIconContainer from "@/components/InputWithIconContainer";

import IconEmail from "@/components/icons/IconEmail";

import Button from "@/components/Button";

import IconPaperPlan from "./icons/IconPaperPlan";

const ResetPasswordForm = () => {
  const { form, handleSubmit } = useResetPasswordForm();

  return (
    <form onSubmit={handleSubmit} noValidate id="reset-password-form">
      <FormCardTitle
        icon={<IconPaperPlan />}
        title="Reset Password"
        subtitle="Enter your email address and we'll send you an email with instructions to reset your password."
      />

      <div className="mt-1.88rem mb-1.25rem">
        <Label htmlFor="reset-password-form-email">Email address</Label>
        <InputWithIconContainer icon={<IconEmail />}>
          <Input
            {...form.register("email")}
            type="email"
            id="reset-password-form-email"
            placeholder="Email"
            isError={!!form.formState.errors.email}
          />
        </InputWithIconContainer>
        <ErrorMessage>{form.formState.errors.email?.message}</ErrorMessage>
      </div>

      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
